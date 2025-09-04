---
id: navigation-methods
title: Methods
pagination_label: Navigation Methods
slug: /navigation-methods
sidebar_position: 1
---

# Navigation

Navigation is a fundamental operation in Selenium WebDriver, enabling seamless interaction with web applications. Selenium WebDriver provides methods for navigating between web pages and managing the navigation history, ensuring efficient testing of multi-page workflows. These methods allow testers to move forward, backward, refresh pages, and directly open URLs, making it easier to automate and validate user journeys.

## Basic `WebDriver` Methods for fetching details of the current page.

| Method            | Description                         | Usage                                               |
| ----------------- | ----------------------------------- | --------------------------------------------------- |
| `get(url)`        | Navigates to the specified URL      | `driver.get("https://the-internet.herokuapp.com");` |
| `getCurrentUrl()` | Gets the URL of the current page    | `String currentUrl = driver.getCurrentUrl();`       |
| `getTitle()`      | Gets the title of the current page  | `String title = driver.getTitle();`                 |
| `getPageSource()` | Gets the source of the current page | `String source = driver.getPageSource();`           |

---

## Navigation History Methods

| Method                 | Description                    | Usage                                                         |
| ---------------------- | ------------------------------ | ------------------------------------------------------------- |
| `navigate().back()`    | Goes back to the previous page | `driver.navigate().back();`                                   |
| `navigate().forward()` | Goes forward to the next page  | `driver.navigate().forward();`                                |
| `navigate().refresh()` | Refreshes the current page     | `driver.navigate().refresh();`                                |
| `navigate().to(url)`   | Navigates to the specified URL | `driver.navigate().to("https://the-internet.herokuapp.com");` |
