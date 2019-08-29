import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';


export const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, action.pokemon);

        case RECEIVE_POKEMON:
            // debugger
            return Object.assign({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});
            
        default:
            return state;
    }
}

