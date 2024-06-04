# Hostinger Test Automation Framework

This is a Test Automation Framework (TAF) for testing the Hostinger.com website using WebdriverIO (WDIO). The framework is set up with Mocha as the test framework, Allure for reporting, and Faker.js for generating test data.

**Note**: The code contains comments about potential improvements or explanation for missing some parts. These comments are providing context for future enhancements and guides through understanding and maintaining the codebase.

## Prerequisites

- Node.js (>= 21.x)

## Installation

Clone repository and install dependencies:

```sh
git clone https://github.com/nostasiya/taf_hostinger.git
```

```sh
npm install
```

## Usage

#### Running Tests

1. To execute the tests, run:

```sh
npm run wdio
```

2. You can specify a particular test to run:

```sh
npm run wdio --test=test/{specName}.test.js
```

#### Allure Report :

##### Prerequisites

Before generating Allure reports, ensure you have Java and the Allure Commandline tool installed. For more details, refer to the Allure Commandline documentation: https://www.npmjs.com/package/allure-commandline.

1. After running the tests, you can generate the Allure report by running:

```sh
npm run generate-report
```

2. To open the Allure report:

Navigate to the directory containing the generated Allure report:

```sh
cd .wdio/allure-report
```

3. To open the report in a web browser:

Locate the index.html file in the allure-report directory and open it in your web browser. You can do this by double-clicking the index.html file or by using the command line to open it.

On macOS and Linux:

```sh
open index.html
```

On Windows:

```sh
start index.html
```

#### Husky and Lint-Staged

This project uses Husky and Lint-Staged to enforce pre-commit hooks for code quality. Husky is set up to run ESLint and Prettier on staged files before each commit.

To install Husky, run:

```sh
npm run prepare
```

### Project Configuration

#### WebdriverIO Configuration

The WebdriverIO configuration is located in wdio.conf.ts. This file contains the setup for test specifications, reporters, and other configurations needed for the framework.

#### Code Quality Tools

This project uses the following tools for static code analysis and formatting:

_ESLint_: Ensures code quality and enforces coding standards by identifying problematic patterns in JavaScript/TypeScript code.
_Prettier_: An opinionated code formatter that enforces consistent code style across the entire codebase.

To lint and format your code, you can use the following scripts:

##### To run Eslint checks:

```sh
npm run eslint
```

##### To run Prettier checks:

```sh
npm run prettier
```

## Documentation

[WebDriverIO](https://webdriver.io/docs/api/)
[Eslint](https://eslint.org/)
[Prettier](https://prettier.io/)
[Allure Report](https://allurereport.org/)

### Dependencies

**@eslint/js**: ESLint's JavaScript configuration.

**@faker-js/faker**: Library for generating fake data.

**@types/eslint\_\_js**: TypeScript definitions for ESLint's JavaScript configuration.

**@wdio/allure-reporter**: Allure reporter for WebdriverIO.

**@wdio/cli**: Command-line interface for WebdriverIO.

**@wdio/local-runner**: Local runner for WebdriverIO.

**@wdio/mocha-framework**: Mocha framework adapter for WebdriverIO.

**@wdio/spec-reporter**: Spec reporter for WebdriverIO.

**eslint**: A linter for identifying and reporting on patterns in JavaScript/TypeScript code.

**globals**: Global variables for ESLint.

**husky**: Git hooks manager.

**lint-staged**: Run linters on git staged files.

**prettier**: A code formatter that enforces a consistent style.

**ts-node**: TypeScript execution environment and REPL for Node.js.

**typescript**: TypeScript language support.

**typescript-eslint**: TypeScript parser and plugin for ESLint.
