// we are going to communicate to an api and display the stuff on screen

// I need to fetch from an api
// what does fetch require me to write?

// let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
//   // Thenable object

//   // resolution
//   .then((responseWeGetBack) => responseWeGetBack.json())
//   .then((data) => data);
const mainContainer = document.querySelector(".main-container");

const fetchPokemonData = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=30");
  let json = await response.json();
  console.log(json);
  let counter = 1;
  // you'll need this
  for (let pokemon of json.results) {
    console.log(pokemon);
    const pokemonContainer = document.createElement("div");
    pokemonContainer.className = "pokemon";
    const nameOfPokemon = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "250";
    img.width = "250";
    img.src = `https://pokeres.bastionbot.org/images/pokemon/${counter}.png`;
    nameOfPokemon.innerHTML = pokemon.name;
    pokemonContainer.append(nameOfPokemon, img);
    mainContainer.append(pokemonContainer);
    counter += 1;
  }

  return json;
};

const submit = document.querySelector("button");
submit.addEventListener("click", function () {
  fetchPokemonData();
});

// rejection
//   .catch(console.log("woops, error"));

// examples about async, concurrency, and async await
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

// you will always make the program wait, everytime it hits await
const makeSmoothie = async () => {
  const firstFruit = await getFruit("peach");
  const secondFruit = await getFruit("pineapple");
  return [firstFruit, secondFruit];
};

// whereas with promise.all, we will make the program finish both promise because we are running them both concurrently
const makeSmoothieFaster = async () => {
  const firstFruit = getFruit("peach");
  const secondFruit = getFruit("pineapple");
  const smoothie = await Promise.all([firstFruit, secondFruit]);
  return smoothie;
};

const fruitRace = async () => {
  const firstFruit = getFruit("peach");
  const secondFruit = getFruit("pineapple");
  const winner = await Promise.race([firstFruit, secondFruit]);
  console.log(winner);
  return winner;
};
fruitRace();
// fruitRace().then();