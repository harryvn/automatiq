---
id: takesscreenshot-examples
title: Examples
pagination_label: TakesScreenshot Examples
slug: /takesscreenshot-examples
sidebar_position: 2
---

## Screenshot as File

```java
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File;
import java.io.IOException;

public class TakesScreenshotAsFileExample {
    public static void main(String[] args) throws IOException {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://the-internet.herokuapp.com/login");

            // Enter username and password
            WebElement username = driver.findElement(By.id("username"));
            WebElement password = driver.findElement(By.id("password"));
            username.sendKeys("tomsmith");
            password.sendKeys("SuperSecretPassword!");

            // Click the login button
            WebElement button = driver.findElement(By.className("radius"));
            button.click();

            // Wait for login result
            Thread.sleep(2000);

            // highlight-start
            // Take screenshot after login
            File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(screenshot, new File("login_screenshot.png"));
            // highlight-end

            System.out.println("Screenshot saved as login_screenshot.png");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

---

## Screenshot as Base64

```java
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.IOException;

public class TakesScreenshotAsBase64Example {
    public static void main(String[] args) throws IOException {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://the-internet.herokuapp.com/login");

            // Enter username and password
            WebElement username = driver.findElement(By.id("username"));
            WebElement password = driver.findElement(By.id("password"));
            username.sendKeys("tomsmith");
            password.sendKeys("SuperSecretPassword!");

            // Click the login button
            WebElement button = driver.findElement(By.className("radius"));
            button.click();

            // Wait for login result
            Thread.sleep(2000);

            // highlight-start
            // Capture screenshot as Base64 string
            String base64Screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BASE64);
            // highlight-end

            // Print Base64 string (can be embedded in reports/logs)
            System.out.println("Base64 Screenshot: " + base64Screenshot);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

:::note
A similar output will be logged to the console.

**_Base64 Screenshot: iVBORw0KGgoAAAANSUhEUgAACWAAAAVCCAIAAAAO61VwAAABLGlDQ1BfAAB4nJWQPUsDQRCGH0NA1DSiooXFlWnUJGI+UAsTNWiZKES7y+UIYhKPy4n2af0R1naCjQipbawEKxEbe0Gwje/dFReQFJlhdp59d9jdGYgtIYunoN3x3Eq5aNROTo3JTybkgZlW12G0qer3Lax9XWF8m2rYXUv5W+G5elxXNsTzzZCvfa6HfOPzled44luf3aNKSfwgTjaHuD7EluP69e/irXbr0or+TcLuHFeVa4plylzIm7SwWaPKOWeYohR7FMizrrwj31CkyUgpkNUuRYkiOa059qXkdZZmN2BV+PMMn+x9wHZ/MBg8RdphH+6zMP0YaclNmE3A80ukRTN2TNcMpLgiZhfhZ0Gt3MHcF8z0pC76xyN6Nf71anBAB4tVUUbdpMn+AQyUTdocuQPoAAAQAElEQVR4nOzdB5wk91kn/MrVuXt6ctidnd3ZnIMkS5YcZBsnbBOMDQZ8hw+4IxwcybxgDALOZ9LBccQDDgNHMrYxtsHgICRbVrBX2px3difn6VxdObxPVfX09KTV7mpG2tn9fTXqra6u8K/qmZE+/dvn/wie5zEAAAAAAAAAAAAAAAB3tnqi4QXqC8R13fryeH70hWvPnR87dXX2suka7U3doiBVtFKhkpvLT6ua..._**
:::

---

## Screenshot as Bytes

```java
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.IOException;

public class TakesScreenshotAsBytesExample {
    public static void main(String[] args) throws IOException {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://the-internet.herokuapp.com/login");

            // Enter username and password
            WebElement username = driver.findElement(By.id("username"));
            WebElement password = driver.findElement(By.id("password"));
            username.sendKeys("tomsmith");
            password.sendKeys("SuperSecretPassword!");

            // Click the login button
            WebElement button = driver.findElement(By.className("radius"));
            button.click();

            // Wait for login result
            Thread.sleep(2000);

            // highlight-start
            // Capture screenshot as byte array
            byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);

            // Save byte array to a PNG file
            try (FileOutputStream fos = new FileOutputStream("login_screenshot_bytes.png")) {
                fos.write(screenshotBytes);
            }
            // highlight-end

            System.out.println("Screenshot saved as login_screenshot_bytes.png");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

---

## Best Practices

- **Most Commonly Used** → `OutputType.FILE`

  - Widely used for saving screenshots as files during test failures and debugging.
  - Works well with reporting tools that support file attachments.

- **Also Popular** → `OutputType.BASE64`

  - Preferred in modern reporting (e.g., Allure, ExtentReports) where screenshots are embedded directly into HTML/PDF reports.
  - Eliminates file path management issues in distributed test environments.

- **Least Used (and should generally be avoided)** → `OutputType.BYTES`
  - Rarely needed unless you have a specific requirement to process raw image bytes.
  - Typically replaced by `FILE` (for saving) or `BASE64` (for embedding).
