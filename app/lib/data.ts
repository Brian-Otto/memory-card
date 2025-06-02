import Pokemon from "./Pokemon";

const getPokemons = async (quantity: number) => {
  const pokemons = [];

  for (let i = 0; i < quantity; i++) {
    const dexNum = i + 1;
    const fetchedPokemon = await fetchPokemon(dexNum);
    const id = await fetchedPokemon.id;
    const lowercaseName: string = await fetchedPokemon.name;
    const name = lowercaseName
      .charAt(0)
      .toUpperCase()
      .concat(lowercaseName.slice(1));
    const imgUrl = await fetchedPokemon.sprites.versions["generation-i"][
      "red-blue"
    ].front_default;
    pokemons.push(new Pokemon(id, name, imgUrl));
  }

  return pokemons;
};

const fetchPokemon = async (pokedexNum: number) => {
  // only give an argument from 1-151 here, first generation pokedex
  const url = `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    console.log(
      "The pokemon is " +
        json.name +
        " with Pokedex number " +
        json.id +
        ". Look it up here: " +
        json.sprites.versions["generation-i"]["red-blue"].front_default
    );
    return json;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export { fetchPokemon, getPokemons };
