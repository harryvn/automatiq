---
id: other-methods
title: Other Methods
pagination_label: Other Methods Examples
slug: /other-methods
sidebar_position: 5
---

## Taking a Screenshot of an Element

```java
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class takeScreenshotExample {
    public static void main( String[] args ) throws InterruptedException, IOException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Cast WebDriver to TakesScreenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        // Define destination file
        File destinationFile = new File("screenshot.png");

        // Copy the screenshot to the destination
        Files.copy(screenshot.toPath(), destinationFile.toPath());
        //highlight-end

        // Print the location of the screenshot
        System.out.println("Screenshot saved: " + destinationFile.getAbsolutePath());

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

:::tip
In the above example, if the `screenshot.png` file already exists, you will get an exception. You can handle this by checking if the file exists before copying the screenshot or by overwriting the existing file.
:::

---

## Getting Aria Role of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getAriaRoleExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement loginButton = driver.findElement(
            By.cssSelector("button[type='submit']"));

        // Get the ARIA role of the element
        String ariaRole = loginButton.getAriaRole();
        //highlight-end

        // Print the ARIA role of the element
        System.out.println("ARIA Role of Login Button: " + ariaRole);

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

## Getting Shadow Root of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getShadowRootExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Navigate to the page
        driver.get("https://the-internet.herokuapp.com/shadowdom");

        //highlight-start
        // Locate the shadow host element
        WebElement shadowHost = driver.findElement(By.xpath("//my-paragraph[2]"));

        // Locate the shadow root element
        WebElement shadowRoot = shadowHost.findElement(
            By.cssSelector("li:nth-child(1)"));
        //highlight-end

        // Print text of the shadow root element
        System.out.println("Element Text is: " + shadowRoot.getText());

        // Close the browser
        driver.quit();

    }
}
```
