import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer/index';

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window._store = store;
