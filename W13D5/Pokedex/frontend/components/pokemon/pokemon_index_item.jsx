import React from 'react';
import { Link } from "react-router-dom";

export class PokemonIndexItem extends React.Component {
    render(){
        const pokemonId = this.props.pokemon.id
        return (
            <li>
                <Link to={`/pokemon/${pokemonId}`} >
                    <img src={this.props.pokemon.image_url} className="poke-img" />
                    <br></br>
                    <h3>{this.props.pokemon.name}</h3>
                </Link>

                {/* <Route Component={new_page_here}/>> */}
            </li>
        )
    }
}