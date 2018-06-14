import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer } from './App.styles';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
          <Redirect from="/" to="/catalog" />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;