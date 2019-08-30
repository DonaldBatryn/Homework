import { connect } from 'react-redux';
import Search from './search';
import { updateBounds } from '../../actions/filter_actions'


const msp = state => {
    return ({
        benches: Object.keys(state.entities.benches).map(id => state.entities.benches[id])
    })
}

const mdp = dispatch => {
    return ({
        fetchBenches: (filters) => dispatch(fetchBenches(filters)),
        updateBounds: (bounds) => dispatch(updateBounds(bounds))
    })
}

export default connect(msp, mdp)(Search);