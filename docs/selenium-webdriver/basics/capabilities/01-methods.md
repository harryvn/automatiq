---
id: capabilities-methods
title: Methods
pagination_label: Capabilities
slug: /capabilities-methods
sidebar_position: 1
---

# Capabilities

The `Capabilities` interface in Selenium WebDriver represents a set of key-value pairs that describe the browser, its features, and the environment where the test is executed. It helps in retrieving metadata such as browser name, version, platform, and additional capabilities provided during the WebDriver session.

---

## Commonly Used Methods

| Method                       | Description                                                              | Usage Example                                             |
| ---------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| `getBrowserName()`           | Returns the name of the current browser being used                       | `String browser = caps.getBrowserName();`                 |
| `getBrowserVersion()`        | Returns the version of the browser                                       | `String version = caps.getBrowserVersion();`              |
| `getPlatformName()`          | Returns the platform (OS) where the test is running as a `Platform` enum | `Platform platform = caps.getPlatformName();`             |
| `getCapability(String name)` | Retrieves the value of a specific capability by its name                 | `Object cap = caps.getCapability("acceptInsecureCerts");` |
| `asMap()`                    | Returns all capabilities as a `Map<String, Object>`                      | `Map<String, Object> map = caps.asMap();`                 |

---

## Common Use Cases

**Environment Identification**

- Identify the browser, version, and OS where the test is running.
- Helpful in cross-browser and cross-platform testing.

**Debugging**

- Retrieve session details to debug environment mismatches.
- Check specific capability values (e.g., proxy settings, SSL certificate handling).

**Dynamic Test Configuration**

- Use retrieved capabilities to make runtime decisions in your tests.
- Adapt behavior depending on browser version or platform.

**Reporting**

- Include browser, version, and platform information in test reports.
- Useful for audit trails and CI/CD pipeline logs.
