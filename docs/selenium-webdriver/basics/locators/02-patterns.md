---
id: locator-patterns
title: Patterns
pagination_label: Locator Patterns
slug: /locator-patterns
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Locator Patterns

Selenium WebDriver provides several locator patterns to find elements on a webpage. These patterns are based on different strategies and can be used to locate elements based on different criteria.

With advanced locators such as `By.cssSelector(selector)` or `By.xpath(xpathExpression)`, you can use more complex patterns to locate elements on a webpage.

Below are some examples of how to use these patterns:

## Common CSS Selector Patterns

| Pattern                | Description                                         | Usage                                            |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------ |
| `tag`                  | Selects all elements with the given tag             | `By.cssSelector("button")`                       |
| `#id`                  | Selects element with specific id                    | `By.cssSelector("#login")`                       |
| `.class`               | Selects all elements with specific class            | `By.cssSelector(".btn-primary")`                 |
| `[attribute]`          | Selects elements with the specific attribute        | `By.cssSelector("[required]")`                   |
| `[attribute=value]`    | Selects elements with attribute equal to value      | `By.cssSelector("[type='submit']")`              |
| `[attribute*=value]`   | Selects elements with attribute containing value    | `By.cssSelector("[class*='btn']")`               |
| `[attribute^=value]`   | Selects elements with attribute starting with value | `By.cssSelector("[id^='prefix']")`               |
| `[attribute$=value]`   | Selects elements with attribute ending with value   | `By.cssSelector("[id$='suffix']")`               |
| `selector1, selector2` | Selects all elements matching either selector       | `By.cssSelector("button, input[type='submit']")` |
| `ancestor descendant`  | Selects all descendants matching pattern            | `By.cssSelector("form input")`                   |
| `parent > child`       | Selects direct children matching pattern            | `By.cssSelector("form > input")`                 |
| `element + adjacent`   | Selects adjacent sibling                            | `By.cssSelector("label + input")`                |
| `element ~ siblings`   | Selects all following siblings                      | `By.cssSelector("h2 ~ p")`                       |
| `:nth-child(n)`        | Selects nth child element                           | `By.cssSelector("li:nth-child(2)")`              |
| `:first-child`         | Selects first child element                         | `By.cssSelector("li:first-child")`               |
| `:last-child`          | Selects last child element                          | `By.cssSelector("li:last-child")`                |

---

## Common XPath Patterns

| Pattern                                   | Description                                         | Usage                                                          |
| ----------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| `//tag`                                   | Selects all elements with the given tag             | `By.xpath("//button")`                                         |
| `//tag[@attribute='value']`               | Selects elements with matching attribute value      | `By.xpath("//input[@type='submit']")`                          |
| `//tag[contains(@attribute,'value')]`     | Selects elements containing value in attribute      | `By.xpath("//div[contains(@class,'container')]")`              |
| `//tag[starts-with(@attribute,'value')]`  | Selects elements with attribute starting with value | `By.xpath("//input[starts-with(@id,'prefix')]")`               |
| `//tag[text()='text']`                    | Selects elements with exact text                    | `By.xpath("//button[text()='Login']")`                         |
| `//tag[contains(text(),'text')]`          | Selects elements containing text                    | `By.xpath("//span[contains(text(),'Welcome')]")`               |
| `//parent/child`                          | Selects child elements of parent                    | `By.xpath("//form/input")`                                     |
| `//parent//descendant`                    | Selects all descendant elements                     | `By.xpath("//div//span")`                                      |
| `//element/..`                            | Selects parent of an element                        | `By.xpath("//input[@id='email']/..")`                          |
| `//element/following-sibling::tag`        | Selects following siblings                          | `By.xpath("//label/following-sibling::input")`                 |
| `//element/preceding-sibling::tag`        | Selects preceding siblings                          | `By.xpath("//input/preceding-sibling::label")`                 |
| `//tag1[@attr1='val1' and @attr2='val2']` | Selects elements matching both conditions           | `By.xpath("//input[@required and @type='email']")`             |
| `//tag1[@attr1='val1' or @attr2='val2']`  | Selects elements matching either condition          | `By.xpath("//button[@type='submit' or @class='btn-primary']")` |
| `//tag[position()=n]`                     | Selects the nth matching element                    | `By.xpath("//tr[position()=1]")`                               |
| `//tag[last()]`                           | Selects the last matching element                   | `By.xpath("//tr[last()]")`                                     |

---

## Relative Locator Methods

<Tabs>
<TabItem value="above" label="above">
`withTagName(tagName).above(element)` → Locates element above the reference element.

```java
driver.findElement(RelativeLocator.with(By.tagName("input")).above(passwordField));
```

</TabItem>
<TabItem value="below" label="below">
`withTagName(tagName).below(element)` → Locates element below the reference element.

```java
driver.findElement(RelativeLocator.with(By.tagName("button")).below(emailField));
```

</TabItem>
<TabItem value="toLeftOf" label="toLeftOf">
`withTagName(tagName).toLeftOf(element)` → Locates element to the left of the reference element.

```java
driver.findElement(RelativeLocator.with(By.tagName("label")).toLeftOf(emailField));
```

</TabItem>
<TabItem value="toRightOf" label="toRightOf">
`withTagName(tagName).toRightOf(element)` → Locates element to the right of the reference element.

```java
driver.findElement(RelativeLocator.with(By.tagName("button")).toRightOf(cancelButton));
```

</TabItem>
<TabItem value="near" label="near">
`withTagName(tagName).near(element)` → Locates element near the reference element.

```java
driver.findElement(RelativeLocator.with(By.tagName("p")).near(headerElement));
```

</TabItem>

</Tabs>
