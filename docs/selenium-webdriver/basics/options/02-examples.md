---
id: options-examples
title: Examples
pagination_label: Options Examples
slug: /options-examples
sidebar_position: 2
---

## Timeouts

### Implicitly Wait, Page Load Timeout, and Script Timeout

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class TimeoutsExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to test site
            driver.get("https://the-internet.herokuapp.com/");

            // highlight-start
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
            driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
            driver.manage().timeouts().scriptTimeout(Duration.ofSeconds(5));
            // highlight-end

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

👉 Quick Analogy:

- `implicitlyWait` → “How long should I wait to find things?”
- `pageLoadTimeout` → “How long should I wait for a page to finish loading?”
- `scriptTimeout` → “How long should I wait for async JS to respond?”

:::info
To understand more about `implicitlyWait`, please refer to the [Waits](/docs/wait-types) page.
:::

---

## Window

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import java.time.Duration;

public class WindowExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to test site
            driver.get("https://the-internet.herokuapp.com/");

            // highlight-start
            // Maximize the browser window
            driver.manage().window().maximize();

            Thread.sleep(2000);

            // Minimize the browser window
            driver.manage().window().minimize();

            Thread.sleep(2000);

            // Open the browser in fullscreen mode
            driver.manage().window().fullscreen();

            Thread.sleep(2000);

            // Get the size and position of the browser window
            driver.manage().window().setSize(new Dimension(1024, 768));

            Thread.sleep(2000);

            // Set the size and position of the browser window
            driver.manage().window().setPosition(new Point(50, 50));

            Thread.sleep(2000);

            // Get the size and position of the browser window
            System.out.println("Window size: " + driver.manage().window().getSize());

            Thread.sleep(2000);

            // Get the size and position of the browser window
            System.out.println("Window position: " + driver.manage().window().getPosition());
            // highlight-end

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

---

## Cookies

:::info
Abiding to security best practices and considerations, only `getAllCookies()` and `deleteAllCookies()` will be demonstrated. Adding, modifying, or directly retrieving sensitive cookie values, increases the risk of attacks like `XSS`, `CSRF`, `data leakage` and is generally discouraged in real-world scenarios.
:::

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Cookie;
import java.util.Set;

public class CookiesExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to test site
            driver.get("https://the-internet.herokuapp.com/");

            // highlight-start
            // Get All Cookies
            Set<Cookie> allCookies = driver.manage().getCookies();
            System.out.println("All cookies: " + allCookies);

            Thread.sleep(2000);

            // Delete All Cookies
            driver.manage().deleteAllCookies();
            System.out.println("All cookies after deletion: " +
                    driver.manage().getCookies());
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
