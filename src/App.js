import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectSheet from 'react-jss';

import Register from './pages/Register';
import Update from './pages/Update';
import Admin from './pages/Admin';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/register" exact={true} component={Register} />
            <Route path="/update/:id" exact={true} component={Update} />
            <Route path="/admin" exact={true} component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;