export const selectAllPokemon = (state) => {
    return Array.from(Object.values(state.entities.pokemon));
}

export const selectPokemonItem = (state, itemId) => {
    // debugger;
    return Object.values(state.entities.items)[itemId - 1];
}

export const selectPokeItems = (state, poke) => {
    return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};