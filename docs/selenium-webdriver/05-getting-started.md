---
id: getting-started
title: Getting Started
slug: /getting-started
sidebar_position: 5
---

In this guide, we will walk you through the steps to get started with Selenium WebDriver for automating web application testing.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Java Development Kit (JDK)**: Download and install the latest version of JDK.
2. **Integrated Development Environment (IDE)**: Use an IDE like IntelliJ IDEA, Eclipse, or Visual Studio Code.
3. **Maven**: Download and install Maven.

---

### Step 1: Set Up Your Project

Create a new Maven project in your IDE and add the necessary dependencies to your `pom.xml` file:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>selenium-webdriver-example</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.28.1</version>
        </dependency>
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>7.4.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.22.2</version>
                <configuration>
                    <suiteXmlFiles>
                        <suiteXmlFile>testng.xml</suiteXmlFile>
                    </suiteXmlFiles>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

---

### Step 2: Write Your First Test

Write a simple test to open a browser and navigate to a webpage. Here is a simple example of a Selenium WebDriver test in Java:

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumTest {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to a webpage
        driver.get("https://the-internet.herokuapp.com");

        // Print the title of the page
        System.out.println("Page title is: " + driver.getTitle());

        // Close the browser
        driver.quit();

    }
}
```

---

### Step 3: Run Your Test

Run the test using Maven:

```bash
mvn test
```

:::info
This will execute the `SeleniumTest` class and open a browser, navigate to the webpage, and print the title of the page.
:::

You can modify the `SeleniumTest` class to perform more complex actions or assertions based on the requirements of your application.
