import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, secondMiddleware, thirdMiddleware));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

const addLoggingToDispatch = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  console.log(`Next: ${next}`)
  next(action);
  console.log(store.getState());
}

const secondMiddleware = (store) => (next) => (action) =>{
  console.log("You're gettin hacked bish")
  console.log(`Next: ${next}`)
  next(action);
  // console.log(store.getState())
}

const thirdMiddleware = (store) => (next) => (action) => {
  console.log("third midware")
  next(action);
 
}

export default configureStore;
