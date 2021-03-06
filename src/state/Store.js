import { createStore, combineReducers, applyMiddleware, compose, thunk, logger, reduxBatch } from '@gisatcz/ptr-state';
import { connectRouter, routerMiddleware } from '@gisatcz/ptr-state';
import { createBrowserHistory } from 'history';
import { wrapHistory } from "oaf-react-router";

// base types
import {appReducers,casesReducers,periodsReducers,placesReducers,scopesReducers,usersReducers} from '@gisatcz/ptr-state';
import tacrAgritasData from "../state/Data/reducers";

export const createHistory = (options) => {
	let history = createBrowserHistory(options);
	const settings = {
		primaryFocusTarget: "body",
		smoothScroll: true
	};
	wrapHistory(history, settings); //todo review behaviour
	return history;
};

// Redux store creator
export default history => {

	let middleware = applyMiddleware(thunk, routerMiddleware(history));
	if (process.env.NODE_ENV === 'development') {
		middleware = applyMiddleware(thunk, logger, routerMiddleware(history));
	}
	return createStore(combineReducers({
		specific: combineReducers({
			tacrAgritasData: tacrAgritasData,
		}),
		app: appReducers,
		cases: casesReducers,
		periods: periodsReducers,
		places: placesReducers,
		router: connectRouter(history),
		scopes: scopesReducers,
		users: usersReducers
	}), compose(reduxBatch, middleware, reduxBatch, applyMiddleware(thunk), reduxBatch));
}