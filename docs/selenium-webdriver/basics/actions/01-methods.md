---
id: actions-methods
title: Methods
pagination_label: Actions
slug: /actions-methods
sidebar_position: 1
---

# Actions

The `Actions` class in Selenium WebDriver is used to perform advanced user interactions, such as mouse and keyboard actions. These methods allow testers to simulate real-world user behavior like clicks, drags, drops, and key presses.

## Commonly Used Methods

| Method                                                            | Description                                                          | Usage Example                                                             |
| ----------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `click(element: WebElement)`                                      | Clicks on the specified element                                      | `actions.click(element).perform();`                                       |
| `doubleClick(element: WebElement)`                                | Double-clicks on the specified element                               | `actions.doubleClick(element).perform();`                                 |
| `contextClick(element: WebElement)`                               | Right-clicks on the specified element                                | `actions.contextClick(element).perform();`                                |
| `moveToElement(element: WebElement)`                              | Moves the mouse to the middle of the specified element               | `actions.moveToElement(element).perform();`                               |
| `moveToElement(element: WebElement, xOffset: int, yOffset: int)`  | Moves the mouse to an offset from the top-left corner of the element | `actions.moveToElement(element, 10, 20).perform();`                       |
| `dragAndDrop(source: WebElement, target: WebElement)`             | Performs drag-and-drop from source element to target element         | `actions.dragAndDrop(source, target).perform();`                          |
| `clickAndHold(element: WebElement)` → `moveToElement` → `release` | Clicks and holds the mouse button, moves to a target, then releases  | `actions.clickAndHold(source).moveToElement(target).release().perform();` |
| `moveByOffset(xOffset: int, yOffset: int)`                        | Moves the mouse by the given offset relative to the current position | `actions.moveByOffset(50, 100).perform();`                                |
| `keyDown(key: CharSequence)`                                      | Presses down a key (e.g., `Keys.CONTROL`)                            | `actions.keyDown(Keys.CONTROL).perform();`                                |
| `keyUp(key: CharSequence)`                                        | Releases a pressed key                                               | `actions.keyUp(Keys.CONTROL).perform();`                                  |
| `sendKeys(keys: CharSequence...)`                                 | Sends keys to the active element                                     | `actions.sendKeys("Hello").perform();`                                    |
| `pause(time: Duration)`                                           | Waits for the given duration                                         | `actions.pause(Duration.ofSeconds(2)).perform();`                         |
| `release()`                                                       | Releases the pressed mouse button at the current location            | `actions.release().perform();`                                            |
| `perform()`                                                       | Executes all the actions that were built                             | `actions.perform();`                                                      |

---

## Common Caveats and Considerations

1. **Browser & Driver Compatibility Issues**

   - Not all advanced interactions are implemented consistently across different browsers/drivers.

   For example, `dragAndDrop()` may work in Chrome but fail or behave differently in Firefox, Safari, or remote environments.

2. **Reliability Problems**

   - Actions like `dragAndDrop()`, `moveByOffset()`, or clickAndHold() can be flaky, especially if the element is moving, covered by another element, or not fully visible.

   Sometimes a direct `click()` or `sendKeys()` on the WebElement is more stable than simulating user gestures.

3. **Performance Overhead**

   - Building and performing composite actions involves multiple low-level events (mouse down, mouse move, mouse up). This can slow tests, particularly on complex pages.

4. **OS & Screen Dependency**

   - Some interactions rely on screen coordinates (e.g., moveByOffset()), which makes them dependent on resolution, scaling, and OS-level differences.

   Tests may pass locally but fail on headless or remote execution (e.g., Selenium Grid, Docker, or cloud providers).

5. **Limited Mobile Support**

   - Selenium Actions works best for desktop browsers. For mobile automation, gestures like pinch, zoom, or swipe require Appium’s Touch Actions, not Selenium’s Actions.

6. **Requires Element to be Visible & Stable**

   - If the element is off-screen, not interactable, or dynamically rendered, the action may fail unless you explicitly scroll or wait.

7. **Interruption Problems**
   - If something interrupts (like a popup appearing in between actions), the sequence may break — unlike JavaScript execution where you can directly trigger DOM events.

---

| **When to Prefer**                                         | **When to Avoid / Alternatives**                                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Hover effects (menus, tooltips).                           | Use `element.click()` or `element.sendKeys()` when possible — more stable and direct. |
| Drag-and-drop (if stable on your target browser).          | Use JavaScript (`executeScript`) for drag-and-drop if native support is flaky.        |
| Composite keyboard actions (Ctrl + click, Shift + select). | For mobile, use Appium’s `TouchAction` API instead of Selenium `Actions`.             |
| Simulating real user-like gestures.                        |                                                                                       |
