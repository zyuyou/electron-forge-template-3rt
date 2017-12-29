import * as React from 'react'
import { Home } from './menus/home'
import { Topics } from './menus/topics'
import { About } from './menus/about'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

export class Menu extends React.Component<{}, {}> {
  public render () {
    return (
      <section>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/topics' component={Topics}/>
      </section>
    )
  }
}
