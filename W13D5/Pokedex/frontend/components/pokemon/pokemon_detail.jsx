import React from 'react'

export default class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let pokeId = this.props.match.params.pokemonId
        this.props.requestSinglePokemon(pokeId)
    }

    render() {
        debugger;
        //id = ownProps.match.params.pokemonId
        //pokemon = state.entities.pokemon[id]
        
        let pokeMoves = this.props.pokemon.moves.map(move => {
            return <li>{move}</li>
        })
        return (
            <div>
                <h3>name: {this.props.pokemon.name}</h3>
                <h3>image: {this.props.pokemon.image_url}</h3>
                <h3>attack: {this.props.pokemon.attack}</h3>
                <h3>defence: {this.props.pokemon.defense}</h3>
                <h3>type: {this.props.pokemon.poke_type}</h3>
                <h3>moves: <ul> 
                                {pokeMoves}
                            </ul>
                </h3>
              
            </div>
        )
    }
}

// details:
// name: 'Ivysaur',
// image_url: '/assets/pokemon_snaps/112.png',
// attack: 62,
// defense: 63,
// poke_type: 'grass',
// moves: [
//      'tackle',
//      'vine whip',
//      'razor leaf'
// ],
// item_ids: [3, 4, 5],

