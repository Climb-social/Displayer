import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import layout from './layout'
import collection from './collection'

export default combineReducers({
  layout,
  collection,
  router: routeReducer
})
