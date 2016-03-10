import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout'
import SelectorView from 'views/SelectorView'
import AboutView from 'views/AboutView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={SelectorView} />
    <Route path='/about' component={AboutView} />
  </Route>
)
