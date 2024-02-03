const pokemonOl = document.getElementById('pokemon-list');
const pokemonButton = document.getElementById('load-more');
const maxRecords = 1268;
const limit = 20;
var offset = 0;

function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
        `).join('')
        pokemonOl.innerHTML += newHtml
    })
}

loadPokemons(offset, limit);

pokemonButton.addEventListener('click', ()=>{
    offset += limit;
    const nextPage = offset + limit

    if (nextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemons(offset, newLimit);
        pokemonButton.parentElement.removeChild(pokemonButton)
    } else {
        loadPokemons(offset, limit)
    }
})