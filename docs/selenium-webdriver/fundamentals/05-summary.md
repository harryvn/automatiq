---
id: summary
title: Summary
pagination_label: Summary
slug: /summary
sidebar_position: 5
---

## Key Relationship

- `SearchContext` is the root, extended by both `WebDriver` and `WebElement`

- `RemoteWebDriver` implements `WebDriver`, `JavascriptExecutor`, `TakesScreenshot`, `HasCapabilities`, etc.

- `RemoteWebElement` implements `WebElement`

- Each browser driver (like `ChromeDriver`, `FirefoxDriver`) extends `RemoteWebDriver`

- `Options`, `Navigation`, `TargetLocator`, etc. are accessed as sub-interfaces from `WebDriver`

- `PrintsPage`, `HasAuthentication`, and other specialized interfaces were added in Selenium 4

---

The WebDriver API fundamentals define everything you do with Selenium:

- Interfaces (`WebDriver`, `WebElement`) → define what you can do.

- Classes (`RemoteWebDriver`, `Actions`, `Cookie`) → define how it’s implemented.

- Enums (`OutputType`, `Platform`) → provide fixed constants.

- `Wait` helpers keep tests stable.

- Advanced APIs (`DevTools`, `VirtualAuthenticator`, `PrintsPage`) bring modern browser integration.

Understanding these building blocks gives you a rock-solid foundation for advanced automation with Selenium.
