import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import * as reducers from './reducers/reducer'
import { composeEnhancers } from './lib/redeux-compose-enhancers'

export const history: any = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(middleware)
  )
)

let render = () => {
  // store.replaceReducer(combineReducers({...require('./reducers/reducer'), routerReducer}))

  const {App} = require('./compoments/app')

  ReactDOM.render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    document.getElementById('AppRoot')
  )
}

render()

if (module.hot) {
  module.hot.accept(render)
}
