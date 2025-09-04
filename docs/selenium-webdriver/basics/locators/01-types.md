---
id: locator-types
title: Types
pagination_label: Locator Types
slug: /locator-types
sidebar_position: 1
---

# Locators

Locators in Selenium WebDriver are used to find and interact with web elements on a webpage. They help WebDriver identify elements like `buttons`, `text fields`, `checkboxes`, `links`, etc., so that automated test scripts can interact with them.

## Types of Locators

There are several types of locators in Selenium WebDriver:

| Type                              | Description                                                      |
| --------------------------------- | ---------------------------------------------------------------- |
| `By.id(id)`                       | Locates elements by the value of their `id` attribute.           |
| `By.name(name)`                   | Locates elements by the value of their `name` attribute.         |
| `By.cssSelector(selector)`        | Locates elements using `CSS` selectors.                          |
| `By.tagName(tagName)`             | Locates elements by their `HTML` tag name.                       |
| `By.className(className)`         | Locates elements by their `class` attribute.                     |
| `By.xpath(xpathExpression)`       | Locates elements using `XPath` expression.                       |
| `By.linkText(linkText)`           | Locates `anchor` elements by their `exact link text`.            |
| `By.partialLinkText(partialText)` | Locates `anchor` elements by `partial match` of their link text. |

## Choosing the Best Locator Strategy

Each locator has different advantages in terms of performance and reliability. `IDs` are usually the fastest and most reliable when available, while `XPath` and `CSS Selectors` provide the most flexibility for complex element targeting.

- Use `id` whenever possible (fast and unique).
- Use `name` if `id` is not available.
- Use `cssSelector` for complex elements instead of `xpath` (faster).
- Use `xpath` when other strategies are not viable.
