const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150'
const pokemon = [];
fetch(pokemonAPI)
  .then(response => response.json())
  .then(data => pokemon.push(...data.results));



function findMatches(word, pokeArr){
  return pokeArr.filter(pikachu => {
    let regularEx = new RegExp(word, 'gi');
    return pikachu.name.match(regularEx);
  });
};


const displayMatches = function(){
    let matchArray = findMatches(this.value, pokemon);
    // let li = document.createElement("li")
    
    const html = matchArray.map(el => {
        return `
        <li>
          <span class="name">${el.name}</span>
        </li>
        `;
        }).join("");
        suggestions.innerHTML = html;
        
}
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener('keyup', displayMatches);