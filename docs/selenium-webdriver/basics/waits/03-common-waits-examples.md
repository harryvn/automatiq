---
id: common-waits-examples
title: Common Waits
pagination_label: Common Waits Examples
slug: /common-waits-examples
sidebar_position: 3
---

# Common Waits

Below are examples of how to use common waits in Selenium WebDriver.

## Implicit Wait

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class ImplicitWaitExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Set Implicit Wait (applies globally)
            //highlight-start
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            //highlight-end

            // Navigate to the page
            driver.get("https://the-internet.herokuapp.com/login");

            // Click the "Login" button
            WebElement loginButton = driver.findElement(
                By.cssSelector(".fa.fa-2x.fa-sign-in"));

            loginButton.click();

        } catch (Exception e) {
            System.out.println("Exception occurred: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

:::info
Implicit wait is a global setting that applies to all element-finding operations performed by the WebDriver.
:::

:::tip
In the example above, we use a `try-catch` block to handle exceptions. If the element is not found on the page within the globally set 10-second timeout, an exception will be thrown.
:::

---

## Explicit Wait

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ExplicitWaitExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the page
            driver.get("https://the-internet.herokuapp.com/login");

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait until ExpectedConditions are met
            WebElement loginButton = wait.until(
                ExpectedConditions.elementToBeClickable(
                    By.cssSelector(".fa.fa-2x.fa-sign-in")));
            //highlight-end

            // Click the "Login" button
            loginButton.click();

        } catch (Exception e) {
            System.out.println("Exception occurred: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```

---

### Fluent Wait

```java
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import java.time.Duration;

public class FluentWaitExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the page
            driver.get("https://the-internet.herokuapp.com/login");

            //highlight-start
            // Define fluent wait
            Wait<WebDriver> wait =
                    new FluentWait<>(driver)
                            .withTimeout(Duration.ofSeconds(2))
                            .pollingEvery(Duration.ofMillis(300))
                            .ignoring(ElementNotInteractableException.class);

            // Wait until ExpectedConditions are met
            WebElement loginButton = wait.until(
                ExpectedConditions.elementToBeClickable(
                    By.cssSelector(".fa.fa-2x.fa-sign-in")));
            //highlight-end

            // Click the "Login" button
            loginButton.click();

        } catch (Exception e) {
            System.out.println("Exception occured: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```
