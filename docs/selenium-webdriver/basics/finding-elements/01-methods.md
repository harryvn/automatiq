---
id: finding-element-methods
title: Methods
pagination_label: Finding Elements Methods
slug: /finding-element-methods
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Finding Elements

Selenium WebDriver provides various methods for finding web elements on a web page. These methods are used to locate and interact with specific elements on the page. Here are some common methods:

## Element Finding Methods

| Method           | Description                                  | Usage                                                                    |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| `findElement()`  | Finds the first element matching the locator | `WebElement element = driver.findElement(By.id("submit"));`              |
| `findElements()` | Finds all elements matching the locator      | `List<WebElement> elements = driver.findElements(By.className("item"));` |

---

## Key Differences:

| Feature                      | `findElement`                                                    | `findElements`                                                                           |
| ---------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Return Type                  | Returns a single `WebElement`.                                   | Returns a `List<WebElement>`.                                                            |
| Behavior if No Element Found | Throws `NoSuchElementException` if the element is not found.     | Returns an empty list if no elements match the locator.                                  |
| Use Case                     | Used when you expect a single element to be present on the page. | Used when you expect multiple elements to be present on the page.                        |
| Indexing                     | Not applicable (only one element).                               | Allows accessing elements using an index `(findElements(locator).get(0))`.               |
| Performance Impact           | Stops searching as soon as it finds the first matching element.  | Searches for all matching elements, which may impact performance if many elements exist. |

---

:::note
**Do not confuse elements with locators, as each serves a distinct purpose and has its own unique characteristics.**
:::

## Difference Between Element and Locator in Selenium WebDriver

| Aspect     | Element                                                                                    | Locator                                                                              |
| ---------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Definition | An element is a UI component on a webpage, such as a button, input field, or link.         | A locator is a strategy used to identify and find an element on a webpage.           |
| Nature     | Represents an actual DOM element.                                                          | Acts as a query or selector used to find an element.                                 |
| Usage      | Interacted with using WebDriver methods like `.click()`, `.sendKeys()`, `.getText()`, etc. | Used with WebDriver’s `findElement()` or `findElements()` methods to fetch elements. |
| Example    | `WebElement loginButton = driver.findElement(By.id("login"));`                             | `By.id("login")` is the locator used to find the element.                            |
| Dependency | Requires a locator to be found.                                                            | Exists independently as a way to locate elements.                                    |
