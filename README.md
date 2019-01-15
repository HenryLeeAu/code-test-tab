A code test for Tab

### `yarn install`

Install this project

### `yarn start`

Runs this project in the development mode.<br>
Please open [http://localhost:3000](http://localhost:3000) with latest version of Chrome, Firefox or Edge.

### Proxy API

In this project I am using http-proxy-middleware to mock the url of api in the developing enviourment. when we setup the node server to serve static files, we can do something like below.

```sh
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com')
);
```
