import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_POKEMON:
            // debugger
            const items = action.payload.items
            return Object.assign({}, state, items)
        default:
            return state;
    }
}