import * as React from 'react'
import { CounterContainer } from '../containers/counter'
import { Menu } from './menu'
import { ConnectedRouter, ConnectedRouterProps } from 'react-router-redux'

export class App<State> extends React.Component<ConnectedRouterProps<State>, {}> {
  render () {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>

        <hr/>

        <CounterContainer />

        <hr/>

        <ConnectedRouter history={this.props.history}>
          <Menu />
        </ConnectedRouter>
      </div>
    )
  }
}
