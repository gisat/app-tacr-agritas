const path = require('path');
const React = require('react');
import { createReactAppExpress } from '@cra-express/core';
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../src/store.js";

let App = require('../src/App').default;
const clientBuildPath = path.resolve(__dirname, '../client');
const { store, history } = createStore();

function handleUniversalRender(req, res) {
  const context = {};
  // Create a store and get back itself and its history object

  const initialState = {};
  // const store = configureStore(initialState);
  const appEl = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  return appEl;
}

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender,
  onFinish(req, res, html) {
    const state = store.getState();
    const finalHtml = html.replace('{{SCRIPT}}', `<script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
    </script>`);
    res.send(finalHtml);
  }
});



if (module.hot) {
  module.hot.accept('../src/App', () => {
    App = require('../src/App').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
