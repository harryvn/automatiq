---
id: javascriptexecutor-examples
title: Examples
pagination_label: JavaScriptExecutor Examples
slug: /javascriptexecutor-examples
sidebar_position: 2
---

# JavaScriptExecutor Examples

This section provides examples of how to use the JavaScriptExecutor interface in Selenium WebDriver.

## Filling Out a Form

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class FillOutFormExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://the-internet.herokuapp.com/login");

            // highlight-start
            // Locate username and password fields
            WebElement username = driver.findElement(By.id("username"));
            WebElement password = driver.findElement(By.id("password"));

            // Locate the button element
            WebElement button = driver.findElement(By.className("radius"));

            // Cast to JavascriptExecutor
            JavascriptExecutor js = (JavascriptExecutor) driver;

            // Set values using JS
            js.executeScript("arguments[0].value='tomsmith';", username);
            js.executeScript("arguments[0].value='SuperSecretPassword!';", password);

            // Click the button using JS
            js.executeScript("arguments[0].click();", button);
            // highlight-end

            Thread.sleep(2000);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

---

## Highlighting Elements

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;


public class JsHighlightExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://the-internet.herokuapp.com/login");

            JavascriptExecutor js = (JavascriptExecutor) driver;

            //highlight-start
            // Locate elements
            WebElement username = driver.findElement(By.id("username"));
            WebElement password = driver.findElement(By.id("password"));
            WebElement loginBtn = driver.findElement(By.className("radius"));

            // Highlight username
            highlightElement(js, username);
            js.executeScript("arguments[0].value='tomsmith';", username);

            // Highlight password
            highlightElement(js, password);
            js.executeScript("arguments[0].value='SuperSecretPassword!';", password);

            // Highlight login button
            highlightElement(js, loginBtn);
            js.executeScript("arguments[0].click();", loginBtn);
            //highlight-end

            Thread.sleep(3000); // pause to see the result
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

    // Utility method to highlight element
    private static void highlightElement(JavascriptExecutor js, WebElement element) throws InterruptedException {
        // Add red border
        js.executeScript("arguments[0].style.border='3px solid red'", element);

        // Flash effect
        for (int i = 0; i < 2; i++) {
            js.executeScript("arguments[0].style.backgroundColor='yellow'", element);
            Thread.sleep(300);
            js.executeScript("arguments[0].style.backgroundColor=''", element);
            Thread.sleep(300);
        }
    }
}
```

:::note
In the above example, we highlight the username, password, and login button elements using `JavaScriptExecutor` and then perform actions on them.
:::

:::tip
Use `highlightElement` whenever you want to visually confirm which element Selenium is interacting with.

It’s very helpful for:

- Debugging locator issues.
- Demoing test automation (stakeholders see exactly where Selenium clicks/enters data).
  :::

---

## Async Operation

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import java.time.Duration;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class AsyncOperationExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

            driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

            Thread.sleep(2000);

            // highlight-start
            // Click the "Start" button to trigger AJAX loading
            driver.findElement(By.cssSelector("#start button")).click();

            Thread.sleep(2000);

            // Use executeAsyncScript to wait until AJAX completes
            String result = (String) ((JavascriptExecutor) driver).executeAsyncScript(
                    "var callback = arguments[arguments.length - 1];" +
                            "var check = function() {" +
                            "  var elem = document.querySelector('#finish');" +
                            "  if (elem && elem.style.display !== 'none' && elem.innerText.trim() !== '') {" +
                            "    callback(elem.innerText);" + // return the loaded text
                            "  } else {" +
                            "    setTimeout(check, 200);" + // keep polling every 200ms
                            "  }" +
                            "};" +
                            "check();");

            Thread.sleep(2000);

            System.out.println("✅ Loaded text: " + result);
            // highlight-end

            Thread.sleep(2000);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

:::tip
`executeAsyncScript` is ideal when Selenium’s `WebDriverWait` doesn’t directly capture AJAX or JS-driven UI changes, because you can implement custom waiting logic in JavaScript itself.
:::

---

## Scrolling to an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class ScrollToElementExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://the-internet.herokuapp.com/large");
            JavascriptExecutor js = (JavascriptExecutor) driver;

            // highlight-start
            // Scroll to the top of the page
            js.executeScript("window.scrollTo(0, 0);");
            Thread.sleep(2000);
            // 🔽 Scroll down by pixels
            js.executeScript("window.scrollBy(0, 500);");
            Thread.sleep(2000);

            // 🎯 Scroll to a specific element
            WebElement targetElement = driver.findElement(By.id("sibling-50.1"));
            js.executeScript("arguments[0].scrollIntoView(true);", targetElement);
            highlightElement(driver, targetElement); // ✨ Highlight scrolled element
            Thread.sleep(2000);

            // ⬇️ Scroll to the bottom of the page
            js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
            // highlight-end

            Thread.sleep(2000);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

    // 🔦 Highlight helper
    public static void highlightElement(WebDriver driver, WebElement element) throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].style.border='3px solid red'", element);
        Thread.sleep(1500);
        js.executeScript("arguments[0].style.border=''", element);
    }
}
```

---

## Manipulating Hidden Elements to be Visible

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class ManipulateHiddenElementExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to page with hidden element
            driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");

            JavascriptExecutor js = (JavascriptExecutor) driver;

            // highlight-start
            // Locate the "Start" button which is visible
            WebElement startButton = driver.findElement(By.cssSelector("#start button"));

            // Click using JavaScript (instead of regular click)
            js.executeScript("arguments[0].click();", startButton);

            // Locate hidden element (Hello World!)
            WebElement hiddenElement = driver.findElement(By.id("finish"));

            // Make hidden element visible (removes display:none)
            js.executeScript("arguments[0].style.display='block';", hiddenElement);

            // Highlight the now visible element
            js.executeScript("arguments[0].style.border='3px solid red'", hiddenElement);

            // Print text
            System.out.println("Hidden element text: " + hiddenElement.getText());
            // highlight-end

            Thread.sleep(2000); // Just to observe
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

:::tip
Using `JavaScriptExecutor` to work with hidden elements should be a **last resort**.
Whenever possible, use **explicit waits** (`WebDriverWait`) to wait until the element becomes visible.

Directly interacting with hidden elements can bypass the intended flow of the application.
:::
