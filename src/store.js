import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import headerReducer from './header/header.reducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
	menu: headerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combinedReducers,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
