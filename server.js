var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express();
app.use(
  proxy('/api', {
    target: 'https://api.beta.tab.com.au/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  })
);
app.listen(3001)
