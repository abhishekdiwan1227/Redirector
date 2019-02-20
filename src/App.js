import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginBox from './components/LoginBox';
import RegisterUser from './components/RegisterUser';
import Searcher from './components/Searcher';
import RoutingHistory from './components/RoutingHistory';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='jumbotron page-header'>Redirector</h2>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={LoginBox} />
            <Route path='/register' component={RegisterUser} />
            <Route path='/history' component={RoutingHistory} />
            <Route path='/' component={Searcher} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
