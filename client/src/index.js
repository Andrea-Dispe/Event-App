import React from 'react';
import ReactDOM from 'react-dom';
// Redux
// Provider is going to keep track of the store (a sort of global state)
// and allows us to access it from anywhere in the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <App /> , document.getElementById('root')
);