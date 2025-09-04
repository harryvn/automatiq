---
id: options-methods
title: Methods
pagination_label: Options
slug: /options-methods
sidebar_position: 1
---

# Options

The `Options` interface in Selenium WebDriver provides methods to manage various aspects of the browser session. It is accessed via the `driver.manage()` method and is used for handling timeouts, cookies, logs, window settings, and retrieving session capabilities.

---

## Commonly Used Methods

| Method                           | Description                                                        | Usage Example                                                          |
| -------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `timeouts()`                     | Returns a `Timeouts` object for managing waits and timeouts        | `driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));`   |
| `window()`                       | Returns a `Window` object for managing the browser window          | `driver.manage().window().maximize();`                                 |
| `logs()`                         | Returns a `Logs` object for accessing browser logs                 | `LogEntries logs = driver.manage().logs().get("browser");`             |
| `addCookie(Cookie cookie)`       | Adds a specific cookie to the current browser session              | `driver.manage().addCookie(new Cookie("key", "value"));`               |
| `deleteCookieNamed(String name)` | Deletes a cookie by its name                                       | `driver.manage().deleteCookieNamed("key");`                            |
| `deleteCookie(Cookie cookie)`    | Deletes a specific cookie                                          | `driver.manage().deleteCookie(cookie);`                                |
| `deleteAllCookies()`             | Deletes all cookies in the current session                         | `driver.manage().deleteAllCookies();`                                  |
| `getCookies()`                   | Returns all cookies as a `Set<Cookie>`                             | `Set<Cookie> cookies = driver.manage().getCookies();`                  |
| `getCookieNamed(String name)`    | Returns a cookie by its name                                       | `Cookie cookie = driver.manage().getCookieNamed("key");`               |
| `toCapabilities()`               | Returns the `Capabilities` object representing the current session | `Capabilities caps = (Capabilities) driver.manage().toCapabilities();` |

---

## Common Use Cases

1. **Timeouts**

   - Configure implicit waits for element discovery
   - Set script and page load timeouts

2. **Window Management**

   - Maximize, resize, or reposition the browser window
   - Enable fullscreen mode for UI testing

3. **Cookie Management**

   - Add authentication cookies to skip login flows
   - Validate login/logout behavior by checking cookies
   - Clear cookies between test runs for isolation

4. **Logs**

   - Capture browser console logs for debugging
   - Monitor network and performance-related messages

5. **Capabilities**
   - Retrieve browser and driver details
   - Useful for debugging environment configurations
