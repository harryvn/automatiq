---
id: alert-methods
title: Methods
pagination_label: Alerts
slug: /alert-methods
sidebar_position: 01
---

# Alerts

Alerts in Selenium WebDriver help handle JavaScript pop-ups like informational messages, prompts, and confirmations that require user input. WebDriver provides methods to accept, dismiss, or retrieve text from alerts, ensuring seamless automation. These techniques enable testers to validate notifications and interact with modal dialogs effectively.

## Types of Alerts

There are primarily three types of alerts in web automation: simple alerts, confirmation alerts, and prompt alerts.

| Type               | Description                                                | Example (JavaScript)                     | Handling in Selenium                         |
| ------------------ | ---------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| Simple Alert       | Displays a message with only an OK button.                 | `alert("This is a simple alert!");`      | `driver.switchTo().alert().accept();`        |
| Confirmation Alert | Displays a message with OK and Cancel buttons.             | `confirm("Do you want to proceed?");`    | Use `accept()` (OK) or `dismiss()` (Cancel). |
| Prompt Alert       | Displays a message, an input field, and OK/Cancel buttons. | `prompt("Enter your name:", "Default");` | Use `sendKeys()` + `accept()`/`dismiss()`.   |

---

## Common Alert Methods

| Method                  | Description                                                          | Usage Example                                             |
| ----------------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| `switchTo().alert()`    | Switches WebDriver's focus to the currently active alert/prompt.     | `driver.switchTo().alert();`                              |
| `accept()`              | Clicks the "OK" button (accepts the alert).                          | `driver.switchTo().alert().accept();`                     |
| `dismiss()`             | Clicks the "Cancel" button (dismisses the alert).                    | `driver.switchTo().alert().dismiss();`                    |
| `getText()`             | Returns the text displayed in the alert.                             | `String alertText = driver.switchTo().alert().getText();` |
| `sendKeys(String text)` | Enters text into a prompt (only works for alerts with input fields). | `driver.switchTo().alert().sendKeys("input");`            |

:::note
`sendKeys()` only works for prompt alerts (not simple alert() or confirm() dialogs). If no alert is present when switching, Selenium throws a NoAlertPresentException.
:::
