---
slug: dockerising
title: Part 3 - Dockerising Test Suite
authors: [harryvn]
tags: [selenium, java, testng, maven, docker, openjdk]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A Comprehensive Guide to Containerising Your Testing Framework

<!-- truncate -->

---

## Introduction

In the previous [article](/blog/packaging), we updated few files for packaging the project artefacts to `JAR` files.

In this article, we will add the ability to run the tests in a containerised environment using `Docker`.

While there are several approaches to containerise the tests using `Docker`, we will be using the `Dockerfile` approach for our project.

---

## Prerequisites

Before leveraging the extensive capabilities of `Docker` & `Dockerfile`, let's ensure we have it set up properly. Follow the official documentation [here](https://docs.docker.com/engine/install/) to install Docker according to your operating system. The primary goal is to showcase Docker's versatility without delving into exhaustive details beyond the scope of this discussion.

---

## Key Features

1. `Multi-Stage Build`: Separates build and runtime environments to reduce image size and improve security.

2. `Layer Caching Optimisation`: Uses efficient caching mechanisms for faster builds.

3. `Security Best Practices`: Employs a non-root user and limited permissions in the runtime stage.

4. `Customisable Execution`: Configures runtime environment variables for flexible test execution.

---

## Dockerfile

Let's create a `Dockerfile` for the project, this file will consist of a `multi-stage` build process to ensure the application is built efficiently and the final image is lean and production-ready.

### Stage 1 Build

Let's start with the first `build` stage.

<Tabs>
    <TabItem value="img1" label="Step 1">
Base Image for first Build Stage

```Dockerfile
FROM maven:3.8.1-openjdk-17-slim AS builder
```

The `FROM` command specifies the base image to use for the first build stage. It pulls a lightweight version of the Maven image with OpenJDK 17 to compile the project. The `AS builder` part names this stage `builder` for use in multi-stage Docker builds, typically where application code is compiled and packaged.
</TabItem>
<TabItem value="metadata1" label="Step 2">
Add Metadata Labels (Optional)

```Dockerfile
LABEL maintainer="<Your Name & Email>" \
      version="<version number>" \
      description="<Short Description>"
```

The above `LABEL` adds metadata to the image for documentation and maintenance purposes.

</TabItem>

<TabItem value="wrkdir1" label="Step 3">
Set Working Directory

```Dockerfile
WORKDIR /automation
```

The `WORKDIR` command specifies the working directory inside the container to `/automation`. All subsequent commands, such as file copies or builds, will be executed within this directory. If the directory doesn't exist, it will be created.

</TabItem>

<TabItem value="caching" label="Step 4">
Optimise Layer Caching

```Dockerfile
COPY pom.xml .
```

The `COPY` command copies the `pom.xml` file to the working directory of container to leverage Docker's layer caching.

</TabItem>

<TabItem value="deps1" label="Step 5">
Download Dependencies

```Dockerfile
RUN mvn dependency:go-offline -B --no-transfer-progress
```

The `RUN` command downloads all dependencies to reduce build time in subsequent steps unless there are changes in project source code.

</TabItem>

<TabItem value="cp1" label="Step 6">
Copy Project Files

```Dockerfile
COPY src ./src
COPY test-suites ./test-suites
COPY testng.xml ./testng.xml
```

The `COPY` command copies the entire `src` & `test-suites` to the working directory of container. Similarly, it copies the `testng.xml` configuration file to the container. These commands ensure that the source code, test suites, and TestNG configuration are all available within the container for further processing or testing.

:::info
We are copying `testng.xml` as well so that if `${testSuite}` is not provided, the tests will still run using the default suite.
:::

</TabItem>

<TabItem value="pkg1" label="Step 7">
Package the Application

```Dockerfile
RUN mvn clean package -DskipTests -B --no-transfer-progress \
    && rm -rf ~/.m2/repository
```

The `RUN` command compiles and packages the application, skipping tests for faster build and cleans up the local Maven repository to reduce image size.

</TabItem>

</Tabs>

---

### Stage 2 Build

Let's start with the second `build` stage.

<Tabs>
    <TabItem value="img2" label="Step 1">
Base Image for Runtime

```Dockerfile
FROM bellsoft/liberica-openjdk-alpine:17.0.7-7
```

The `FROM` command specifies the base image to use for the second build stage. It pulls an lightweight Alpine-based image of BellSoft's Liberica OpenJDK 17.
</TabItem>

<TabItem value="metadata2" label="Step 2">
Add Metadata Labels (Optional)

```Dockerfile
LABEL maintainer="<Your Name & Email>" \
      version="<version number>" \
      description="<Short Description>"
```

The above `LABEL` adds metadata to the image for documentation and maintenance purposes.

</TabItem>

<TabItem value="nonroot" label="Step 3">
Create Non-Root User

```Dockerfile
RUN addgroup -S automation && adduser -S automation -G automation
```

The `RUN` command creates a system group named `automation` and adds a system user with the same name as a member of that group. As a security best practice, always create a `non-root` user to ensure the application runs with limited privileges, enhancing the container's security.

</TabItem>

<TabItem value="wrkdir2" label="Step 4">
Set Working Directory

```Dockerfile
WORKDIR /automation
```

The `WORKDIR` command specifies the working directory inside the container to `/automation`. All subsequent commands, such as file copies or builds, will be executed within this directory. If the directory doesn't exist, it will be created.

</TabItem>

<TabItem value="setperms" label="Step 5">
Create Directories and Set Permissions

```Dockerfile
RUN mkdir -p /automation/logs /automation/test-output \
    && chown -R automation:automation /automation/logs /automation/test-output
```

The `RUN` command creates two directories (`logs` and `test-output`) within the `/automation` folder and sets their ownership to the automation user and group. The `-p` flag ensures parent directories are created if they don't exist, while `chown -R` recursively assigns ownership permissions, establishing proper access rights for the application to write logs and test results.

</TabItem>

<TabItem value="cp2" label="Step 6">
Copy Files from Builder Stage

```Dockerfile
COPY --from=builder --chown=automation:automation /automation/target/tafs/libs/ ./libs/
COPY --from=builder --chown=automation:automation /automation/test-suites/ ./test-suites/
COPY --from=builder --chown=automation:automation /automation/testng.xml ./testng.xml
```

These `COPY` commands transfer specific files and directories from the `builder` stage to the current stage in the Docker image. The first command copies the application libraries, the second copies test suites and the third copies the TestNG configuration file. By using `--chown=automation:automation`, all copied files are immediately assigned to the automation user and group, ensuring proper access permissions for the application to execute tests.

</TabItem>

<TabItem value="envar" label="Step 7">
Define Environment Variables (Optional)

```bash
ENV ENVIRONMENT=REMOTE \
    BROWSER=CHROME \
    GRID_URL=http://<selenium-grid-host-or-ip>:<port> \
    RECORD_VIDEO=false \
    HEADLESS=false \
    TEST_SUITE=Master.xml
```

The `ENV` configuration sets default environment variables for running Selenium tests in a remote environment. It specifies the `browser` to be used as `Chrome`, the `Selenium Grid URL` for remote execution, and toggles options like `video recording` and `headless mode`. The `test suite` to execute is defined as `Master.xml`. This setup ensures flexibility and control over test execution parameters.

</TabItem>

<TabItem value="entrypoint" label="Step 8">
Set the Entry Point

```bash
ENTRYPOINT ["sh", "-c", "java -cp 'libs/*' -Denv=${ENVIRONMENT} \
    -Dbrowser=${BROWSER} \
    -DremoteSeleniumGridUrl=${GRID_URL} \
    -DrecordVideo=${RECORD_VIDEO} \
    -Dheadless=${HEADLESS} \
    org.testng.TestNG test-suites/${TEST_SUITE}"]
```

The `ENTRYPOINT` command sets the entry point for the container, specifying the command that runs when the container starts. It executes a Java command to run TestNG, specifying the classpath (`libs/*`), environment variables (like `${ENVIRONMENT}`, `${BROWSER}`, and others), and the test suite to execute from the `test-suites/` directory. This allows dynamic configuration of the test environment using variables passed at runtime.

</TabItem>

</Tabs>

---

:::info
Below is the final Dockerfile that uses multi-stage builds with Maven and OpenJDK to ensure an optimised and secure environment for running test suites.
:::

```dockerfile
# Use the Maven image to compile the project
FROM maven:3.8.1-openjdk-17-slim AS builder

# Add metadata labels
LABEL maintainer="<Your Name & Email>" \
      version="<version number>" \
      description="<Short Description>"

# Set the working directory
WORKDIR /automation

# Optimize layer caching by copying only pom.xml first
COPY pom.xml .

# Use specific maven goals and options for better performance
RUN mvn dependency:go-offline -B --no-transfer-progress

# Copy necessary project files
COPY src ./src
COPY test-suites ./test-suites
COPY testng.xml ./testng.xml

# Package the application
RUN mvn clean package -DskipTests -B --no-transfer-progress && rm -rf ~/.m2/repository

# Use an openjdk image from bellsoft
FROM bellsoft/liberica-openjdk-alpine:17.0.7-7

# Add metadata labels
LABEL maintainer="<Your Name & Email>" \
      version="<version number>" \
      description="<Short Description>"

# Create non-root user for security
RUN addgroup -S automation && adduser -S automation -G automation

# Set the working directory
WORKDIR /automation

# Create logs and test-output directories and set permissions
RUN mkdir -p /automation/logs /automation/test-output && chown -R automation:automation /automation/logs /automation/test-output

# Copy only required files from builder stage
COPY --from=builder --chown=automation:automation /automation/target/tafs/libs/ ./libs/
COPY --from=builder --chown=automation:automation /automation/test-suites/ ./test-suites/
COPY --from=builder --chown=automation:automation /automation/testng.xml ./testng.xml

# Define environment variables with defaults
ENV ENVIRONMENT=REMOTE \
    BROWSER=CHROME \
    GRID_URL=http://<selenium-grid-host-or-ip>:<port> \
    RECORD_VIDEO=false \
    HEADLESS=false \
    TEST_SUITE=Master.xml

# Set the entry point
ENTRYPOINT ["sh", "-c", "java -cp 'libs/*' -Denv=${ENVIRONMENT} -Dbrowser=${BROWSER} -DremoteSeleniumGridUrl=${GRID_URL} -DrecordVideo=${RECORD_VIDEO} -Dheadless=${HEADLESS} org.testng.TestNG test-suites/${TEST_SUITE}"]
```

---

## Environment Variables

| Variable       | Value                                      | Description                               |
| -------------- | ------------------------------------------ | ----------------------------------------- |
| `ENVIRONMENT`  | `REMOTE `                                  | Test environment (e.g., LOCAL or REMOTE). |
| `BROWSER`      | `CHROME`                                   | Browser for test execution.               |
| `GRID_URL`     | `http://<selenium-grid-host-or-ip>:<port>` | Selenium Grid URL for remote execution.   |
| `RECORD_VIDEO` | `false`                                    | Enable/disable video recording.           |
| `HEADLESS`     | `false`                                    | Run browser in headless mode.             |
| `TEST_SUITE`   | `Master.xml`                               | TestNG suite file to execute.             |

---

## Directory Structure

The container maintains the following structure:

```bash
/automation/
├── libs/          # Application dependencies
├── test-suites/   # TestNG suite files
├── testng.xml     # TestNG configuration
├── logs/          # Test execution logs
└── test-output/   # Test results and reports
```

---

## Build Docker Image

Next, to run the tests inside the container, we need to build the Docker image first.

Let's run the following command to build the Docker image.

```bash
docker build -t tafs-automation:1.0 .
```

The above command builds a Docker image from the Dockerfile located in the current directory (`.`). The `-t `flag tags the image with the name `tafs-automation` and assigns the version `1.0`, making it easier to reference and manage the image later.

Below is the command in action.

<img src={require('@site/static/img/java/build.avif').default} alt="build" />

<br/><br/>

:::info
Run command `docker image ls` to confirm the image is built successfully.
:::

<img src={require('@site/static/img/java/docker-image.avif').default} alt="dkrimg" />

---

## Run Tests

We are all set to execute the tests inside Docker container using the image we built in previous step.

```bash
docker run -d --rm --name tafs -e ENVIRONMENT=REMOTE -e BROWSER=CHROME -e GRID_URL=http://<selenium-grid-host-or-ip>:<port> -e RECORD_VIDEO=false -e HEADLESS=false -e TEST_SUITE=LoginPage.xml tafs-automation:1.0
```

The above command launches a new container named `tafs` from the `tafs-automation:1.0` image. The `-d` flag ensures the container starts in detached mode and `--rm` flag ensures the container is automatically removed after it stops running. Various environment variables are passed using flag `-e` to configure the test execution: `ENVIRONMENT` is set to `REMOTE`, `BROWSER` to `CHROME`, `GRID_URL` to `http://<selenium-grid-host-or-ip>:<port>`, and options for video recording and headless mode are specified as `false`. Finally, `TEST_SUITE` is set to `LoginPage.xml`, indicating which test suite to execute.

:::info
Run command `docker container ls -a` to confirm the container is up and running.
:::

<img src={require('@site/static/img/java/docker-container.avif').default} alt="docker-container" />

<br/><br/>

<img src={require('@site/static/img/java/live-preview.avif').default} alt="live-preview" />

<br/><br/>

:::info
To configure a Selenium Grid on your system to execute automation scripts, please refer to this [section](/blog/selenium-grid) of my another article, which demonstrates how to set up a Selenium Grid on local or remote systems.
:::

---

## Conclusion

In this article, we have effectively incorporated Docker into our testing workflow by developing a Dockerfile and building a Docker image. This method enables us to execute tests in a containerised environment, ensuring consistency and reliability across various systems. By following the steps detailed, we have produced a lightweight and production-ready Docker image capable of running our test suites with multiple configurations. This setup not only simplifies our testing process but also improves scalability and maintainability, making it more manageable to execute tests across different environments.

The source code is available on [GitHub](https://github.com/harryvn/selenium-automation-framework-java). If you find the framework helpful, be sure to star the repository to show your support!

In the next `article`, we will advance the project by introducing `Jenkins` CI/CD tool to configure various stages of the Docker process, including executing automation scripts as part of the pipeline.

If you find this article helpful or have any suggestions, reach out to me on [LinkedIn](https://www.linkedin.com/in/harryvn/).

Thank you and keep learning!

---

## References

[Docker](https://docs.docker.com/)

[Selenium](https://www.selenium.dev/)

[TestNG](https://testng.org/)

[Maven](https://maven.apache.org/guides/index.html)

[OpenJDK](https://openjdk.org/)
