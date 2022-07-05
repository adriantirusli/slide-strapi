const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/adriantir/work/slide-web-accessibility/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/adriantir/work/slide-web-accessibility/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/adriantir/work/slide-web-accessibility/src/pages/index.js"))),
  "component---src-templates-slide-js": hot(preferDefault(require("/Users/adriantir/work/slide-web-accessibility/src/templates/slide.js")))
}

