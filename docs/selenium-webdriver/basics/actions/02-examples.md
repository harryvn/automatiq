---
id: actions-examples
title: Examples
pagination_label: Actions Examples
slug: /actions-examples
sidebar_position: 2
---

# Actions Class Examples

Below are examples of performing different user interactions using the `Actions` class in Selenium WebDriver.

---

## Click Example

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ClickExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to the click page
            driver.get("https://the-internet.herokuapp.com/login");

            //highlight-start
            // Locate the button element
            WebElement button = driver.findElement(By.className("radius"));

            // Create an Actions object
            Actions actions = new Actions(driver);

            // Click the button
            actions.click(button).perform();
            //highlight-end

            // Optional: wait a bit to see the result
            Thread.sleep(2000);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Quit the browser
            driver.quit();
        }
    }
}
```

---

## Context Click Example

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ContextClickExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to the context click page
            driver.get("https://the-internet.herokuapp.com/context_menu");

            // highlight-start
            // Locate the button element
            WebElement button = driver.findElement(By.id("hot-spot"));

            // Create an Actions object
            Actions actions = new Actions(driver);

            // Context-click the button
            actions.contextClick(button).perform();

            // Optional: wait a bit to see the result
            Thread.sleep(2000);

            // Click on the alert
            driver.switchTo().alert().accept();
            // highlight-end

            // Optional: wait a bit to see the result
            Thread.sleep(2000);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Quit the browser
            driver.quit();
        }
    }
}
```

---

## Move to Element Example

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class MoveToElementExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Open the Hovers page
            driver.get("https://the-internet.herokuapp.com/hovers");

            // highlight-start
            // Locate the first avatar image
            WebElement avatar1 = driver.findElement(By.xpath("(//div[@class='figure'])[1]"));

            // Create Actions instance
            Actions actions = new Actions(driver);

            // Pause to see effect
            Thread.sleep(2000);

            // Move (hover) to the avatar
            actions.moveToElement(avatar1).perform();

            // Wait a bit to observe the hover effect
            Thread.sleep(2000);
            // highlight-end

            // Now locate the caption text that appears
            WebElement caption = driver.findElement(By.xpath("(//div[@class='figcaption'])[1]/h5"));
            System.out.println("Caption displayed: " + caption.getText());

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

---

## Move to Element with Offset Example

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class MoveToElementWithOffsetExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Open the Hovers page
            driver.get("https://the-internet.herokuapp.com/hovers");

            // highlight-start
            // Locate the first avatar image
            WebElement avatar1 = driver.findElement(By.xpath("(//div[@class='figure'])[1]"));

            // Create Actions instance
            Actions actions = new Actions(driver);

            // Pause to see effect
            Thread.sleep(2000);

            // Move mouse to avatar but with offset (20px right, 30px down)
            actions.moveToElement(avatar1, 20, 30).perform();

            // Pause to see effect
            Thread.sleep(2000);
            // highlight-end

            // Now get the caption text that appears
            WebElement caption = driver.findElement(By.xpath("(//div[@class='figcaption'])[1]/h5"));
            System.out.println("Caption displayed: " + caption.getText());

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```

---

## Drag and Drop (Simple)

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDropExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to the drag and drop page
            driver.get("https://the-internet.herokuapp.com/drag_and_drop");

            // highlight-start
            // Locate the source and target elements
            WebElement columnA = driver.findElement(By.id("column-a"));
            WebElement columnB = driver.findElement(By.id("column-b"));

            // Perform drag and drop
            Actions actions = new Actions(driver);

            // Optional: wait a bit to see the result
            Thread.sleep(2000);

            actions.dragAndDrop(columnA, columnB).perform();

            // Optional: wait a bit to see the result
            Thread.sleep(2000);
            // highlight-end

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Quit the browser
            driver.quit();
        }
    }
}
```

---

## Drag and Drop (Complex) using actions (click + hold + release)

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDropComplexExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to the Drag and Drop page
            driver.get("https://the-internet.herokuapp.com/drag_and_drop");

            // highlight-start
            // Locate source and target elements
            WebElement columnA = driver.findElement(By.id("column-a"));
            WebElement columnB = driver.findElement(By.id("column-b"));

            // Create Actions instance
            Actions actions = new Actions(driver);

            // Pause to observe
            Thread.sleep(2000);

            // Click and hold column A, move to column B, then release
            actions.clickAndHold(columnA)
                    .moveToElement(columnB)
                    .release()
                    .perform();

            // Pause to observe
            Thread.sleep(2000);
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

## Drag and Drop Move By Offset

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDropMoveByOffsetExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to Drag and Drop page
            driver.get("https://the-internet.herokuapp.com/drag_and_drop");

            // highlight-start
            // Locate source element (Column A)
            WebElement columnA = driver.findElement(By.id("column-a"));

            // Create Actions instance
            Actions actions = new Actions(driver);

            // Pause to observe result
            Thread.sleep(2000);

            // Click and hold column A, move it 200px right, then release
            actions.clickAndHold(columnA)
                    .moveByOffset(200, 0)
                    .release()
                    .perform();

            // Pause to observe result
            Thread.sleep(2000);
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

## Key Presses (Down and Up)

```java
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class KeyPressesExample {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to Key Presses page
            driver.get("https://the-internet.herokuapp.com/key_presses");

            // highlight-start
            // Find the input field
            WebElement inputField = driver.findElement(By.id("target"));

            // Create Actions instance
            Actions actions = new Actions(driver);

            // Pause to observe result
            Thread.sleep(2000);

            // Hold down SHIFT, type "selenium", then release SHIFT
            actions.click(inputField)
                    .keyDown(Keys.SHIFT)
                    .sendKeys("s")
                    .keyUp(Keys.SHIFT)
                    .perform();

            // Pause to observe result
            Thread.sleep(2000);
            // highlight-end

            // The page shows the last key pressed
            WebElement result = driver.findElement(By.id("result"));
            System.out.println("Result displayed: " + result.getText());

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
```
