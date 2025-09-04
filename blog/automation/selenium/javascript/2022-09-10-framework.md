---
slug: selenium-framework-javascript
title: Part 1 - Minimal Automation Framework in JavaScript
authors: [harryvn]
tags: [selenium, javascript, mocha, chai, winston]
---

A bare minimum automation framework

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- truncate -->

---

## Introduction

This article will provide a high-level overview of creating the framework from scratch. It explains how to set up the project and the tools needed to make the framework as effective as possible.

---

## Prerequisites

This framework depends on the following tools and concepts.

1. **Visual Studio Code** (or any IDE of your choice)

2. **NodeJS**

3. **NPM**

4. **Selenium WebDriver**

---

## Structure

Any framework you design should be organized for better maintenance.

It is important to understand the overall project structure, below is the folder structure of this project.

- `config` - all configurations will reside here

- `logs` - store all types of logs

- `reports` - reports are saved here

- `pages` - to store locators and other details using the page object design

- `specs` - contains test cases

- `utils` - all global scripts

- `data` - to store all relevant test data (optional in our case)

A typical project structure is as below.

<img src={require('@site/static/img/javascript/project-structure.avif').default} alt="project-structure" />

---

## Implementation

Following is the implementation of the framework.

<Tabs>
    <TabItem value="prereqs" label="Initialise Project">
Create a project directory and open it with an IDE.

```bash
mkdir e2e && cd e2e && code .
```

We will be using `npm` as the default package manager. So, let's initialize the project root.

```bash
npm init -y
```

The `-y` flag will initialize and create a `package.json` file with default values as below.

```json
{
  "name": "e2e",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

</TabItem>

<TabItem value="install" label="Install Dependencies">
Install the following dependencies.

```bash
npm install selenium-webdriver selenium-standalone winston config chai mocha mochawesome
```

It will include all packages as a project dependency in the `package.json` file.

```json
"dependencies": {
    "chai": "^4.3.6",
    "config": "^3.3.7",
    "mocha": "^10.0.0",
    "mochawesome": "^7.1.3",
    "selenium-standalone": "^8.2.0",
    "selenium-webdriver": "^4.4.0",
    "winston": "^3.8.1"
  }
```

- `chai` - an assertion library

- `config` - to handle global configurations

- `mocha` - test framework

- `mochawesome` - custom reporter in combination with the test framework

- `selenium-standalone` - NodeJS based cli for launching selenium server

- `selenium-webdriver` - browser automation library

- `winston` - logger to write custom logs

</TabItem>

<TabItem value="init" label="Create Directories">
Let's create the required folders.

```bash
mkdir -p config pages specs utils logs reports
```

</TabItem>

</Tabs>

---

## Start Scripting

### Utils

This directory will store generic scripts used globally.

So, under `utils` create the following files.

- `driver.js` to initialize the "driver" as a global variable.

- `logger.js` file to generate logs.

- `common.js` file for handling selenium methods using generic functions.

- `startup.js` under the utils folder to handle browser & driver sessions.

:::note
Test cases will evolve over time. So, as a best practice, we should initialize and quit the browser sessions once per every test case or once per group of test cases.
:::

:::info
Dynamic variables are used to read data from the config file instead of hardcoded values.
:::

<Tabs>
<TabItem value="driver" label="driver.js">

```js
const { Builder } = require("selenium-webdriver");
const log = require("./logger");
const config = require("config");

const browser = process.env.BROWSER || config.get("browser");
const protocol = process.env.PROTOCOL || config.get("protocol");
const host = process.env.HOST || config.get("host");
const port = process.env.PORT || config.get("port");
const seleniumAddress =
  process.env.seleniumAddress || `${protocol}://${host}:${port}`;

let driver = new Builder()
  .forBrowser(browser)
  .usingServer(seleniumAddress)
  .build();

class Driver {
  constructor() {
    global.driver = driver;
    log.info("Driver has Initialized");
    log.info(`Opening ${browser} browser`);
  }
}

module.exports = new Driver();
```

</TabItem>

<TabItem value="logger" label="logger.js">

```js
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ message, timestamp }) => {
  return `${timestamp} => ${message}`;
});

const logger = createLogger({
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [new transports.File({ filename: "./logs/automation.log" })],
});

module.exports = logger;
```

</TabItem>

<TabItem value="common" label="common.js">

```js
require("./driver");
require("chai").should();
const { By, Key, until } = require("selenium-webdriver");
const config = require("config");
const log = require("./logger");
const env = process.env.NODE_ENV || "prod";

const baseURL = config.get("url");

class Common {
  async getURL() {
    await driver.get(baseURL);
    log.info(`The test will run on ${env} environment`);
    log.info(`The url is: ${baseURL}`);
  }

  async setImplicitWait() {
    await driver.manage().setTimeouts({ implicit: 10000 });
    log.info("Set Implicit Wait Globally");
  }

  async getMaximizeWindow() {
    await driver.manage().window().maximize();
    log.info("Browser window maximized");
  }

  async getDeleteAllCookies() {
    await driver.manage().deleteAllCookies();
    log.info("Deleted Browser Cookies");
  }

  async getWindowTitle(windowTitle) {
    let title = await driver.getTitle().then(function (value) {
      return value;
    });

    await title.should.equal(windowTitle);
    log.info(`The title on browser window is ${windowTitle}`);
  }

  async getElementLocator(locator, locatorType) {
    let element = null;
    let timer = 30000;
    if (locatorType === "id") {
      element = await driver.wait(until.elementLocated(By.id(locator)), timer);
    } else if (locatorType === "xpath") {
      element = await driver.wait(
        until.elementLocated(By.xpath(locator)),
        timer
      );
    } else if (locatorType === "name") {
      element = await driver.wait(
        until.elementLocated(By.name(locator)),
        timer
      );
    } else if (locatorType === "css") {
      element = await driver.wait(until.elementLocated(By.css(locator)), timer);
    } else if (locatorType === "linkText") {
      element = await driver.wait(
        until.elementLocated(By.linkText(locator)),
        timer
      );
    } else if (locatorType === "partialLinkText") {
      element = await driver.wait(
        until.elementLocated(By.partialLinkText(locator)),
        timer
      );
    }
    return element;
  }

  async getSendKeys(locator, locatorType, locatorName, sendValue) {
    let element = await this.getElementLocator(locator, locatorType);
    if (element.isDisplayed()) {
      await element.clear();
      await element.sendKeys(sendValue);
      log.info(`Entered value into ${locatorName}`);
    } else {
      log.error(`${locatorName} not found`);
    }
  }

  async getClick(locator, locatorType, locatorName) {
    let element = await this.getElementLocator(locator, locatorType);
    if (element.isEnabled()) {
      await element.click();
      log.info(`Clicked ${locatorName}`);
    } else {
      log.error(`${locatorName} is disabled`);
    }
  }

  async getQuitBrowser() {
    await driver.quit();
    log.info("Browser Closed");
  }
}

module.exports = new Common();
```

</TabItem>

<TabItem value="startup" label="startup.js">

```js
const common = require("./common");

before(async () => {
  await common.getMaximizeWindow();
  await common.getDeleteAllCookies();
  await common.getURL();
  await common.setImplicitWait();
});

after(async () => {
  await common.getQuitBrowser();
});
```

</TabItem>
</Tabs>

---

### Pages

Next, let's extend the `utils` capabilities to design our page objects.

The pages in scope are Login & Logout features. So, create two files, `loginPage.js` & `logoutPage.js` under `pages` directory.

<Tabs>

<TabItem value="loginPage" label="loginPage.js">

```js
const common = require("../utils/common");
const config = require("config");

const username = config.get("username");
const password = config.get("password");

const USERNAME = "username";
const PASSWORD = "password";
const LOGIN = "//form/button[@type='submit']";

class LoginPage {
  async loginToApp() {
    await common.getSendKeys(USERNAME, "id", "username textbox", username);
    await common.getSendKeys(PASSWORD, "id", "password textbox", password);
    await common.getClick(LOGIN, "xpath", "login button");
  }
}

module.exports = new LoginPage();
```

</TabItem>

<TabItem value="logoutPage" label="logoutPage.js">

```js
const common = require("../utils/common");

const LOGOUT = "//div[@class='example']/a";

class LogoutPage {
  async logoutFromApp() {
    await common.getClick(LOGOUT, "xpath", "logout button");
  }
}

module.exports = new LogoutPage();
```

</TabItem>
</Tabs>

---

### Specs

Finally, it is time to write test cases using the page object logic.

We will create two test cases, `loginSpec.js` & `logoutSpec.js` under `specs` directory.

<Tabs>

<TabItem value="loginSpec" label="loginSpec.js">

```js
const common = require("../utils/common");
const loginPage = require("../pages/loginPage");
require("../utils/startup");

describe("title test", function () {
  it("verify the title on login page", async function () {
    await common.getWindowTitle("The Internet");
  });
});

describe("login Test", function () {
  it("verify user is logged in successfully!", async function () {
    await loginPage.loginToApp();
  });
});
```

</TabItem>

<TabItem value="logoutSpec" label="logoutSpect.js">

```js
const logoutpage = require("../pages/logoutPage");
require("../utils/startup");

describe("logout test", function () {
  it("verify user is logged out successfully!", async function () {
    await logoutpage.logoutFromApp();
  });
});
```

</TabItem>
</Tabs>

---

### Config

Create a file `default.json` under the `config` directory.

:::note
A sample login page is used in this framework, for more details refer [here](https://github.com/saucelabs/the-internet).
:::

```json
{
  "url": "https://the-internet.herokuapp.com/login",
  "username": "tomsmith",
  "password": "SuperSecretPassword!",
  "browser": "chrome",
  "protocol": "http",
  "host": "localhost",
  "port": 4444
}
```

---

### Additional Configs

Next, we are using `mocha` as the test framework, add a `conf.js` file at the project root.

:::info
This framework supports parallel execution, it is set to false as the test cases are limited.
:::

```json
module.exports = {
  timeouts: 60000,
  exit: true,
  bail: true,
  slow: 1000,
  recursive: true,
  parallel: false,

  spec: ["./specs/loginSpec.js", "./specs/logoutSpec.js"],

  reporter: "mochawesome",
  require: "mochawesome/register",
  reporterOption: [
    "reportDir=reports",
    "reportTitle=Automation Report",
    "reportFilename=report",
  ],
};
```

It's time for execution, but before that, we need to handle some prerequisites in the `scripts` section under the `package.json` file.

```json
"scripts": {
    "setup": "selenium-standalone install > ./logs/driver.log &",
    "start": "selenium-standalone start > ./logs/server.log &",
    "test": "mocha --config conf.js"
  },
```

---

## Execute Tests

We need to do ensure all pre-requisites are in place before running the tests.

<Tabs>

<TabItem value="setup" label="Download Browser Drivers">

```bash
npm run setup
```

![npm-run-setup](https://user-images.githubusercontent.com/4848094/189416696-dff14c4b-608e-45ab-bee2-734adec165d4.gif)

</TabItem>

<TabItem value="start" label="Start Selenium Standalone Server">

```bash
npm start
```

![npm-start](https://user-images.githubusercontent.com/4848094/189416764-68277dd1-1142-48da-84d0-3bd418742def.gif)

:::note
The server process will run in the foreground.
:::

</TabItem>

<TabItem value="run" label="Run Tests">

```bash
npm test
```

The above command will:

- open browser

- execute test cases

- generate HTML report

Below is an example of the test execution and results.

#### Console Output

![npm-test](https://user-images.githubusercontent.com/4848094/189416927-8dbafdde-3698-445b-aae9-7cda3e7af06b.gif)

#### Test Execution in Progress

![npm-test-running](https://user-images.githubusercontent.com/4848094/189417641-1ea9698c-fdd7-419a-9d22-c2f840c3c6e9.gif)

#### HTML Report

![report](https://user-images.githubusercontent.com/4848094/189417711-ed52fdc8-2b23-4236-b5a5-fdb9ca034d4c.jpg)

</TabItem>
</Tabs>

---

As a best practice, we should persist all logs for reference. So, we will write it to multiple files under the logs directory.

<img src={require('@site/static/img/javascript/logs-folder.avif').default} alt="logs-folder" />

---

## Conclusion

The selenium-standalone server runs in the foreground and holds the `TTY` till it's terminated manually.

There are several solutions, one of them being `PM2` to run the process in the background, which we will discuss in [Part 2](/blog/pm2).

The source code is available at [GitHub](https://github.com/harryvn/automation-framework).

If you find this article useful or have any suggestions, reach out to me on [LinkedIn](https://www.linkedin.com/in/harryvn/).

Thank you and keep learning!

---
