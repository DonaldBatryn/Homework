import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // feel even worse
  // store.dispatch = addLoggingToDispatch(store);

  // store = applyMiddlewares(store, addLoggingToDispatch);

  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = (store) => {
  // const store.dispatch(rootReducer);
  // let dispatchX = store.dispatch;

  // this is bad code and you should feel bad
  // return (action) => {
  //   console.log(store.getState());
  //   console.log(action);
  //   dispatchX(action);
  //   console.log(store.getState());
  // }




