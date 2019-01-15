A code test for Tab.

### `yarn install`

Install this project

### `yarn start`

Runs this project in the development mode.<br>
Please open [http://localhost:3000](http://localhost:3000) with latest version of Chrome, Firefox or Edge.

### `yarn build`
Build files for the production environment.

### Proxy API
In this project I am using http-proxy-middleware to proxy api in the development environment. 
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
The app will proxy the origional api when match the path '/api' .

* It is just a generic example.

```sh
app.use(
  '/api',
  proxy('https://api.beta.tab.com.au/')
);
```

