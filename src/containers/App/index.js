import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from "@reach/router";

import Index from '../../pages/index';
import NotFound from '../../pages/nf';
import SignUpPage from '../../pages/signup';

import authState from '../../store/authState';

import './index.css';

const stores = { authState };

const App = (props) => {
    const { firebase } = props;
    return (
      <Provider {...stores}>
        <Router>
          <Index path="/" />
          <SignUpPage path="/signup" {...firebase} />
          <NotFound path="*" />
        </Router>
      </Provider>
    )
}

export default App;
