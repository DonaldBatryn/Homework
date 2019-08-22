import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

const addLoggingToDispatch = store => next => action => {
  // your code here
  console.log(store.getState());
  console.log(action);
  console.log(next);
  next(action);
  console.log(store.getState());
};

// const secondMiddleware = store => next => action => {
//   console.log("I'm stealing your credit card infos sucka!!!!");
// }

// const myApplyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// }




export default configureStore;
