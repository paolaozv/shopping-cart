import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer } from './App.styles';
import Catalog from '../Catalog/Catalog';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Redirect from="/" to="/catalog" />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;