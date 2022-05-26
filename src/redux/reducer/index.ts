import { weatherReducer } from './weatherReducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({ weather: weatherReducer });

type RootReducer = typeof rootReducer;
export type AppStateTypes = ReturnType<RootReducer>;
