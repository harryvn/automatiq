---
id: locator-examples
title: Examples
pagination_label: Locator Examples
slug: /locator-examples
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Locator Examples

In this section, you will learn how to use different locator strategies to find elements on a webpage.

## By ID

```java <title="In this example we are finding the username field by it's 'id'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByIdExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com/login");

        // Find the element by ID
        //highlight-start
        WebElement usernameField = driver.findElement(By.id("username"));
        //highlight-end

        // Perform actions on the element
        usernameField.sendKeys("tomsmith");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By Name

```java <title="In this example we are finding the password field by it's 'name'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByNameExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com/login");

        // Find the element by name
        //highlight-start
        WebElement passwordField = driver.findElement(By.name("password"));
        //highlight-end

        // Perform actions on the element
        passwordField.sendKeys("SuperSecretPassword!");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By CSS Selector

```java <title="In this example we are finding the login button by it's 'cssSelector'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByCssSelectorExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com/login");

        // Find the element by CSS selector
        //highlight-start
        WebElement loginButton = driver.findElement(
            By.cssSelector(".fa.fa-2x.fa-sign-in"));
        //highlight-end

        // Perform actions on the element
        loginButton.click();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By Tag Name

```java <title="In this example we are finding the Reset Password field by it's 'tagName'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByTagNameExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com/forgot_password");

        // Find the element by tag name
        //highlight-start
        WebElement resetPasswordField = driver.findElement(By.tagName("input"));
        //highlight-end

        // Perform actions on the element
        resetPasswordField.sendKeys("noreply@example.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By Class Name

```java <title="In this example we are finding the login button by it's 'className'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByClassNameExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com/login");

        // Find the element by class name
        //highlight-start
        WebElement loginButton = driver.findElement(By.className("radius"));
        //highlight-end

        // Perform actions on the element
        loginButton.click();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By XPath

```java <title="In this example we are finding the login button using an 'xpath' expression.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByXPathExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com/login");

        // Find the element by XPath
        //highlight-start
        WebElement usernameField = driver.findElement(
            By.xpath("//input[@id='username']"));
        //highlight-end

        // Perform actions on the element
        usernameField.sendKeys("tomsmith");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By Link Text

```java <title="In this example we are finding the A/B Testing link using 'linkText'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByLinkTextExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Find the element by link text
        //highlight-start
        WebElement abTestLink = driver.findElement(By.linkText("A/B Testing"));
        //highlight-end

        // Perform actions on the element
        abTestLink.click();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## By Partial Link Text

```java <title="In this example we are finding the JavaScript onload event error link using 'partialLinkText'.">
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocatorByPartialLinkTextExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the webpage
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Find the element by partial link text
        //highlight-start
        WebElement jsOnloadEventErrorLink = driver.findElement(
            By.partialLinkText("onload"));
        //highlight-end

        // Perform actions on the element
        jsOnloadEventErrorLink.click();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

:::note
Using the appropriate locator strategy is essential for reliable and maintainable test scripts. Choose the strategy that best fits the structure of your web application.
:::
