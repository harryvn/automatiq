---
id: capabilities-examples
title: Examples
pagination_label: Capabilities Examples
slug: /capabilities-examples
sidebar_position: 2
---

## Capabilities Examples

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.Platform;
import java.util.Map;

public class CapabilitiesExamples {
    public static void main(String[] args) {
        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {

            //highlight-start
            // Retrieve capabilities
            Capabilities caps = ((RemoteWebDriver) driver).getCapabilities();

            // Get Browser Name
            String browserName = caps.getBrowserName();
            System.out.println("Browser Name: " + browserName);

            // Get Browser Version
            String browserVersion = caps.getBrowserVersion();
            System.out.println("Browser Version: " + browserVersion);

            // Get Platform Name
            Platform platform = caps.getPlatformName();
            System.out.println("Platform Name: " + platform);

            // Get Capability
            Object acceptInsecureCerts = caps.getCapability("acceptInsecureCerts");
            System.out.println("Accept Insecure Certs: " + acceptInsecureCerts);

            // As Map
            Map<String, Object> allCaps = caps.asMap();
            System.out.println("All Capabilities: " + allCaps);
            //highlight-end

        } finally {
            driver.quit();
        }
    }
}
```

:::tip

- `getBrowserName()`, `getBrowserVersion()`, and `getPlatformName()` are most commonly used for reporting and debugging.
- `getCapability(name)` and `asMap()` are less commonly used, but helpful when working with custom capabilities (like `proxy`, `headless` mode, `SSL`).
  :::
