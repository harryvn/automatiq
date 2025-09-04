---
id: browser-examples
title: Examples
pagination_label: Browser Examples
slug: /browser-examples
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Browser Examples

Below are examples of how to launch these browsers using Selenium WebDriver.

## Launching different browsers

<Tabs>
<TabItem value="chrome" label="Chrome">

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LaunchChrome {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        //highlight-start
        WebDriver driver = new ChromeDriver();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

</TabItem>
<TabItem value="firefox" label="Firefox">

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LaunchFirefox {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Firefox driver
        //highlight-start
        WebDriver driver = new FirefoxDriver();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

</TabItem>
<TabItem value="edge" label="Edge">

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class LaunchEdge {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Edge driver
        //highlight-start
        WebDriver driver = new EdgeDriver();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

</TabItem>
<TabItem value="safari" label="Safari">

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.safari.SafariDriver;

public class LaunchSafari {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Safari driver
        //highlight-start
        WebDriver driver = new SafariDriver();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

</TabItem>
</Tabs>

:::note
In the above examples, we are using `Thread.sleep();` to wait for 2 seconds before closing the browser.
:::

---

## Browser Management Examples

### Maximizing the Browser Window

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MaximizeBrowser {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Maximize the browser window
        //highlight-start
        driver.manage().window().maximize();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

### Minimizing the Browser Window

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MinimizeBrowser {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Minimize the browser window
        //highlight-start
        driver.manage().window().minimize();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

### Opening the Browser in Fullscreen Mode

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class OpenFullscreen {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Open the browser in fullscreen mode
        //highlight-start
        driver.manage().window().fullscreen();
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

### Resizing the Browser Window

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ResizeBrowser {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Resize the browser window
        //highlight-start
        driver.manage().window().setSize(new Dimension(800, 600));
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

### Moving the Browser Window

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MoveBrowser {
    public static void main(String[] args) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Move the browser window
        //highlight-start
        driver.manage().window().setPosition(new Point(300, 300));
        //highlight-end

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```
