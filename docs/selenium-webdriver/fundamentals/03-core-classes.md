---
id: core-classes
title: Core Classes
pagination_label: Core Classes
slug: /core-classes
sidebar_position: 3
---

These provide the implementation of the core interfaces:

- **`RemoteWebDriver`**  
  The main implementation of WebDriver.  
  👉 When you write new ChromeDriver(), internally it extends RemoteWebDriver.

- **`RemoteWebElement`**  
  Represents elements discovered by a RemoteWebDriver. Implements WebElement.

- **`Cookie & Cookie.Builder`**  
  Represent browser cookies. You can add, delete, or build custom cookies with attributes like `Secure`, `HttpOnly`, or expiry.

- **`Actions`**  
  A class for advanced user interactions: mouse movements, drag-and-drop, multi-key actions, etc.

- **`Wait Mechanisms`**

  - `FluentWait`: Flexible strategy with timeouts, polling, and exception ignoring.
  - `WebDriverWait`: Specialization of `FluentWait` for WebDriver usage.
  - `ExpectedConditions`: Pre-built common conditions like `element visible` or `clickable.`
    ⚠️ Note: In Selenium 4, ExpectedConditions is deprecated in favor of custom `ExpectedCondition<T>` lambdas.

- **`DevTools & VirtualAuthenticator`**  
  Advanced APIs (Selenium 4): Provide Chrome DevTools Protocol (CDP) hooks and simulated authentication devices.  
  👉 Not universal across browsers.
