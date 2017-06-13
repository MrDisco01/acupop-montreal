const env = require('babel-preset-env')
const dynamicImport = require('babel-plugin-syntax-dynamic-import')

module.exports = (opts = {}) => {
  const res = {
    presets: [[env, { modules: false }]],
    plugins: [dynamicImport]
  }

  if (opts.prependPresets) { res.presets.unshift(...Array.prototype.concat(opts.prependPresets)) }
  if (opts.appendPresets) { res.presets.unshift(...Array.prototype.concat(opts.appendPresets)) }

  if (opts.prependPlugins) { res.plugins.unshift(...Array.prototype.concat(opts.prependPlugins)) }
  if (opts.appendPlugins) { res.plugins.unshift(...Array.prototype.concat(opts.appendPlugins)) }

  return res
}
