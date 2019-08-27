import React from 'react'
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pokemon: []}
    }

    componentDidMount(){
        // debugger
        this.props.requestAllPokemon()
        this.setState({pokemon: this.props.pokemon })
    }
    
    render() {
        const pokeLis = this.props.pokemon.map(el => {
            return(
                <div>
                    <PokemonIndexItem key={el.id} pokemon={el} />
                    <Route path={`/pokemon/${el.id}`} component={PokemonDetailContainer}/>
                    
                </div>
            )
        })
        let pokeId = this.props.match.params.pokemonId
        
        debugger;
        return (
            <section className="pokedex">
                <ul>{pokeLis}</ul>
            </section>
        )
    }
}
