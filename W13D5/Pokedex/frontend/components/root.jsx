import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndex from './pokemon/pokemon_index'

const Root = ({ store }) => (
    <Provider store={store}>
        <h1>Hello Pokefreak</h1>
        <PokemonIndex store={store} />
    </Provider>
);
export default Root;
