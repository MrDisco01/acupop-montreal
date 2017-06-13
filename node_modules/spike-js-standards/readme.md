# Spike JS Standards

This is a super simple wrapper for a basic webpack2 babel configuration. It's `babel-preset-env` without es module parsing (webpack does this), and a plugin for supporting `import()` which is a ecma standard, and webpack uses for dynamic code splitting.

### Installation

`yarn add spike-js-standards`

### Usage

```js
const jsStandards = require('spike-js-standards')

// wherever you have your babel config, this is how spike's looks
module.exports = {
  // ...
  babel: jsStandards()
  // ...
}
```

### Options

| Name | Description | Default |
| ---- | ----------- | ------- |
| **appendPlugins** | Adds a single plugin or array of plugins after all the defaults | |
| **prependPlugins** | Adds a single plugin or array of plugins before all the defaults | |
| **appendPresets** | Adds a single preset or array of presets after all the defaults | |
| **prependPresets** | Adds a single preset or array of presets before all the defaults | |

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)
