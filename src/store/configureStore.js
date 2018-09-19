import {createStore, combineReducers, applyMiddleware} from 'redux';
import apiClientReducer from "../reducers/clients";
import filtersReducer from "../reducers/fliters";
import thunk from 'redux-thunk';
 
export default () => {
  const store = createStore(
    combineReducers({
      clients: apiClientReducer,
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};

