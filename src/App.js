import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Auth from './pages/auth/auth.component.jsx';
import { firebaseAuth } from './firebase/firebase.utils';
import { render } from '@testing-library/react';
import { canConstructResponseFromBodyStream } from 'workbox-core/_private';

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      constructor: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/shop' component={ ShopPage }/>
          <Route exact path='/auth' component={ Auth }/>
        </Switch>
      </div>
    );
  }
}

export default App;
