const htmlStandards = require('reshape-standard')
const SpikeDatoCMS = require('spike-datocms')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const marked = require('marked')
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.html',
    css: '*(**/)*.sss'
  },
  vendor: 'assets/vendor/**',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { return Object.assign(locals, { pageId: pageId(ctx) }, { marked: marked })},
    parser: false
   }),
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
