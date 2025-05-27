import Pokemon from "./Pokemon";

const getTestPokemon = (quantity: number) => {
  const pokemons = [];

  for (let i = 0; i < quantity; i++) {
    const count = i + 1;
    pokemons.push(new Pokemon(count.toString(), `Number ${count}`));
  }

  return pokemons;
};

export { getTestPokemon };
