import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Firebase from './components/Firebase';
import * as serviceWorker from './serviceWorker';
// Initialize Firebase
ReactDOM.render(<App firebase={new Firebase()}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
