const htmlStandards = require('reshape-standard')
const SpikeDatoCMS = require('spike-datocms')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const marked = require('marked')
const locals = {
  marked: marked,
  pageId: pageId(ctx)
}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ locals, parser: false }),
  plugins: [
      new SpikeDatoCMS({
        addDataTo: locals,
        token: 'aa2fce4bb6617014de7a',
        models: [{
          type: 'home_page'
        }, {
          type: 'service_page'
        }, {
          type: 'locations_page'
        }, {
          type: 'faq'
        }]
      })
    ],
  postcss: cssStandards(),
  babel: jsStandards()
}
