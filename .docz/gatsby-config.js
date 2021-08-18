const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Mini Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Mini Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/ngto/pantrysbest/frontEnd/mini-ui',
          templates:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz',
          cache: '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/.cache',
          app: '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/app',
          appPackageJson:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/package.json',
          appTsConfig: '/Users/ngto/pantrysbest/frontEnd/mini-ui/tsconfig.json',
          gatsbyConfig:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/gatsby-browser.js',
          gatsbyNode: '/Users/ngto/pantrysbest/frontEnd/mini-ui/gatsby-node.js',
          gatsbySSR: '/Users/ngto/pantrysbest/frontEnd/mini-ui/gatsby-ssr.js',
          importsJs:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/app/imports.js',
          rootJs: '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/app/root.jsx',
          indexJs:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/app/index.html',
          db: '/Users/ngto/pantrysbest/frontEnd/mini-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
