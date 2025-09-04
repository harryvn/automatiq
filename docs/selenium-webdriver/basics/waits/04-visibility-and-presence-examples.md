---
id: visibility-and-presence-examples
title: Visibility and Presence
pagination_label: Element Visibility & Presence Examples
slug: /visibility-and-presence-examples
sidebar_position: 4
---

Below are examples of most common methods used to wait for element presence and visibility.

:::note
This section will cover the most commonly used methods in practice; however, providing examples for each method mentioned **[here](/docs/expected-conditions#visibility-and-presence)** is beyond the scope of this guide.
:::

## Element Visibility

### Waiting for an Element to Be Located

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class VisibilityOfElementLocatedExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the page
            driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

            // Click the "Start" button
            WebElement startButton = driver.findElement(By.cssSelector("#start button"));
            startButton.click();

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait until the visibility of the element is located
            WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
            //highlight-end

            // Print the text of the element
            System.out.println("Element text: " + element.getText());

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

### Waiting for an Element to be Visible

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class VisibilityOfExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the website
            driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

            // Find the hidden element before clicking the button
            WebElement hiddenElement = driver.findElement(By.id("finish"));

            // Verify that the element is present but not visible initially
            System.out.println(
                "Is element displayed before loading: " + hiddenElement.isDisplayed());


            // Click the start button to reveal the hidden element
            WebElement startButton = driver.findElement(By.cssSelector("#start button"));
            startButton.click();

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait until the element is visible
            WebElement visibleElement = wait.until(
                ExpectedConditions.visibilityOf(hiddenElement));
            //highlight-end

            // Print confirmation that the element is now visible
            System.out.println(
                "Is element displayed after loading: " + visibleElement.isDisplayed());

            System.out.println("Element text: " + visibleElement.getText());

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

### Waiting for Visibility of All Elements

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;

public class VisibilityOfAllElementsExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the website
            driver.get("https://the-internet.herokuapp.com/tables");

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Find all rows in the first table
            List<WebElement> tableRows = driver.findElements(
                By.cssSelector("#table1 tbody tr"));

            // Wait for all rows to be visible
            List<WebElement> visibleRows = wait.until(
                ExpectedConditions.visibilityOfAllElements(tableRows));
            //highlight-end

            // Print the number of visible rows
            System.out.println("Number of visible rows: " + visibleRows.size());

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

### Waiting for Visibility of all elements by locator

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;

public class VisibilityOfAllElementsLocatedByExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the website
            driver.get("https://the-internet.herokuapp.com/tables");

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Find all rows in the first table
            List<WebElement> tableRows = driver.findElements(
                By.cssSelector("#table1 tbody tr"));

            // Wait for all rows to be visible
            List<WebElement> headers = wait.until(
                ExpectedConditions.visibilityOfAllElementsLocatedBy(
                    By.cssSelector("#table1 th")));
            //highlight-end

            // Print the header text from each visible header
            System.out.println("Table headers:");
            for (WebElement header : headers) {
                System.out.println("- " + header.getText());
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

### Waiting for an Element to be Invisible

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class InvisibilityOfElementLocatedExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the webpage
            driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

            // Click the "Start" button
            WebElement startButton = driver.findElement(By.cssSelector("#start button"));
            startButton.click();

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait until the loading spinner disappears
            wait.until(
                ExpectedConditions.invisibilityOfElementLocated(By.id("loading")));

            // Wait until "Hello World!" text becomes visible
            WebElement finishElement = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
            //highlight-end

            // Get and print the text
            System.out.println("Displayed message: " + finishElement.getText());

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

## Element Presence

### Waiting for an Element to Be Present

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class PresenceOfElementLocatedExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the webpage
            driver.get("https://the-internet.herokuapp.com/dynamic_loading/2");

            // Click the "Start" button
            WebElement startButton = driver.findElement(By.cssSelector("#start button"));
            startButton.click();

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait until the element with id 'finish' is present in the DOM
            WebElement finishElement = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.id("finish")));
            //highlight-end

            // Print the text
            System.out.println("Element Text: " + finishElement.getText());

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }
    }
```
