import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware(thunk))

export type Action = {
  type: string,
  payload: any,
};
export const create = (type: string, payload: any = {}): Action => ({ type, payload }); 

export type Store = typeof store;
export default store;
