---
slug: selenium-framework-java
title: Part 1 - Selenium Automation Framework in Java
authors: [harryvn]
tags: [selenium, java, testng, extentreports, maven, log4j]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A Selenium-based modular automation framework in Java for web application testing.

<!-- truncate -->

---

## Github Repository

[Java Selenium Automation Framework](https://github.com/harryvn/selenium-automation-framework-java)

The GitHub repository linked above serves as the foundation for our Selenium automation framework project. Inside, you'll find a comprehensive Java-based framework designed to streamline web testing and automation tasks.

Here's what you can expect to find:

1. Framework Architecture: Dive into the src directory to explore the architecture of our Selenium automation framework. The framework is structured to promote scalability, maintainability, and reusability of test scripts and resources.

2. Test Scripts: Browse through the test directory to discover a collection of test scripts demonstrating various automation scenarios. These scripts leverage the power of Selenium WebDriver and Java to interact with web elements, perform actions, and validate outcomes.

3. Utilities: Explore the utilities package to find utility classes with methods that facilitate common automation tasks, these components aim to streamline your automation workflow.

Feel free to clone the repository to explore the source code, experiment with test scripts, or adapt the framework to suit your specific testing needs. Whether you're a QA engineer, a software developer, or a curious learner, this repository provides valuable insights into building efficient Selenium automation frameworks with Java.

:::note
This project is licensed under the GPL [LICENSE](https://github.com/harryvn/selenium-automation-framework-java/blob/main/LICENSE).
:::

---

## Introduction

This blog post introduces a Selenium-based modular automation framework developed in Java for web application testing. The framework is designed to be scalable, maintainable, and efficient, allowing you to automate tests for your web applications.

---

## Key Features

| Feature                    | Description                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `Modular Design`           | The framework follows a modular architecture, promoting separation of concerns and improving maintainability. |
| `Page Object Model (POM)`  | It utilises the Page Object Model pattern for better code organisation and reusability.                       |
| `TestNG Integration`       | TestNG is integrated for robust test management, parallel execution, and reporting capabilities.              |
| `Logging and Reporting`    | Logging and reporting mechanisms provide detailed insights into test execution.                               |
| `Configuration Management` | External configuration files manage test environment configurations.                                          |
| `Cross-Browser Testing`    | The framework supports testing across various browsers.                                                       |
| `Parallel Execution`       | Test suites can be executed concurrently, reducing execution time.                                            |
| `Customisable`             | Framework components are designed to be customisable for specific project requirements.                       |

---

## Project Insigths

<Tabs>
    <TabItem value="structure" label="Structure">
The project structure is well-organised, with clear separation of functionalities. The provided image offers a visual representation of the structure.

```bash
    .
    ├── logs
    │   └── automation.log
    ├── pom.xml
    ├── reports
    │   └── AutomationReport.html
    ├── runTests.sh
    ├── src
    │   ├── main
    │   │   ├── java
    │   │   │   └── com
    │   │   │       └── example
    │   │   │           ├── assertions
    │   │   │           │   └── SoftAssertionManager.java
    │   │   │           ├── browserCapabilities
    │   │   │           │   ├── ChromeCapabilities.java
    │   │   │           │   ├── EdgeCapabilities.java
    │   │   │           │   └── FirefoxCapabilities.java
    │   │   │           ├── browserManager
    │   │   │           │   ├── BrowserManager.java
    │   │   │           │   ├── LocalBrowserManager.java
    │   │   │           │   └── RemoteBrowserManager.java
    │   │   │           ├── configManager
    │   │   │           │   ├── ConfigFactory.java
    │   │   │           │   └── FMConfig.java
    │   │   │           ├── driverManager
    │   │   │           │   ├── DriverManager.java
    │   │   │           │   ├── LocalChromeDriverManager.java
    │   │   │           │   ├── LocalEdgeDriverManager.java
    │   │   │           │   ├── LocalFirefoxDriverManager.java
    │   │   │           │   ├── RemoteChromeDriverManager.java
    │   │   │           │   ├── RemoteEdgeDriverManager.java
    │   │   │           │   └── RemoteFirefoxDriverManager.java
    │   │   │           ├── enums
    │   │   │           │   ├── BrowserType.java
    │   │   │           │   ├── EnvironmentType.java
    │   │   │           │   └── LocatorType.java
    │   │   │           ├── listeners
    │   │   │           │   └── ExtentTestListener.java
    │   │   │           ├── logManager
    │   │   │           │   └── LoggerManager.java
    │   │   │           ├── pagefactory
    │   │   │           │   ├── HomePage.java
    │   │   │           │   └── LoginPage.java
    │   │   │           ├── reportManager
    │   │   │           │   └── ExtentReportManager.java
    │   │   │           ├── testbuilder
    │   │   │           │   └── TestBuilder.java
    │   │   │           └── utilities
    │   │   │               ├── CommonUtil.java
    │   │   │               ├── ExtentReportNGUtil.java
    │   │   │               └── StarterKit.java
    │   │   └── resources
    │   │       ├── local.properties
    │   │       ├── log4j2.xml
    │   │       └── remote.properties
    │   └── test
    │       └── java
    │           └── com
    │               └── example
    │                   └── testcases
    │                       ├── HomePageTest.java
    │                       └── LoginPageTest.java
    └── testng.xml
```

    </TabItem>
    <TabItem value="pkg" label="Packages & Classes">

Below are the packages and classes included in the automated testing framework.

These packages and classes collectively offer a robust framework for automated testing, covering various aspects such as
assertion management, browser capabilities, WebDriver management, configuration handling, test reporting, logging, and
utilities for interaction with WebDriver and ExtentReports.
| Packages | Classes | Description |
| ------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `com.example.assertions` | `SoftAssertionManager` | Utility class for managing soft assertions in TestNG tests. |
| `com.example.browserCapabilities` | `ChromeCapabilities`<br/>`EdgeCapabilities`<br/>`FirefoxCapabilities` | Provides browser capabilities for remote. execution |
| `com.example.browserManager` | `BrowserManager`<br/>`LocalBrowserManager`<br/>`RemoteBrowserManager` | Manages the creation of WebDriver instances based on the specified environment and browser type. |
| `com.example.configManager` | `ConfigFactory`<br/>`FMConfig` | Leverages Owner library interface for representing configuration properties. |
| `com.example.driverManager` | `DriverManager` | Manages ThreadLocal storage of WebDriver instances to initialize both local and remote WebDriver instances. |
| `com.example.enums` | `BrowserType`<br/>`EnvironmentType`<br/>`LocatorType` | Defines enumerations for browsers, environments, and locators. |
| `com.example.listeners` | `ExtentTestListener` | Listener for ExtentReports to capture test information and generate HTML reports. |
| `com.example.logging` | `LoggerManager` | Utility class for managing logging throughout the framework. |
| `com.example.reportManager` | `ExtentReportManager` | Manages the ExtentTest instances using ThreadLocal to ensure thread safety in a multi-threaded environment. |
| `com.example.testbuilder` | `TestBuilder` | A fluent interface for building and configuring WebDriver instances that allows customising driver initialisation, delete cookies, set timeouts etc. |
| `com.example.utilities` | `CommonUtil`<br/>`ExtentReportNGUtil`<br/>`StarterKit` | Offers utility methods for interacting with WebDriver and performing validations, reporting, and more.

:::info
Each class within these packages contributes a significant role in the framework's operation.
:::
</TabItem>
<TabItem value="arch" label="Diagram">
Below architectural diagram illustrates how different components interact during test execution, providing a comprehensive understanding of the framework's workflow.
![selenium-automation-framework-java](https://github.com/harryvn/selenium-automation-framework-java/assets/4848094/54cdd700-d31f-4565-b5a1-ab8cb8cdadac)
</TabItem>
</Tabs>

---

## Pre-requisites & Dependencies

<Tabs>
    <TabItem value="prereqs" label="Pre-requisites">
Before leveraging the selenium-automation-framework-java for automated testing, ensure the following prerequisites are met:
    - `Java Development Kit (JDK)`: Install the latest version of JDK to support Java development.
    - `Apache Maven`: Ensure Maven is installed and properly configured on your system for project build management.
    - `Integrated Development Environment (IDE)`: Utilise a Java IDE such as Eclipse or IntelliJ IDEA for convenient development and execution.
    - `Git`: Install Git, a distributed version control system, to manage the source code efficiently.
    </TabItem>
    <TabItem value="deps" label="Dependencies">
The framework relies on the following dependencies to deliver its functionality:
    - `Selenium WebDriver`: A powerful web automation framework facilitating web testing across various browsers.
    - `TestNG`: A robust testing framework for Java applications, offering comprehensive testing capabilities.
    - `Owner`: A Java properties management library for streamlined configuration handling.
    - `SLF4J API, SLF4J Simple`: Logging facade and simple implementation for logging in Java.
    - `Log4j Core, Log4j API`: Logging library and API for Java, enhancing logging capabilities.
    - `Extent Reports`: A reporting library for test automation, providing detailed and visually appealing test reports.
    - `Commons IO`: Utility classes for performing I/O operations in Java.
    </TabItem>
</Tabs>

---

## Setup

Setting up the selenium-automation-framework-java is straightforward:

1. **Clone the Repository**: Clone the repository to your local machine using the provided Git clone command.

```bash
git clone https://github.com/harryvn/selenium-automation-framework-java.git
```

2. **Execute the Command**: Run the provided Maven command to execute the test suite seamlessly.

```bash
mvn clean test
```

---

## Test Parameters Configuration

Below is a dedicated section explaining how to configure various test parameters through a configuration file. The blog post includes details on the parameters, their descriptions, and example use cases demonstrating how to run tests with different configurations.

```bash
### SAMPLE ###
# Configuration file for setting up test parameters
browser=CHROME
url=https://the-internet.herokuapp.com
headless=false
recordVideo=false
remoteSeleniumGridUrl=http://localhost:4444
env=REMOTE
username=tomsmith
password=SuperSecretPassword!
```

| Parameter               | Description                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| `browser`               | Specifies the web browser to use for testing (e.g., `CHROME`, `EDGE`, `FIREFOX`).                           |
| `url`                   | Defines the `URL` of the application under test, enabling seamless navigation to specific web pages.        |
| `headless`              | Determines whether to run the browser in headless mode, useful for executing tests without GUI interaction. |
| `recordVideo`           | Indicates whether to record video of the test execution, facilitating post-execution analysis and review.   |
| `remoteSeleniumGridUrl` | Specifies the `URL` of the remote Selenium Grid server for distributed testing.                             |
| `env`                   | Specifies the testing environment (e.g., `LOCAL`, `REMOTE`) to target during test execution.                |
| `username`              | Provides `username` for authentication.                                                                     |
| `password`              | Provides `password` for authentication.                                                                     |
| `parallel`              | Determines whether to run tests in parallel, optimising test suite execution time.                          |

:::note
Users can customise these parameters based on their testing requirements, adjusting values as necessary to tailor the testing experience.
:::

### Example Use Cases

<Tabs>
    <TabItem value="Case1" label="No Parameters">
Executing Tests without Any Additional Parameters:

```bash
mvn clean test
```

:::info
Tests will run with default configuration as no additional parameters are specified.
:::
</TabItem>
<TabItem value="Case2" label="Browser">
Local Testing with Chrome Browser:

```bash
mvn clean test -Denv=LOCAL -Dbrowser=CHROME
```

:::info
Tests will run locally with Chrome browser and default value will be used for other parameters.
:::
</TabItem>
<TabItem value="Case3" label="Video">
Remote Testing with Chrome Browser and Video Recording:

```bash
mvn clean test -Denv=REMOTE -Dbrowser=CHROME -DremoteSeleniumGridUrl=<ip-address:port> -DrecordVideo=true
```

:::info
Tests will run on remote Selenium Grid with Chrome browser with video recording enabled.
:::
</TabItem>
<TabItem value="Case4" label="Headless">
Remote Testing with Chrome Browser in Headless Mode:

```bash
mvn clean test -Denv=REMOTE -Dbrowser=CHROME -DremoteSeleniumGridUrl=<ip-address:port> -Dheadless=true
```

:::info
Tests will run on remote Selenium Grid with Chrome browser in headless mode.
:::
</TabItem>
<TabItem value="Case5" label="Auth">
Authentication Testing with Username and Password:

```bash
mvn clean test -Denv=REMOTE -Dusername=myusername -Dpassword=mypassword
```

:::info
Tests will run on remote Selenium Grid with provided username and password for authentication.
:::
</TabItem>
<TabItem value="Case6" label="Parallel">
Running Tests in Parallel:

```bash
mvn clean test -Dparallel=tests
```

:::info
Tests will run in parallel reducing overall execution time.
:::
</TabItem>
<TabItem value="Case7" label="Dynamic URL">
Specify Application URL for Testing:

```bash
mvn clean test -Durl=<url-of-site-under-test>
```

:::info
Tests will run using the specified URL of the application under test, enabling testing across various environments (e.g., staging, production) and seamless integration with continuous integration (CI) pipelines through dynamic URL specification.
:::
</TabItem>
</Tabs>

---

## Convenient Script

To further streamline the testing process, the repository includes a shell script named `runTests.sh`. This script automates the execution of tests based on user inputs, offering options for browser selection, local or remote testing, Selenium Grid configuration, video recording, parallel execution, and headless mode.

### Usage

- Ensure the script has executable permissions:

```bash
chmod +x runTests.sh
```

- Users can simply run the runTests.sh script and follow the prompts to configure and execute test scenarios effortlessly.

```bash
./runTests.sh
```

:::info
The script prompts the user to select various options and constructs the appropriate Maven command to execute the Selenium tests.
:::

:::note
Video recording is not supported in headless mode.
:::

Below is an example usage of the script:

![runTests](https://github.com/harryvn/selenium-automation-framework-java/assets/4848094/62a80c39-335a-4b63-abfe-7b1b678213d5)

:::info
For a detailed explanation of each option and additional information, refer to the comments within the script itself.
:::

---

## Conclusion

This blog post offers a comprehensive overview of the Selenium automation framework in Java. It covers the key features, project structure, functionalities of included packages and classes, framework architecture, setup instructions, and a convenient script for test execution. By following this guide, you can gain a solid understanding of the framework and leverage it to automate your web application testing process.

The source code is available on [GitHub](https://github.com/harryvn/selenium-automation-framework-java/). If you find the framework helpful, be sure to star the repository to show your support!

In the next [article](/blog/packaging), you will learn how to update the project for packaging it into a `JAR` file, ready for execution in a containerised environment using Docker.

To setup and execute automation scripts on remote selenium grid refer this [article](http://localhost:7001/blog/packaging).

If you find this article helpful or have any suggestions, reach out to me on [LinkedIn](https://www.linkedin.com/in/harryvn/).

Thank you and keep learning!

---

## References

[Selenium](https://www.selenium.dev/)

[TestNG](https://testng.org/)

[ExtentReports](https://www.extentreports.com/documentation/)

[Maven](https://maven.apache.org/guides/index.html)

[Log4J](https://logging.apache.org/log4j/2.x/)

[The Internet Heroku App](https://the-internet.herokuapp.com/)

---
