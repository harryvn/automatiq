---
id: property-methods
title: Property Methods
pagination_label: Property Methods Examples
slug: /property-methods
sidebar_position: 4
---

## Getting the Text of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getTextExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement element = driver.findElement(By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Get the text
        String text = element.getText();
        //highlight-end

        // Print the text
        System.out.println("Text is: " + text);

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Getting the Attribute of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getDOMAttributeExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find an element
        WebElement element = driver.findElement(By.cssSelector("input"));

        // Get the DOM attribute
        String idAttribute = element.getDomAttribute("id");
        //highlight-end

        // Print the attribute
        System.out.println("Element ID: " + idAttribute);

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

## Getting the Property of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getDOMPropertyExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find username input
        WebElement usernameField = driver.findElement(By.id("username"));

        // Set a value
        usernameField.sendKeys("tomsmith");

        // Get the DOM property of the value
        String usernameValue = usernameField.getDomProperty("value");
        //highlight-end

        // Print the property
        System.out.println("Username Value: " + usernameValue);

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Getting the CSS Value of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getCssValueExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement element = driver.findElement(By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Get the CSS value
        String cssValue = element.getCssValue("color");
        //highlight-end

        // Print the CSS value
        System.out.println("CSS value is: " + cssValue);

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Getting the Tag Name of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getTagNameExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement element = driver.findElement(By.id("username"));

        // Get the tag name
        String tagName = element.getTagName();
        //highlight-end

        // Print the tag name
        System.out.println("Tag name is: " + tagName);

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Getting the Size/Dimension of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getSizeExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement element = driver.findElement(By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Get the size of the element
        Dimension size = element.getSize();
        //highlight-end

        // Get width and height
        int width = size.getWidth();
        int height = size.getHeight();

        // Print out size details
        System.out.println("Element Size Details:");
        System.out.println("Width: " + width + " pixels");
        System.out.println("Height: " + height + " pixels");

        // Example of using the size information
        System.out.println("Total area: " + (width * height) + " square pixels");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Getting the Location of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.Rectangle;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getLocationExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");

        //highlight-start
        // Find the "Sign In" button
        WebElement element = driver.findElement(By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Get the location of the element
        Point location = element.getLocation();
        //highlight-end

        int xCoordinate = location.getX();
        int yCoordinate = location.getY();

        // Print out location details
        System.out.println("Element Location Details:");
        System.out.println("X-coordinate: " + xCoordinate + " pixels");
        System.out.println("Y-coordinate: " + yCoordinate + " pixels");

        // Example of using the location information
        System.out.println("Element is located at: (
            " + xCoordinate + ", " + yCoordinate + ")");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```

---

## Getting the Rectangle of an Element

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class getRectExample {
    public static void main( String[] args ) throws InterruptedException {

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        // Open a webpage
        driver.get("https://the-internet.herokuapp.com/login");


        //highlight-start
        // Find the "Sign In" button
        WebElement element = driver.findElement(By.cssSelector(".fa.fa-2x.fa-sign-in"));

        // Get the rectangle of the element
        Rectangle rect = element.getRect();
        //highlight-end

        int x = rect.getX();
        int y = rect.getY();
        int width = rect.getWidth();
        int height = rect.getHeight();

        // Print out rectangle details
        System.out.println("Element Rectangle Details:");
        System.out.println("X-coordinate: " + x);
        System.out.println("Y-coordinate: " + y);
        System.out.println("Width: " + width);
        System.out.println("Height: " + height);

        // Example of using the rectangle information
        System.out.println("Top-left corner: (" + x + ", " + y + ")");
        System.out.println("Bottom-right corner: (
            " + (x + width) + ", " + (y + height) + ")");

        // Wait for 2 seconds
        Thread.sleep(2000);

        // Close the browser
        driver.quit();

    }
}
```
