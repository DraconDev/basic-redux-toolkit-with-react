import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import rootReducer from './rootReducer';
import counter from './counter';

const reducer = combineReducers({
  // here we will be adding reducers
  rootReducer,
  counter
})
const store = configureStore({
  reducer,
})
export default store;