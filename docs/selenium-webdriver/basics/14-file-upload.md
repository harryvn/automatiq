---
id: basics-010
title: File Upload
slug: /basics-010
sidebar_position: 14
---

# File Upload

In this section, we will explore how to handle file uploads using Selenium WebDriver.

## Handling File Uploads

To handle file uploads, you can use the `sendKeys` method to provide the file path or use the `upload` method to upload a file from the local system.

### Using `sendKeys` Method

The `sendKeys` method is used to send the file path to the file input element. This method is straightforward and works well for most cases.

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FileUploadUsingSendKeysExample {
    public static void main(String[] args) {

        // Initialize the ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Navigate to the file upload page
        driver.get("https://example.com/file-upload");

        // Locate the file upload element
        WebElement uploadElement = driver.findElement(By.id("upload"));

        // Provide the file path to the file upload element
        uploadElement.sendKeys("/path/to/your/file.txt");

        // Submit the form
        WebElement submitButton = driver.findElement(By.id("submit"));
        submitButton.click();

        // Close the browser
        driver.quit();
    }
}
```

---

### Using `Robot Class`

In some cases, you might need to use the Robot class to handle file uploads, especially when dealing with native OS file dialogs.

```java
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

public class FileUploadWithRobot {
    public static void main(String[] args) throws AWTException {

        // Initialize the ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Navigate to the file upload page
        driver.get("https://example.com/file-upload");

        // Locate the file upload element and click it to open the file dialog
        WebElement uploadElement = driver.findElement(By.id("upload"));
        uploadElement.click();

        // Use Robot class to handle the file dialog
        Robot robot = new Robot();
        robot.delay(2000);

        // Enter the file path
        StringSelection filePath = new StringSelection("/path/to/your/file.txt");
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filePath, null);

        // Press CTRL+V to paste the file path
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_V);
        robot.keyRelease(KeyEvent.VK_V);
        robot.keyRelease(KeyEvent.VK_CONTROL);

        // Press ENTER to close the file dialog
        robot.keyPress(KeyEvent.VK_ENTER);
        robot.keyRelease(KeyEvent.VK_ENTER);

        // Submit the form
        WebElement submitButton = driver.findElement(By.id("submit"));
        submitButton.click();

        // Close the browser
        driver.quit();
    }
}
```

---

## Handling Remote File Uploads

When working with remote WebDriver instances, such as those provided by Selenium Grid or cloud-based services like BrowserStack or Sauce Labs, handling file uploads requires a slightly different approach. These services often provide specific methods to handle file uploads.

### Using `RemoteWebDriver`

Here is an example of how to handle file uploads using `RemoteWebDriver` with Selenium Grid:

````java
```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class RemoteFileUploadExample {
    public static void main(String[] args) throws MalformedURLException {
        // Set the URL of the Selenium Grid hub
        URL gridUrl = new URL("http://localhost:4444/wd/hub");

        // Use ChromeOptions to configure the browser
        ChromeOptions options = new ChromeOptions();

        // Initialize the RemoteWebDriver
        WebDriver driver = new RemoteWebDriver(gridUrl, options);

        // Navigate to the file upload page
        driver.get("https://example.com/file-upload");

        // Locate the file upload element
        WebElement uploadElement = driver.findElement(By.id("upload"));

        // Provide the file path to the file upload element
        uploadElement.sendKeys("/path/to/your/file.txt");

        // Submit the form
        WebElement submitButton = driver.findElement(By.id("submit"));
        submitButton.click();

        // Close the browser
        driver.quit();
    }
}
````

:::tip
The above code is a simpler version, but you can enhance it by using WebDriverWait and ExpectedConditions to manage file upload more reliably and validate the file's existence before proceeding.
:::
