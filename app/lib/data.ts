import Pokemon from "./Pokemon";

const getTestPokemon = (quantity: number) => {
  const pokemons = [];

  for (let i = 0; i < quantity; i++) {
    const count = i + 1;
    pokemons.push(new Pokemon(count.toString(), `Number ${count}`));
  }

  return pokemons;
};

const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";
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
        ". Look it up here: " +
        json.sprites.versions["generation-i"].yellow.front_default
    );
  } catch (e) {
    console.log((e as Error).message);
  }
};

export { getTestPokemon, getPokemon };
