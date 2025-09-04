---
id: frames-and-windows
title: Frames and Windows
pagination_label: Frames and Windows
slug: /frames-and-windows
sidebar_position: 01
---

# Frames and Windows

In web automation, it’s common to interact with elements inside `iframes` or to work with `multiple browser windows/tabs`.

Selenium WebDriver provides methods to switch the context between frames, default content, and windows.

---

## Switching Between Frames

To interact with elements inside an iframe, Selenium must first switch context into that frame.

| Method                               | Description                                                | Usage Example                            |
| ------------------------------------ | ---------------------------------------------------------- | ---------------------------------------- |
| `switchTo().frame(int index)`        | Switches to a frame by its zero-based index.               | `driver.switchTo().frame(0);`            |
| `switchTo().frame(String nameOrId)`  | Switches to a frame using its `name` or `id` attribute.    | `driver.switchTo().frame("frameName");`  |
| `switchTo().frame(WebElement frame)` | Switches to a frame using a located frame WebElement.      | `driver.switchTo().frame(frameElement);` |
| `switchTo().defaultContent()`        | Switches back from a frame to the main (default) document. | `driver.switchTo().defaultContent();`    |

:::info
Switching to the wrong frame or forgetting to switch back to default content can cause `NoSuchElementException`.
:::

---

## Switching Between Windows/Tabs

Selenium treats each browser window or tab as a separate **window handle**.

| Method                             | Description                               | Usage Example                                 |
| ---------------------------------- | ----------------------------------------- | --------------------------------------------- |
| `getWindowHandle()`                | Returns the handle of the current window. | `String original = driver.getWindowHandle();` |
| `getWindowHandles()`               | Returns a set of all open window handles. | `driver.getWindowHandles();`                  |
| `switchTo().window(String handle)` | Switches to a window using its handle.    | `driver.switchTo().window(handle);`           |

**Typical Flow:**

- Store the current window handle.
- Open a new window/tab (e.g., using JavaScript).
- Iterate over `getWindowHandles()` to find the new one.
- Switch to it and perform actions.
- Switch back to the original handle if needed.
