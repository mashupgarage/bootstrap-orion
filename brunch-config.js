// See http://brunch.io/#documentation for docs.
exports.config = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    assets: /^src\/assets\//
  },

  paths: {
    watched: ["example"],
    public: "public" // Where to compile files to
  },

  plugins: {
    sass: {
      options: {
        includePaths: [
          'node_modules'
        ]
      }
    },
    postcss: {
      processors: [
        require('autoprefixer')()
      ]
    },
    jaded: {
      staticPatterns:
        /^example(\/|\\)html(\/|\\)(.+)\.jade$/
    }
  },

  npm: {
    enabled: true
  }
}
