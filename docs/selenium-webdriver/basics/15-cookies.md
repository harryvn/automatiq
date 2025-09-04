---
id: basics-012
title: Cookies
slug: /basics-012
sidebar_position: 15
---

# Cookies

Handling cookies is an essential part of web automation. Selenium WebDriver provides methods to interact with cookies, allowing you to add, delete, and retrieve cookies. Below are examples of how to handle cookies using Selenium WebDriver.

### Adding a Cookie

You can add a cookie to the current session using the `addCookie` method.

```java
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CookieExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");

        // Create a new cookie
        Cookie cookie = new Cookie("key", "value");

        // Add the cookie to the browser
        driver.manage().addCookie(cookie);

        driver.quit();
    }
}
```

---

### Retrieving a Cookie

You can retrieve a cookie from the current session using the `getCookieNamed` method.

```java
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetCookieExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");

        // Retrieve the cookie from the browser
        Cookie cookie = driver.manage().getCookieNamed("key");

        // Print the cookie value
        System.out.println("Cookie value: " + cookie.getValue());

        driver.quit();
    }
}
```

### Retrieving All Cookies

You can retrieve all cookies from the current session using the `getCookies` method.

```java
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetAllCookiesExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");

        // Retrieve all cookies from the browser
        List<Cookie> cookies = driver.manage().getCookies();

        // Print the cookies
        for (Cookie cookie : cookies) {
            System.out.println("Cookie: " + cookie.getName() + " - " + cookie.getValue());
        }

        driver.quit();
    }
}
```

---

### Deleting a Cookie

You can delete a cookie from the current session using the `deleteCookieNamed` method.

```java
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DeleteCookieExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");

        // Delete the cookie from the browser
        driver.manage().deleteCookieNamed("key");

        driver.quit();
    }
}
```

---

### Deleting All Cookies

You can delete all cookies from the current session using the `deleteAllCookies` method.

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DeleteAllCookiesExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");

        // Delete all cookies from the browser
        driver.manage().deleteAllCookies();

        driver.quit();
    }
}
```
