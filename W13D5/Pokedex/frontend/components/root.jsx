import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { HashRouter, Route, Switch } from "react-router-dom";

const Root = ({ store }) => (
    <Provider store={store}>
        <h1>Hello Pokefreak</h1>
        <HashRouter>
            <Switch>
                <Route path="/" component={PokemonIndexContainer} />

            </Switch>
        </HashRouter>
    </Provider>
);
export default Root;
