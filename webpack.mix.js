const mix = require('laravel-mix')
const path = require('path')

/**
 * By default, AdonisJS public path for static assets is on the `./public` directory.
 *
 * If you want to change Laravel Mix public path, change the AdonisJS public path config first!
 * See: https://docs.adonisjs.com/guides/static-assets#the-default-directory
 */
mix.setPublicPath('public')

mix.js('resources/vue/main.js', path.resolve(__dirname, 'public/js')).webpackConfig({
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/vue'),
      '~': path.resolve(__dirname, 'resources/vue'),
      '@sass': path.resolve(__dirname, 'resources/assets/sass'),
    },
  },
}).options({
  processCssUrls: false,
}).vue()