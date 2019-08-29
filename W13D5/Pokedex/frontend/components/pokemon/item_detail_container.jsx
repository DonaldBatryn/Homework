import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors'

const msp = (state, ownProps) => {
    let itemId = ownProps.match.params.itemId
    
    return {
        item: selectPokemonItem(state, itemId)    
    }
}

const mdp = (dispatch) => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})


export default connect(msp, mdp)(ItemDetail)