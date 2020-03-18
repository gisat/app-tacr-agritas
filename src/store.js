import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
import createRootReducer from "./state/Store";
import preloadedState from "./initialState";
import utils from './utils';

export default (url = "/") => {
  // Create a history depending on the environment
  const history = utils.isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  if (!utils.isServer) {
    console.log("!!!! CLIENT");
  }

  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === "development" && !utils.isServer) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  let initialState = !utils.isServer ? window.__PRELOADED_STATE__ : {};

  if (!utils.isServer) {
    initialState = {
      ...initialState,
      ...preloadedState
    };
  }

  // Delete it once we have it stored in a variable
  if (!utils.isServer) {
    delete window.__PRELOADED_STATE__;
  }

  // Create the store
  const store = createStore(
    // connectRouter(history)(rootReducer),
    createRootReducer()(history),
    initialState,
    composedEnhancers
  );

  return {
    store,
    history
  };
};
