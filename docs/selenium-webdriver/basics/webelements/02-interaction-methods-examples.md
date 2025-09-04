---
id: interaction-methods
title: Interaction Methods
pagination_label: Interaction Methods Examples
slug: /interaction-methods
sidebar_position: 2
---

## Sending Keys to an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clearElementTextExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the input element
        WebElement usernameTextField = driver.findElement(By.id("username"));

        // Enter Text
        usernameTextField.sendKeys("tomsmith");
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Clearing the Text of an Element

:::note
Here for demonstration, we are using the `sendKeys()` method to enter text into the input element and then using the `clear()` method to clear the text.
:::

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clearElementTextExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the input element
        WebElement usernameTextField = driver.findElement(By.id("username"));

        // Enter Text
        usernameTextField.sendKeys("tomsmith");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Clear the text
        usernameTextField.clear();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Clicking an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clickElementExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement loginButton = driver.findElement(
            By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Click the button
        loginButton.click();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Submitting a Form

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class submitFormExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement loginButton = driver.findElement(
            By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Submit the form
        loginButton.submit();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```
