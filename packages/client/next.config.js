const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
  cssModules: true,
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["node_modules", 'node_modules/@material/*']
    }
  }
}));
