import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon, receivePokemon } from '../../actions/pokemon_actions'
import { selectPokeItems } from '../../reducers/selectors'

window.requestSinglePokemon = requestSinglePokemon;


const mapStateToProps = (state, ownProps) => {
    const pokeId = ownProps.match.params.pokemonId;
    const pokemon = state.entities.pokemon[pokeId]
    console.log("last debugger");
    // debugger
    return ({
        pokemon: pokemon,
        items: selectPokeItems(state, pokemon)
    })
}



const mapDispatchToProps = (dispatch) => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)