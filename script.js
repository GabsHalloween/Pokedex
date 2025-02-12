const types = {
    FIRE: "orange",
    WATER: "#66d9ff",
    BUG: "#2d912d",
    NORMAL: "#ffe4c4",
    ELECTRIC: "#ffff4d",
    POISON: "#ab8fc7",
    FAIRY: "lightpink",
    GROUND: "#806043",
    FIGHTING: "#ffc6af",
    ROCK: "#868686",
    GHOST: "#c4bce4",
    ICE: "rgb(210,235,255)",
    PSYCHIC: "#F85888",
    DRAGON: "#A27DFA",
    STEEL: "#e2e3e0",
    DARK: "#b509ff",
    GRASS: "lightgreen",
    FLYING: "lightblue"
}
console.log("carregando")
onLoad()
async function onLoad() {
    //fetches for API
    let listPokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon");
    //json of the API
    let listPokemonJson = await listPokemonResponse.json();
    console.log(listPokemonJson)
    
    //slot of pokemon
    for(let listPokemonElement of listPokemonJson.results) {
        console.log(listPokemonElement)
  
        let fetchPokemonChosenResponse = await fetch(listPokemonElement.url)
        let pokemonChosenInformationJson = await fetchPokemonChosenResponse.json();
        console.log(pokemonChosenInformationJson)

        createCard(pokemonChosenInformationJson)
        console.log(pokemonSlot)
    }



}
function createCard(pokemon) {
    console.log(pokemon)
    let pokemonName = pokemon.name
    let pokemonSprite = pokemon.sprites.front_default
    //let pokemonType1 = pokemon.types[0].type.name
    //let pokemonType2 = pokemon.types[1].type.name

    //https://pokeapi.co/api/v2/pokemon
    // const numero = 1;
    // let numero2 = 1;
    // var numero3 = 1;
    // console.log('gabriel vai matar o javscripto')

    let card = document.createElement("div")
    card.className = "card"

    let cardTitle = document.createElement("h2")
    cardTitle.innerText = pokemonName
    card.append(cardTitle)

    let cardImage = document.createElement("img")
    cardImage.src = pokemonSprite
    cardImage.className = "card-img"
    card.append(cardImage)

    let chipContainer = document.createElement("div")
    chipContainer.className = "chip-container"
    card.append(chipContainer)

    for (let element of pokemon.types) {
        let chip = document.createElement("h4")
        chip.className = "chip"
        chip.style.background = types[element.type.name.toUpperCase()]
        chip.innerText = element.type.name
        chipContainer.append(chip)
    }

    let cardContainer = document.getElementById("card-container")
    cardContainer.append(card)
}