import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

const store = configureStore();

window.store = store; // REMOVE ME LATER



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("content");
    ReactDOM.render(<Root store={store} />, root)
})