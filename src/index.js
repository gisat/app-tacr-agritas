import React from "react";
import { hydrate } from 'react-dom';
// import { Provider } from "react-redux";
import {Provider, BrowserRouter, ReactReduxContext} from '@gisatcz/ptr-state';
// import {BrowserRouter} from "react-router-dom";

import createStore from "./store";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import utils from './utils';

// Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__




// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const {store, history} = createStore(preloadedState);

const data = window.__INITIAL_DATA__;



// Create a store and get back itself and its history object
// const history = createHistory({basename: process.env.PUBLIC_URL});
// const { store, history } = createStore();
const Application = () => (
    <Provider store={store} context={ReactReduxContext}>
      <BrowserRouter>
        <App context={ReactReduxContext} history={history}/>
      </BrowserRouter>
	</Provider>
);

// if(utils.isServer) {
//   ReactDOM.hydrate(<Application />, document.getElementById('root'));
// } else {
//   ReactDOM.render(<Application />, document.getElementById('root'));
// }

hydrate(
	<Application />,
	document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
