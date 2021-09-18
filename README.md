# eslint-plugin-awesome-lint

自定义一些 eslint 规则

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-awesome-lint`:

```sh
npm install eslint-plugin-awesome-lint --save-dev
```

## Usage

Add `awesome-lint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["awesome-lint"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "awesome-lint/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
