import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import layout from './layout'

export default combineReducers({
  counter,
  layout,
  router: routeReducer
})
