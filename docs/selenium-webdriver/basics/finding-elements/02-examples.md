---
id: finding-elements-examples
title: Examples
pagination_label: Finding Elements Examples
slug: /finding-elements-examples
sidebar_position: 2
---

# Finding Element Examples

Below are examples of how to use the `findElement` and `findElements` methods in Selenium WebDriver.

## Finding a Single Element

The following code prints the text of a specific element on the webpage.

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FindElementExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Finding a single element
        //highlight-start
        WebElement singleElement = driver.findElement(By.cssSelector(".heading"));
        //highlight-end

        System.out.println("Header text: " + singleElement.getText());

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Finding Multiple Elements

The following code prints the text of all elements on the webpage.

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class FindElementsExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Find all input elements on the page
        //highlight-start
        List<WebElement> allLinks = driver.findElements(By.tagName("a"));
        //highlight-end

        // Print the total number of elements
        System.out.println("Total number of links found: " + allLinks.size());

        // Print the text of each element
        //highlight-start
        for (WebElement element : allLinks) {
            System.out.println("Link " + (
                allLinks.indexOf(element) + 1 ) + ": " + element.getText());
        }
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```
