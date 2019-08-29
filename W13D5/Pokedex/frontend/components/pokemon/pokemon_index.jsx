import React from 'react'
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Switch} from 'react-router-dom';

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
        this.props.requestAllPokemon()
        
    }
    
    render() {
        const pokeLis = this.props.pokemon.map(el => {
            return(
                <PokemonIndexItem key={el.id} pokemon={el} />   
            )
        });
        
        return (
            <section className="pokedex">
                <Switch>
                    <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                    <ul>{pokeLis}</ul>
                </Switch>
            </section>
        )
    }
}
