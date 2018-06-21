import { Route, NavLink } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './pages/Home'
import Hello from './pages/Hello'
import GoodBye from './pages/GoodBye'
import HelloAgain from './pages/HelloAgain'
import FadeIn from './pages/FadeIn'
import PageShell from './components/PageShell'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>{' '}
          <NavLink to="/hello" activeClassName="active">
            Hello
          </NavLink>{' '}
          <NavLink to="/helloagain" activeClassName="active">
            HelloAgain
          </NavLink>{' '}
          <NavLink to="/fadein" activeClassName="active">
            FadeIn
          </NavLink>{' '}
          <NavLink to="/goodbye" activeClassName="active">
            Goodbye
          </NavLink>
        </div>
        <Route path="/" exact component={PageShell(Home)} />
        <Route path="/hello" exact component={PageShell(Hello)} />
        <Route path="/helloagain" exact component={PageShell(HelloAgain)} />
        <Route path="/fadein" exact component={PageShell(FadeIn)} />
        <Route path="/goodbye" exact component={PageShell(GoodBye)} />
      </div>
    )
  }
}

export default App
