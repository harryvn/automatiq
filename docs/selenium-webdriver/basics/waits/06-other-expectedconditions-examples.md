---
id: other-expected-conditions
title: Other ExpectedConditions
pagination_label: Other ExpectedConditions Examples
slug: /other-expected-conditions
sidebar_position: 6
---

Below are examples of other expected conditions used in Selenium WebDriver.

:::note
This section will cover the most commonly used methods in practice; however, providing examples for each method mentioned **[here](/docs/expected-conditions#text)** is beyond the scope of this guide.
:::

## Text

### Waiting for Text to be present in the element located

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class TextToBePresentInElementLocatedExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the page
            driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

            // Click the Start button
            WebElement startButton = driver.findElement(By.cssSelector("#start button"));
            startButton.click();

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the text "Hello World!" to be present in the located element
            boolean isTextPresent = wait.until(
                    ExpectedConditions.textToBePresentInElementLocated(
                        By.id("finish"), "Hello World!")
            );
            //highlight-end

            // Check if text appeared
            if (isTextPresent) {
                System.out.println("Text 'Hello World!' is present in the element.");
            } else {
                System.out.println("Text not found within the time limit.");
            }

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

---

## Frame

### Waiting for a frame to be available and switch to it

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class FrameToBeAvailableAndSwitchToItExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the nested frames page
            driver.get("https://the-internet.herokuapp.com/nested_frames");

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the "frame-top" to be available and switch to it
            wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(
                By.name("frame-top")));

            // Now switch to the "frame-left"
            wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(
                By.name("frame-left")));
            //highlight-end

            // Get text inside the frame
            WebElement bodyText = driver.findElement(By.tagName("body"));
            System.out.println("Text inside left frame: " + bodyText.getText());

            // Switch back to default content
            driver.switchTo().defaultContent();
            System.out.println("Switched back to default content.");

            // Navigate to a page with visible text in the default content
            driver.get("https://the-internet.herokuapp.com/");

            // Get text from the main page
            WebElement heading = driver.findElement(By.tagName("h1"));
            System.out.println("Text in default content: " + heading.getText());

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

---

## Alert

### Waiting for an alert to be present

```java
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class AlertToBePresentExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the JavaScript alerts page
            driver.get("https://the-internet.herokuapp.com/javascript_alerts");

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Click the button to trigger a JavaScript alert
            WebElement alertButton = driver.findElement(
                By.xpath("//button[text()='Click for JS Alert']"));

            // Click the button
            alertButton.click();

            // Wait for the alert to be present
            wait.until(ExpectedConditions.alertIsPresent());
            //highlight-end

            // Switch to the alert
            Alert alert = driver.switchTo().alert();

            // Get and print alert text
            System.out.println("Alert text: " + alert.getText());

            // Accept (click OK) the alert
            alert.accept();

            // Verify that the alert was handled
            WebElement result = driver.findElement(By.id("result"));
            System.out.println("Result text: " + result.getText());

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

:::note
In the upcoming sections, we will cover more details about `texts`, `frames`, and `alerts` as well as how to handle them effectively.
:::
