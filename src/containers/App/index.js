import React from 'react';
import { Provider } from 'mobx-react';

import './index.css';
import Index from '../../pages/index';
import auth from '../../store/auth';

const stores = { auth };

const App = () => (
    <Provider {...stores}>
      <Index />
    </Provider>
)

export default App;
