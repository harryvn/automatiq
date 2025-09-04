---
id: frames-windows-examples
title: Examples
pagination_label: Frames & Windows Examples
slug: /frames-windows-examples
sidebar_position: 2
---

# Frames & Windows Examples

The following examples demonstrate how to use Selenium WebDriver to switch between frames and browser windows/tabs.

:::note
In these examples, we will use `WebDriverWait` to ensure elements are present before interacting, and `switchTo()` to change the context between frames and windows.
:::

---

## Switching to a Frame by Index

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class FrameByIndexExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        try {
            // Navigate to the nested frames page
            driver.get("https://the-internet.herokuapp.com/nested_frames");

            // highlight-start
            // Switch to the top frame (index 0)
            driver.switchTo().frame(0);

            // Switch to the middle frame within the top frame
            driver.switchTo().frame("frame-middle");

            // Wait for the content and print it
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            WebElement content = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.id("content"))
            );
            System.out.println("Frame content: " + content.getText());

            // Switch back to the default content
            driver.switchTo().defaultContent();
            // highlight-end

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            driver.quit();
        }
    }
}
```

## Switching to a Frame by Name or ID

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class FrameByNameOrIdExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        try {
            // Navigate to the iframe page
            driver.get("https://the-internet.herokuapp.com/iframe");

            // highlight-start
            // Switch to the iframe using its ID
            driver.switchTo().frame("mce_0_ifr");

            // Wait for the text editor and update its content
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            WebElement editor = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.id("tinymce"))
            );
            editor.clear();
            editor.sendKeys("Editing via Frame by Name/ID!");
            // highlight-end

            // Switch back to default content
            driver.switchTo().defaultContent();

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            driver.quit();
        }
    }
}
```

## Switching to a Frame by WebElement

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class FrameByWebElementExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        try {
            // Navigate to the frames page
            driver.get("https://the-internet.herokuapp.com/iframe");

            // highlight-start
            // Locate the iframe WebElement
            WebElement iframeElement = driver.findElement(By.id("mce_0_ifr"));

            // Switch to the iframe
            driver.switchTo().frame(iframeElement);

            // Interact with the text editor inside the frame
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            WebElement editor = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.id("tinymce"))
            );
            editor.clear();
            editor.sendKeys("Hello from Selenium!");
            // highlight-end

            // Switch back to default content
            driver.switchTo().defaultContent();

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            driver.quit();
        }
    }
}
```

## Switching Between Windows

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.Set;

public class WindowSwitchExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        try {
            // Navigate to the multiple windows page
            driver.get("https://the-internet.herokuapp.com/windows");

            // highlight-start
            // Store the original window handle
            String originalWindow = driver.getWindowHandle();

            // Click the link to open a new window
            WebElement clickHere = driver.findElement(By.linkText("Click Here"));
            clickHere.click();

            // Wait for the new window
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            wait.until(ExpectedConditions.numberOfWindowsToBe(2));

            // Switch to the new window
            Set<String> windowHandles = driver.getWindowHandles();
            for (String handle : windowHandles) {
                if (!handle.equals(originalWindow)) {
                    driver.switchTo().window(handle);
                    break;
                }
            }

            // Print the header text in the new window
            WebElement header = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.tagName("h3"))
            );
            System.out.println("New window header: " + header.getText());

            // Switch back to the original window
            driver.switchTo().window(originalWindow);
            // highlight-end

        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
        } finally {
            driver.quit();
        }
    }
}
```

:::tip
When switching windows, always:

- Store the original window handle.
- Wait for the number of windows to increase.
- Switch back to the original window when done.
