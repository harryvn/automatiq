---
id: browser-initialization
title: Initialization
pagination_label: Initializing a Browser
slug: /browser-initialization
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Browser

Initializing a web browser serves as the starting point for all Selenium WebDriver tests. Selenium WebDriver is compatible with various browsers including Chrome, Firefox, Safari, and Edge.

## Driver Creation and Session Management

| Method                                  | Description                                      | Usage                |
| --------------------------------------- | ------------------------------------------------ | -------------------- |
| `WebDriver driver = new ChromeDriver()` | Creates a new WebDriver instance.                | `new ChromeDriver()` |
| `quit()`                                | Closes all browser windows and ends the session. | `driver.quit()`      |
| `close()`                               | Closes the current browser window.               | `driver.close()`     |

:::info
Here, we are creating a new instance of the ChromeDriver, which is a concrete implementation of the WebDriver interface used to control the Chrome browser.
:::

---

## Managing Browser Window

In this section, we will explore how to manage the browser windows using the `Window` interface.

| Method                                 | Description                                      | Usage                                                            |
| -------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------- |
| `manage().window().maximize()`         | Maximizes the browser window.                    | `driver.manage().window().maximize()`                            |
| `manage().window().minimize()`         | Minimizes the browser window.                    | `driver.manage().window().minimize()`                            |
| `manage().window().fullscreen()`       | Opens the browser in fullscreen mode.            | `driver.manage().window().fullscreen()`                          |
| `manage().window().getSize()`          | Retrieves the size of the browser window.        | `driver.manage().window().getSize()`                             |
| `manage().window().setSize(Dimension)` | Resizes the browser window.                      | `driver.manage().window().setSize(new Dimension(width, height))` |
| `manage().window().getPosition()`      | Retrieves the position of the browser window.    | `driver.manage().window().getPosition()`                         |
| `manage().window().setPosition(Point)` | Moves the browser window to a specific position. | `driver.manage().window().setPosition(new Point(x, y))`          |
