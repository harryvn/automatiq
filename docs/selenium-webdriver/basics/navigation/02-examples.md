---
id: navigation-examples
title: Examples
pagination_label: Navigation Examples
slug: /navigation-examples
sidebar_position: 2
---

# Navigation Examples

Below are examples of how to navigate to different URLs using Selenium WebDriver.

## Opening a URL

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class OpenURLExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        //highlight-start
        driver.get("https://the-internet.herokuapp.com");
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Retrieving the Current URL

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetCurrentURLExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Get the current URL
        //highlight-start
        String currentURL = driver.getCurrentUrl();
        //highlight-end

        // Print the current URL
        System.out.println("Current URL is: " + currentURL);

        // Close the browser
        driver.quit();

    }
}
```

---

## Retrieving the Page Title

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetPageTitleExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Get the page title
        //highlight-start
        String pageTitle = driver.getTitle();
        //highlight-end

        // Print the page title
        System.out.println("Page title is: " + pageTitle);

        // Close the browser
        driver.quit();

    }
}
```

---

## Retrieving the Page Source

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetPageSourceExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Get the page source
        //highlight-start
        String pageSource = driver.getPageSource();
        //highlight-end

        // Print the page source
        System.out.println("Page source is: " + pageSource);

        // Close the browser
        driver.quit();

    }
}
```

---

## Navigating Back

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NavigateBackExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Navigate to the specified URL
        driver.navigate().to("https://the-internet.herokuapp.com/login");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Navigate back to the previous page
        //highlight-start
        driver.navigate().back();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Navigating Forward

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NavigateForwardExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Navigate to the specified URL
        driver.navigate().to("https://the-internet.herokuapp.com/login");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Navigate back to the previous page
        driver.navigate().back();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Navigate forward to the next page
        //highlight-start
        driver.navigate().forward();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Refresh the Current Page

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RefreshPageExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.navigate().to("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Refresh the current page
        //highlight-start
        driver.navigate().refresh();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Navigating to a URL

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NavigateToURLExample {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the specified URL
        driver.get("https://the-internet.herokuapp.com");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Navigate to the specified URL
        //highlight-start
        driver.navigate().to("https://the-internet.herokuapp.com/login");
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

:::info
The `driver.get` method is a simple way to open a URL, while `driver.navigate().to()` is more versatile and can be used for more complex navigation scenarios. For example, `driver.navigate().to()` can be used in conjunction with other navigation methods like `back`, `forward`, and `refresh`.
:::
