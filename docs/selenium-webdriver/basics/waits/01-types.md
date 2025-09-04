---
id: wait-types
title: Types
pagination_label: Waits Types
slug: /wait-types
sidebar_position: 01
---

# Waits

WebDriver provides various wait strategies to handle asynchronous operations. These waits allow you to wait for specific conditions to become true before proceeding with your test logic.

## Types of Waits

There are two types of waits in Selenium WebDriver `implicit` and `explicit`:

| Type       | Description                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| `Implicit` | Specifies the maximum time to wait for an element to be present on the page before throwing an exception. |
| `Explicit` | Specifies the maximum time to wait for a specific condition to become true before throwing an exception.  |

---

:::note
There is also a third type of wait known as `Fluent` wait.

In the testing community, `Fluent` wait is often debated as not being a separate type of wait but rather an extension of `Explicit` wait with additional customizations.
:::

| Type     | Description                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| `Fluent` | A type of explicit wait with additional options like polling frequency and ignoring specific exceptions. |

:::info
The **Selenium Community**, in their official documentation **[here](https://www.selenium.dev/documentation/webdriver/waits/)**, includes a Fluent wait example within the Explicit wait section, presenting it as a customization rather than a separate wait type.
:::

---

## When to Use What?

| Feature           | Implicit Wait                      | Explicit Wait                                         |
| ----------------- | ---------------------------------- | ----------------------------------------------------- |
| Scope             | Global (applies to all elements)   | Specific to one element                               |
| Best For          | Minor delays in locating elements  | Elements appearing at unpredictable times             |
| Custom Conditions | Not supported                      | Supports conditions like `visibilityOfElementLocated` |
| Reliability       | Less reliable for dynamic elements | More reliable                                         |
| Code Complexity   | Simple                             | More lines of code                                    |

---

:::info
`Explicit` wait utilizes the `WebDriverWait` & `ExpectedConditions` classes to pause execution until a specified condition is met.

We will explore these classes further in the next section.
:::
