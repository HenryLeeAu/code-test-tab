const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://api.beta.tab.com.au/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
