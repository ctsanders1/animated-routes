import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home'
import HelloPage from './pages/HelloPage'
import GoodBye from './pages/GoodBye'
import SlideUp from './pages/SlideUp'
import PageShell from './components/PageShell'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/hello">Hello</Link>{' '}  
          <Link to="/slideup">SlideUp</Link>{' '}  
          <Link to="/goodbye">Goodbye</Link>  
        </div>
        <Route path="/" exact component={PageShell(Home)}></Route>
        <Route path="/hello" exact component={PageShell(HelloPage)}></Route>
        <Route path="/slideup" exact component={PageShell(SlideUp)}></Route>
        <Route path="/goodbye" exact component={PageShell(GoodBye)}></Route>
      </div>
    );
  }
}

export default App;
