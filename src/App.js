import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Input from './components/input'
// import Para from './components/para'
import DetailedView from './components/detailedView';
import ListView from './components/listView';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Navbar></Navbar>
          <Switch>
           <Route path="/" component={ListView} exact={true}></Route>
           <Route path="/posts/:id" component={DetailedView}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
