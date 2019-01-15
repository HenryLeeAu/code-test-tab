A code test for Tab.

### `yarn install`

Install this project

### `yarn start`

Runs this project in the development mode.<br>
Please open [http://localhost:3000](http://localhost:3000) with latest version of Chrome, Firefox or Edge.

### `yarn build`
Ｇenerate files for the production environment. I have built up the necessary files in the /build folder.

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
### Note
1. This app didn't handle any error status.
2. Use redux hanlde the status.
3. In order to caculate time-to-go, my solution is to pass current time into each racing item. It can trigger componentDidUpdate in RacingListItem component and update the time difference.



