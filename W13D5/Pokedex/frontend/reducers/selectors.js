export const selectAllPokemon = (state) => {
    return Array.from(Object.values(state.entities.pokemon));
}