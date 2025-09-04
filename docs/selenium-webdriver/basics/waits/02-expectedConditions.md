---
id: expected-conditions
title: ExpectedConditions
pagination_label: WebDriverWait & ExpectedConditions
slug: /expected-conditions
sidebar_position: 2
---

# WebDriverWait & ExpectedConditions

Below are few important points about `WebDriverWait` and `ExpectedConditions`:

## WebDriverWait

`WebDriverWait` is a Selenium class used to implement explicit waits in Selenium WebDriver. It waits for a specified condition to be met before proceeding with execution, ensuring elements are available, visible, clickable, or meet other expected conditions.

### Why Use `WebDriverWait`?

- Handles dynamic elements that take time to load.
- Reduces `NoSuchElementException`, `StaleElementReferenceException` and `ElementNotInteractableException`.
- Improves script stability and execution speed.

---

## ExpectedConditions

`ExpectedConditions` is a class in Selenium WebDriver that provides a set of predefined conditions that can be used with `WebDriverWait` to implement `explicit` waits. These conditions help ensure that a web element is in an expected state before performing actions on it, preventing issues like `ElementNotFoundException` or `StaleElementReferenceException`.

### Why Use `ExpectedConditions`?

- Reduces flakiness by handling element states properly.
- Prevents hardcoded waits `Thread.sleep()`, improving test execution speed.
- Ensures synchronization between Selenium WebDriver and the web page.

---

Below is a comprehensive list of methods from ExpectedConditions available in Selenium WebDriver:

## Common EC Methods

### Visibility and Presence

| Method                                                          | Description                                                      |
| --------------------------------------------------------------- | ---------------------------------------------------------------- |
| `visibilityOfElementLocated(By locator)`                        | Waits until element is visible and present in DOM                |
| `visibilityOf(WebElement element)`                              | Waits until element is visible                                   |
| `visibilityOfAllElements(WebElement... elements)`               | Waits until all provided elements are visible                    |
| `visibilityOfAllElements(List<WebElement> elements)`            | Waits until all elements in the list are visible                 |
| `visibilityOfAllElementsLocatedBy(By locator)`                  | Waits until all elements matching the locator are visible        |
| `invisibilityOfElementLocated(By locator)`                      | Waits until element is either not visible or not present         |
| `invisibilityOf(WebElement element)`                            | Waits until element is not visible                               |
| `presenceOfElementLocated(By locator)`                          | Waits until element is present in DOM (visible or not)           |
| `presenceOfAllElementsLocatedBy(By locator)`                    | Waits until all elements matching the locator are present in DOM |
| `presenceOfNestedElementLocatedBy(By locator, By childLocator)` | Waits until a child element is present within a parent element   |
| `presenceOfNestedElementsLocatedBy(By parent, By childLocator)` | Waits until nested elements are present                          |

:::info
Difference between `visibilityOfAllElements(WebElement... elements)` and `visibilityOfAllElements(List<WebElement> elements)`

Both methods ensure that all specified elements are visible, but they differ in how elements are passed—one uses varargs, while the other accepts a list.

These are simply method overloads offering the same functionality but catering to different use cases. Internally, both function the same way, waiting for elements to become visible.

The `List<WebElement>` version is preferred for dynamic collections, whereas the varargs version is more convenient when dealing with a predefined set of elements.
:::

---

### State

| Method                                                                  | Description                                                      |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `elementToBeClickable(By locator)`                                      | Waits until element is visible and enabled                       |
| `elementToBeClickable(WebElement element)`                              | Waits until element is visible and enabled                       |
| `elementToBeSelected(By locator)`                                       | Waits until element is selected                                  |
| `elementToBeSelected(WebElement element)`                               | Waits until element is selected                                  |
| `elementSelectionStateToBe(By locator, boolean selected)`               | Waits until element's selection state matches the provided state |
| `elementSelectionStateToBe(WebElement element, boolean selected)`       | Waits until element's selection state matches the provided state |
| `attributeToBe(By locator, String attribute, String value)`             | Waits until element's attribute has the specified value          |
| `attributeToBe(WebElement element, String attribute, String value)`     | Waits until element's attribute has the specified value          |
| `attributeContains(By locator, String attribute, String value)`         | Waits until element's attribute contains the specified value     |
| `attributeContains(WebElement element, String attribute, String value)` | Waits until element's attribute contains the specified value     |
| `attributeToBeNotEmpty(WebElement element, String attribute)`           | Waits until element's attribute is not empty                     |

---

### Text

| Method                                                           | Description                                                       |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| `textToBe(By locator, String text)`                              | Waits until element has exact text                                |
| `textToBePresentInElement(WebElement element, String text)`      | Waits until element contains the specified text                   |
| `textToBePresentInElementLocated(By locator, String text)`       | Waits until element contains the specified text                   |
| `textToBePresentInElementValue(By locator, String text)`         | Waits until element's value attribute contains the specified text |
| `textToBePresentInElementValue(WebElement element, String text)` | Waits until element's value attribute contains the specified text |
| `textMatches(By locator, Pattern pattern)`                       | Waits until element's text matches the provided regex pattern     |

---

### Frame

| Method                                                     | Description                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------- |
| `frameToBeAvailableAndSwitchToIt(int frameLocator)`        | Waits for frame to be available and switches to it using index      |
| `frameToBeAvailableAndSwitchToIt(String frameLocator)`     | Waits for frame to be available and switches to it using name/id    |
| `frameToBeAvailableAndSwitchToIt(By locator)`              | Waits for frame to be available and switches to it using locator    |
| `frameToBeAvailableAndSwitchToIt(WebElement frameElement)` | Waits for frame to be available and switches to it using WebElement |

---

### Alert

| Method           | Description                     |
| ---------------- | ------------------------------- |
| `alertIsPresent` | Waits until an alert is present |

---

### Title

| Method                          | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| `titleIs(String title)`         | Waits until page title matches exactly                    |
| `titleContains(String title)`   | Waits until page title contains the specified text        |
| `titleMatches(Pattern pattern)` | Waits until page title matches the provided regex pattern |

---

### URL

| Method                         | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `urlToBe(String url)`          | Waits until URL matches exactly                    |
| `urlContains(String fraction)` | Waits until URL contains the specified text        |
| `urlMatches(String regex)`     | Waits until URL matches the provided regex pattern |

---

### Number of Elements

| Method                                                     | Description                                                             |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| `numberOfElementsToBe(By locator, Integer number)`         | Waits until number of elements matching locator is exactly as specified |
| `numberOfElementsToBeLessThan(By locator, Integer number)` | Waits until number of elements is less than specified                   |
| `numberOfElementsToBeMoreThan(By locator, Integer number)` | Waits until number of elements is more than specified                   |

---

### JavaScript

| Method                                    | Description                                        |
| ----------------------------------------- | -------------------------------------------------- |
| `jsReturnsValue(String javaScript)`       | Waits until JavaScript returns a value             |
| `jsThrowsNoExceptions(String javaScript)` | Waits until JavaScript executes without exceptions |

---

### DOM-related

| Method                                      | Description                                      |
| ------------------------------------------- | ------------------------------------------------ |
| `stalenessOf(WebElement element)`           | Waits until element is no longer attached to DOM |
| `refreshed(ExpectedCondition<T> condition)` | Waits until condition is true after a refresh    |

---

### Custom Composition

| Method                                    | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| `and(ExpectedCondition<?>... conditions)` | Combines multiple conditions with AND logic |
| `or(ExpectedCondition<?>... conditions)`  | Combines multiple conditions with OR logic  |
| `not(ExpectedCondition<?> condition)`     | Negates a condition                         |

---

:::note
The examples section will cover the most commonly used methods in practice; however, providing examples for each method mentioned above is beyond the scope of this guide.
:::
