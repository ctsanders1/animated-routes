import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home'
import Hello from './pages/Hello'
import GoodBye from './pages/GoodBye'
import HelloAgain from './pages/HelloAgain'
import PageShell from './components/PageShell'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <Link to="/">Home</Link>{' '}
          <Link to="/hello">Hello</Link>{' '}  
          <Link to="/helloagain">HelloAgain</Link>{' '}  
          <Link to="/goodbye">Goodbye</Link>  
        </div>
        <Route path="/" exact component={PageShell(Home)}></Route>
        <Route path="/hello" exact component={PageShell(Hello)}></Route>
        <Route path="/helloagain" exact component={PageShell(HelloAgain)}></Route>
        <Route path="/goodbye" exact component={PageShell(GoodBye)}></Route>
      </div>
    );
  }
}

export default App;
