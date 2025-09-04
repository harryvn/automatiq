---
id: state-examples
title: State
pagination_label: Element State Examples
slug: /state-examples
sidebar_position: 5
---

Below are examples of most common methods used to wait and check the state of an element.

:::note
This section will cover the most commonly used methods in practice; however, providing examples for each method mentioned **[here](/docs/expected-conditions#state)** is beyond the scope of this guide.
:::

## Element State

### Waiting for an Element to Be Clickable

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ElementToBeClickableExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the website
            driver.get("https://the-internet.herokuapp.com/dynamic_controls");

            // Click the "Enable" button which will enable a disabled input
            WebElement enableButton = driver.findElement(
                    By.xpath("//button[text()='Enable']"));

            // Click the "Enable" button
            enableButton.click();

            // Find the input element first
            WebElement textInput = driver.findElement(
                By.cssSelector("input[type='text']"));

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the input field to become clickable
            WebElement clickableInput = wait.until(
                    ExpectedConditions.elementToBeClickable(textInput)
            );
            //highlight-end

            // Interact with the input field
            textInput.sendKeys("Now I can type here!");

            System.out.println("Successfully entered text in the input field.");

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

### Waiting for an Element to be Clickable by Locator

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ElementToBeClickableExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the website
            driver.get("https://the-internet.herokuapp.com/dynamic_controls");

            // Click the "Enable" button which will enable a disabled input
            WebElement enableButton = driver.findElement(
                By.xpath("//button[text()='Enable']"));

            // Click the "Enable" button
            enableButton.click();

            //highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the input field to become clickable
            WebElement inputField = wait.until(
                    ExpectedConditions.elementToBeClickable(
                        By.cssSelector("input[type='text']"))
            );
            //highlight-end

            // Interact with the input field
            inputField.sendKeys("Now I can type here!");

            System.out.println("Successfully entered text in the input field.");

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
The difference between `elementToBeClickable(By locator)` and `elementToBeClickable(WebElement element)` lies in how the element is identified for waiting. Both methods ensure that the element is **visible and enabled** before considering it clickable, but they differ in when and how Selenium looks for the element.

---

**elementToBeClickable(By locator)**

- This method takes a locator (e.g., `By.id("submit-button")`) as a parameter. Selenium searches for the element using this locator each time it checks if the condition is met. It is particularly useful when the element might be recreated in the `DOM`, such as after a page refresh or an AJAX update. Once the element becomes clickable, it returns the corresponding `WebElement`.

**This approach is more resilient to DOM changes but might be slightly slower.**

---

**elementToBeClickable(WebElement element)**

- This method takes a `WebElement` that has already been located as a parameter. It uses the existing reference to the element, making it more efficient if the element remains stable in the `DOM`. However, if the DOM structure changes, it may lead to a `StaleElementReferenceException`, as the reference to the original element may no longer be valid. Once the element becomes clickable, the same `WebElement` is returned.

**This version is generally faster but requires the element to remain stable in the DOM.**
:::

---

### Waiting for an Element to Be Selected

```java title="Highlight Lines"
import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ElementToBeSelectedExample {
    public static void main(String[] args) {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {

            // Navigate to the website
            driver.get("https://the-internet.herokuapp.com/checkboxes");

            // Find the checkbox elements (the second one is checked by default)
            WebElement checkbox1 = driver.findElement(
                By.cssSelector("input[type='checkbox']:nth-of-type(1)"));

            // Click the first checkbox to select it
            checkbox1.click();

            // highlight-start
            // Define explicit wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Wait for the checkbox to be selected
            boolean isSelected = wait.until(
                ExpectedConditions.elementToBeSelected(checkbox1));
            //highlight-end

            System.out.println("First checkbox is selected: " + isSelected);

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            // Close the browser
            driver.quit();
        }

    }
}
```
