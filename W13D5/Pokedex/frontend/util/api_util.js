

export const fetchAllPokemon = () => {
    return (
        $.ajax({
            method: 'GET',
            url: "api/pokemon",
            success: ()=>{console.log("fetched all pokemons");},
            error: () => {console.log(`current url ${window.location.pathname}`);}
        })
    )
}

