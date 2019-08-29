import React from 'react';
import { Route, Link } from "react-router-dom";
import PokemonDetailContainer from './pokemon_detail_container';

export class PokemonIndexItem extends React.Component {
    render(){
        const pokemonId = this.props.pokemon.id
        return (
            <li key={`/pokemon/${pokemonId}`}>
                <Link to={`/pokemon/${pokemonId}`} >
                    <img src={this.props.pokemon.image_url} className="poke-img" />
                    <br></br>
                    <h3>{this.props.pokemon.name}</h3>
                </Link>

            </li>
        )
    }
}