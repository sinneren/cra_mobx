import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from "@reach/router";

import Index from '../../pages/index';
import NotFound from '../../pages/nf';

import auth from '../../store/auth';

import './index.css';

const stores = { auth };

const App = () => (
    <Provider {...stores}>
      <Router>
        <Index path="/" />
        <NotFound path="*" />
      </Router>
    </Provider>
)

export default App;
