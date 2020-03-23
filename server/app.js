//based on https://github.com/antonybudianto/cra-universal/blob/master/packages/demo/server/app.js
const path = require('path');
const React = require('react');
import { createReactAppExpress } from '@cra-express/core';
// import { StaticRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import {Provider, StaticRouter} from '@gisatcz/ptr-state';
import createStore from "../src/store.js";

let App = require('../src/App').default;
const clientBuildPath = path.resolve(__dirname, '../client');
let globStore;

function handleUniversalRender(req, res) {
  const context = {};
  serverData = {};
  const initialState = {};
  const { store, history } = createStore(initialState);
  globStore = store;
  // Create a store and get back itself and its history object
  // const store = configureStore(initialState);
  const appEl = (
    <Provider store={globStore}>
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


let tag = '';
// let store;
let AppClass = App;
let serverData;
let helmetCtx;
const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender,
  onFinish(req, res, html) {
    
    // const { helmet } = helmetCtx;
    // const helmetTitle = helmet.title.toString();
    // const helmetMeta = helmet.meta.toString();
    const helmetTitle = 'title';
    const helmetMeta = 'meta';
    const newHtml = html
      .replace('{{HELMET_TITLE}}', helmetTitle)
      .replace('{{HELMET_META}}', helmetMeta);
    console.log("aa", newHtml)
    res.send(newHtml);
    
    
    
    
    //funkcni
    // const state = store.getState();
    // const finalHtml = html.replace('{{SCRIPT}}', `<script>
    //   window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
    // </script>`);
    // res.send(finalHtml);
  },
  onEndReplace(html) {
    const state = globStore.getState();
    console.log("BBBBB");
    console.log(html)
    console.log("AAAAAAA");
    console.log(typeof html)
    return html.replace(
      '{{SCRIPT}}',
      `${tag}<script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(
        /</g,
        '\\u003c'
      )};
      window.__INITIAL_DATA__ = ${JSON.stringify(serverData).replace(
        /</g,
        '\\u003c'
      )};
    </script>`
    );
  }
});



if (module.hot) {
  module.hot.accept('../src/App', () => {
    App = require('../src/App').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
