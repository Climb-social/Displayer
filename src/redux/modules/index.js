import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import layout from './layout'
import collection from './collection'

export default combineReducers({
  counter,
  layout,
  collection,
  router: routeReducer
})
