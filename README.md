A code test for Tab.

### `yarn install`

Install this project

### `yarn start`

Runs this project in the development mode.<br>
Please open [http://localhost:3000](http://localhost:3000) with latest version of Chrome, Firefox or Edge.

### `yarn build`
Generate files for the production environment. I have built up the necessary files in the /build folder.

### Proxy API
In this project I am using http-proxy-middleware to proxy the origonal source. 

In my setupProxy.js file
```sh
app.use(
    proxy('/api', {
      target: 'https://api.beta.tab.com.au/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
```

When we setup the express server to serve our static files, we can do something like this example.
The app will proxy the origional api when match the path '/api'.

In my server.js file
```sh
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

```
Please run node server.js and you can open url http://localhost:3001/api/v1/tab-info-service/racing/next-to-go/races?jurisdiction=NSW to see the data.


### Note
1. This app didn't handle any error status.
2. Use redux hanlde the status.
3. In order to caculate time-to-go, my solution is to pass current time into each racing item. It can trigger componentDidUpdate in RacingListItem component and update the time difference.



