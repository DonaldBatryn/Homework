import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root'


// function Root(){
//     return (
//         <h1>We all live in a pokemon world.</h1>
//     )
// }

window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    
});
