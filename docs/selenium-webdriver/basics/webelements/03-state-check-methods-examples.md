---
id: state-check-methods
title: State Check Methods
pagination_label: State Check Methods Examples
slug: /state-check-methods
sidebar_position: 3
---

:::note
In the following examples, if the script fails while checking the status of an element using `isDisplayed()`, `isEnabled()`, or `isSelected()`, the execution will terminate with an exception, leaving the browser open.

This happens because we have not yet implemented `exception` and `error handling` in the script. We will cover how to handle exceptions and errors at a later stage.
:::

## Checking if an Element is Displayed

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class isDisplayedExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

        //highlight-start
        // Locate the Start button
        WebElement startButton = driver.findElement(By.cssSelector("#start button"));

        // Check if the button is displayed
        if (startButton.isDisplayed()) {
            // Print a message
            System.out.println("The Start button is displayed.");
        } else {
            // Print a message
            System.out.println("The Start button is not displayed.");
        }
        //highlight-end

        // Close the browser
        driver.quit();

    }
}
```

---

## Checking if an Element is Enabled

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class isEnabledExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/dynamic_controls");

        //highlight-start
        // Locate the input field
        WebElement inputField = driver.findElement(
            By.cssSelector("#input-example input"));

        // Check if the input field is enabled
        if (inputField.isEnabled()) {
            // Print a message
            System.out.println("The input field is enabled.");
        } else {
            // Wait for 2 seconds
            Thread.sleep(2000);
            // Print a message
            System.out.println("The input field is disabled.");
        }
        //highlight-end

        // Close the browser
        driver.quit();

    }
}
```

---

## Checking if an Element is Selected

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class isSelectedExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/checkboxes");

        //highlight-start
        // Locate the checkbox element
        WebElement checkbox = driver.findElement(
            By.xpath("//input[@type='checkbox'][1]"));

        // Check if the checkbox is selected
        if (checkbox.isSelected()) {
            // Print a message
            System.out.println("Checkbox is already selected.");
        } else {
            // Wait for 2 seconds
            Thread.sleep(2000);
            // Print a message
            System.out.println("Checkbox is not selected. Selecting now...");
            // Select the checkbox
            checkbox.click();
            // Wait for 2 seconds
            Thread.sleep(2000);
        }
        //highlight-end

        // Close the browser
        driver.quit();

    }
}
```

Key differences between `isDisplayed()`, `isEnabled()`, and `isSelected()`

| Method        | Purpose                                                                        |
| ------------- | ------------------------------------------------------------------------------ |
| isDisplayed() | Checks if an element is visible on the webpage.                                |
| isEnabled()   | Checks if an element is enabled for interaction (e.g., input fields, buttons). |
| isSelected()  | Checks if a checkbox, radio button, or dropdown option is selected.            |
