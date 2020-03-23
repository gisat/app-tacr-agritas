// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { reduxBatch } from '@manaflair/redux-batch';
// import { createStore, combineReducers, applyMiddleware, compose, thunk, logger, reduxBatch } from '@gisatcz/ptr-state';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import {connectRouter} from '@gisatcz/ptr-state';
// import { createBrowserHistory } from 'history';

// base types
import {connectRouter,appReducers,casesReducers,periodsReducers,placesReducers,scopesReducers,usersReducers,createStore, combineReducers, applyMiddleware, compose, thunk, logger, reduxBatch} from '@gisatcz/ptr-state';
import tacrAgritasData from "../state/Data/reducers";


// Redux store
export default () => {
	let middleware = applyMiddleware(thunk);
	if (process.env.NODE_ENV === "development") {
	  middleware = applyMiddleware(thunk, logger);
	}
  
	return history =>
	  combineReducers({
		router: connectRouter(history),
		specific: combineReducers({
			tacrAgritasData: tacrAgritasData,
		}),
		app: appReducers,
		cases: casesReducers,
		periods: periodsReducers,
		places: placesReducers,
		scopes: scopesReducers,
		users: usersReducers
	  });
  };
  