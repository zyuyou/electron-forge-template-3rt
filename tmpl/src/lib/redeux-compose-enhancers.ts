import { compose } from 'redux'
import actionCreators from '../actions'

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionCreators}) : compose
