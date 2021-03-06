import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from "@reach/router";

import Index from '../../pages/index';
import NotFound from '../../pages/nf';
import SignUpPage from '../../pages/signup';
import SignInPage from '../../pages/signin';

import store from '../../store';
import './index.css';


const App = (props) => {
    const { firebase } = props;
    return (
      <Provider {...store}>
        <Router>
          <Index path="/" />
          <SignUpPage path="/signup" {...firebase} />
          <SignInPage path="/signin" {...firebase} />
          <NotFound path="*" />
        </Router>
      </Provider>
    )
}

export default App;
