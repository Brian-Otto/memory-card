import Pokemon from "./Pokemon";

const getRandomizedPokemonArray = (array: Pokemon[]): Pokemon[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export { getRandomizedPokemonArray };
