import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import rootReducer from './rootReducer';

const reducer = combineReducers({
  // here we will be adding reducers
  rootReducer
})
const store = configureStore({
  reducer,
})
export default store;