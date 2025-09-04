---
id: alert-examples
title: Examples
pagination_label: Alert Examples
slug: /alert-examples
sidebar_position: 2
---

# Alert Examples

The following examples demonstrate how to use Selenium WebDriver to handle JavaScript alerts, confirmations, and prompts.

:::note
In the following examples, we will use `WebDriverWait` to wait for the alert to appear and then perform actions on it.
:::

## Simple Alert (OK Button Only)

```java
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class SimpleAlertExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the JavaScript alerts page
            driver.get("https://the-internet.herokuapp.com/javascript_alerts");

            // highlight-start
            // Click the button to trigger a JavaScript alert
            WebElement alertButton = driver.findElement(
                By.xpath("//button[text()='Click for JS Alert']"));

            alertButton.click();

            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the alert to be present
            Alert alert = wait.until(ExpectedConditions.alertIsPresent());

            // Get and print alert text
            System.out.println("Alert text: " + alert.getText());

            // Accept (click OK) the alert
            alert.accept();
            // highlight-end

            // Verify that the alert was handled
            String result = driver.findElement(By.id("result")).getText();
            System.out.println("Result text: " + result);

        } catch (Exception e) {
            // Print the error message
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

---

## Confirmation Alert (OK & Cancel)

```java
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ConfirmationAlertExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the JavaScript alerts page
            driver.get("https://the-internet.herokuapp.com/javascript_alerts");

            // highlight-start
            // Click the button to trigger a confirmation alert
            WebElement alertButton = driver.findElement(
                By.xpath("//button[text()='Click for JS Confirm']"));

            alertButton.click();

            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the alert to be present
            Alert alert = wait.until(ExpectedConditions.alertIsPresent());

            // Get and print alert text
            System.out.println("Alert text: " + alert.getText());

            // Accept (click OK) the alert
            alert.accept();
            // highlight-end

            // Verify that the alert was handled
            String result = driver.findElement(By.id("result")).getText();
            System.out.println("Result after OK: " + result);


        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

:::tip
Use the `dismiss()` method to dismiss the alert by clicking the Cancel button.

```java
alert.dismiss();
String result = driver.findElement(By.id("result")).getText();
System.out.println("Result after Cancel: " + result);
```

:::

---

## Prompt Alert (Input Field + OK/Cancel)

```java
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class PromptAlertExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the JavaScript alerts page
            driver.get("https://the-internet.herokuapp.com/javascript_alerts");

            // highlight-start
            // Click the button to trigger a prompt alert
            WebElement alertButton = driver.findElement(
                By.xpath("//button[text()='Click for JS Prompt']"));

            alertButton.click();

            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the alert to be present
            Alert alert = wait.until(ExpectedConditions.alertIsPresent());

            // Enter text and accept
            alert.sendKeys("Hello Selenium!");
            alert.accept();
            // highlight-end

            // Verify the result
            String result = driver.findElement(By.id("result")).getText();
            System.out.println("Result: " + result);

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

:::tip
Use the `dismiss()` method to dismiss the alert by clicking the Cancel button.

```java
alert.dismiss();
System.out.println("Result after Cancel: " + driver.findElement(
    By.id("result")).getText());
```

:::
