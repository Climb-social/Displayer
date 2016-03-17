import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import { setCollection } from './redux/modules/collection'
import { parse } from 'url'
import { parse as parseQs } from 'querystring'

const history = createBrowserHistory()
const store = configureStore(window.__INITIAL_STATE__)

syncReduxAndRouter(history, store, (state) => state.router)

const qs = parseQs(parse(store.getState().router.path).query)
const { collection_id } = qs
if (collection_id) {
  store.dispatch(setCollection(collection_id))
}

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
