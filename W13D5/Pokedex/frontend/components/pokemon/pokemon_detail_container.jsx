import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon, receivePokemon } from '../../actions/pokemon_actions'




const mapStateToProps = (state, ownProps) => {
    const pokeId = ownProps.match.params.pokemonId;
    debugger
    return ({
        pokemon: state.entities.pokemon[pokeId],
        
    })
}

const mapDispatchToProps = (dispatch) => ({
    receivePokemon: (poke) => dispatch(requestSinglePokemon(poke.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)