---
id: core-interfaces
title: Core Interfaces
pagination_label: Core Interfaces
slug: /core-interfaces
sidebar_position: 2
---

Selenium WebDriver provides a set of **core interfaces** that define how automation scripts interact with the browser.

At the center is the **WebDriver** interface, which provides methods to control the browser and connects to supporting interfaces such as Navigation, TargetLocator, Options, and others.

👉 **Interfaces define what can be done, but not how it’s done.**

---

- **`SearchContext`**  
  The root interface for finding elements.
  Both `WebDriver` (whole page) and `WebElement` (individual element) extend this.  
  👉 If you can find something in Selenium, it’s because of `SearchContext`.

- **`WebDriver`**  
  The primary interface for browser control: open URLs, close windows, manage navigation.  
  👉 When you say `driver.get("https://..")`, you’re using WebDriver.

- **`WebElement`**  
  Represents a single element on the page. Lets you click, type, read text, check attributes, etc.  
  👉 Interaction with a button, textbox, or link happens via WebElement.

- **`JavascriptExecutor`**  
  Runs custom JavaScript in the browser when WebDriver commands fall short.

- **`TakesScreenshot`**  
  Captures screenshots in different formats (`FILE`, `BYTES`, `BASE64`).

- **`HasCapabilities / Capabilities`**  
  Describes the connected browser (name, version, platform, etc.). Useful for setup and debugging.

- **`HasAuthentication`**  
  Supports HTTP Basic authentication handling (new in Selenium 4).

- **`PrintsPage + PrintOptions`**  
  Allows printing a page to PDF with custom settings.

- **`Options`**  
  Accessed via `driver.manage()`. Provides sub-interfaces and capabilities such as:
  - `Timeouts`
  - `Window`
  - `Cookies`
  - `Logs`
