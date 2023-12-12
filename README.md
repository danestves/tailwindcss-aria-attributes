# Welcome to tailwindcss-aria-attributes 👋

Variants for several [`aria-*` attributes](https://www.w3.org/TR/wai-aria/#state-prop-def) and their supported values for TailwindCSS.

<p>
  <a href="https://www.npmjs.com/package/tailwindcss-aria-attributes" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/tailwindcss-aria-attributes" />
  </a>
  <a href="https://github.com/danestves/tailwindcss-aria-attributes#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/danestves/tailwindcss-aria-attributes/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/danestves/tailwindcss-aria-attributes/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/danestves/tailwindcss-aria-attributes" />
  </a>
  <a href="https://twitter.com/danestves" target="_blank">
    <img alt="Twitter: danestves" src="https://img.shields.io/twitter/follow/danestves.svg?style=social" />
  </a>
</p>

> TailwindCSS aria-\* attribute utilities plugin
>
> This is a fork from [@thoughtbot/tailwindcss-aria-attributes](https://github.com/thoughtbot/tailwindcss-aria-attributes) that is not currently on NPM

## Install

```sh
# Using npm
npm install -D tailwindcss-aria-attributes

# Using yarn
yarn add --dev tailwindcss-aria-attributes

# Using pnpm
pnpm add --D tailwindcss-aria-attributes
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-aria-attributes'),
    // ...
  ],
};
```

## Usage

The versions support two different types of attributes: boolean attributes and enumerated values.

Attributes can be found in both groups in some circumstances.

### Boolean attributes

When the value of a boolean attribute is `"true"` and only `"true"`, the variants for that attribute are active. When an attribute is absent or has the value `"false"`, utility classes will be used as usual.

The following boolean attributes are supported by the variation's collection:

| Attribute                                                                           | Variant                 |
| ----------------------------------------------------------------------------------- | ----------------------- |
| [aria-atomic="true"](https://www.w3.org/TR/wai-aria/#aria-atomic)                   | `aria-atomic:`          |
| [aria-busy="true"](https://www.w3.org/TR/wai-aria/#aria-busy)                       | `aria-busy:`            |
| [aria-checked="true"](https://www.w3.org/TR/wai-aria/#aria-checked)                 | `aria-checked:`         |
| [aria-current="true"](https://www.w3.org/TR/wai-aria/#aria-current)                 | `aria-current:`         |
| [aria-disabled="true"](https://www.w3.org/TR/wai-aria/#aria-disabled)               | `aria-disabled:`        |
| [aria-expanded="true"](https://www.w3.org/TR/wai-aria/#aria-expanded)               | `aria-expanded:`        |
| [aria-grabbed="true"](https://www.w3.org/TR/wai-aria/#aria-grabbed)                 | `aria-grabbed:`         |
| [aria-haspopup="true"](https://www.w3.org/TR/wai-aria/#aria-haspopup)               | `aria-haspopup:`        |
| [aria-hidden="true"](https://www.w3.org/TR/wai-aria/#aria-hidden)                   | `aria-hidden:`          |
| [aria-invalid="true"](https://www.w3.org/TR/wai-aria/#aria-invalid)                 | `aria-invalid:`         |
| [aria-live="true"](https://www.w3.org/TR/wai-aria/#aria-live)                       | `aria-live:`            |
| [aria-modal="true"](https://www.w3.org/TR/wai-aria/#aria-modal)                     | `aria-modal:`           |
| [aria-multiline="true"](https://www.w3.org/TR/wai-aria/#aria-multiline)             | `aria-multiline:`       |
| [aria-multiselectable="true"](https://www.w3.org/TR/wai-aria/#aria-multiselectable) | `aria-multiselectable:` |
| [aria-pressed="true"](https://www.w3.org/TR/wai-aria/#aria-pressed)                 | `aria-pressed:`         |
| [aria-readonly="true"](https://www.w3.org/TR/wai-aria/#aria-readonly)               | `aria-readonly:`        |
| [aria-required="true"](https://www.w3.org/TR/wai-aria/#aria-required)               | `aria-required:`        |
| [aria-selected="true"](https://www.w3.org/TR/wai-aria/#aria-selected)               | `aria-selected:`        |

Prefix the attribute name with `aria-` and leave the value blank to use a boolean variant:

```html
<ul role="listbox">
  <li role="option" class="aria-selected:border">Not selected</li>
  <li role="option" class="aria-selected:border" aria-selected="true">
    Selected
  </li>
</ul>

<button class="aria-disabled:cursor-not-allowed" aria-disabled="true">
  Submit
</button>
```

### Enumerated values

When the value is equivalent to the variant's suffix, the variants for enumerated values are active.

When an attribute is absent or the value does not match the provided suffix, utility classes will be used as usual.

The following properties and value combinations are supported by the variations' collection:

| Attribute                                                              | Variants                      |
| ---------------------------------------------------------------------- | ----------------------------- |
| [aria-autocomplete](https://www.w3.org/TR/wai-aria/#aria-autocomplete) | `aria-autocomplete-both:`     |
|                                                                        | `aria-autocomplete-inline:`   |
|                                                                        | `aria-autocomplete-list:`     |
|                                                                        | `aria-autocomplete-none:`     |
| [aria-current](https://www.w3.org/TR/wai-aria/#aria-current)           | `aria-current-date`           |
|                                                                        | `aria-current-location`       |
|                                                                        | `aria-current-page`           |
|                                                                        | `aria-current-step`           |
|                                                                        | `aria-current-time`           |
| [aria-dropeffect](https://www.w3.org/TR/wai-aria/#aria-dropeffect)     | `aria-dropeffect-copy`        |
|                                                                        | `aria-dropeffect-execute`     |
|                                                                        | `aria-dropeffect-link`        |
|                                                                        | `aria-dropeffect-move`        |
|                                                                        | `aria-dropeffect-none`        |
|                                                                        | `aria-dropeffect-popup`       |
| [aria-haspopup](https://www.w3.org/TR/wai-aria/#aria-dropeffect)       | `aria-haspopup-dialog`        |
|                                                                        | `aria-haspopup-grid`          |
|                                                                        | `aria-haspopup-listbox`       |
|                                                                        | `aria-haspopup-menu`          |
|                                                                        | `aria-haspopup-tree`          |
| [aria-orientation](https://www.w3.org/TR/wai-aria/#aria-dropeffect)    | `aria-orientation-horizontal` |
|                                                                        | `aria-orientation-undefined`  |
|                                                                        | `aria-orientation-vertical`,  |
| [aria-sort](https://www.w3.org/TR/wai-aria/#aria-dropeffect)           | `aria-sort-ascending`         |
|                                                                        | `aria-sort-descending`        |
|                                                                        | `aria-sort-none`              |
|                                                                        | `aria-sort-other`,            |
| [aria-relevant](https://www.w3.org/TR/wai-aria/#aria-dropeffect)       | `aria-relevant-additions`     |
|                                                                        | `aria-relevant-all`           |
|                                                                        | `aria-relevant-removals`      |
|                                                                        | `aria-relevant-text`          |

To use an enumerated value variation, add `aria-` to the attribute name and include the value:

```html
<nav>
  <a class="aria-current-page:font-bold" href="/" aria-current="page">Root</a>
  <a class="aria-current-page:font-bold" href="/about">About us</a>
</nav>
```

## Author

👤 **Daniel Esteves <danestves@gmail.com>**

- Website: https://danestves.com/
- Twitter: [@danestves](https://twitter.com/danestves)
- Github: [@danestves](https://github.com/danestves)
- LinkedIn: [@danestves](https://linkedin.com/in/danestves)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br /> Please don't hesitate to check [issues page](https://github.com/danestves/tailwindcss-aria-attributes/issues). You can also take a look at the [contributing guide](https://github.com/danestves/tailwindcss-aria-attributes/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Daniel Esteves <danestves@gmail.com>](https://github.com/danestves).<br />
This project is [MIT](https://github.com/danestves/tailwindcss-aria-attributes/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
