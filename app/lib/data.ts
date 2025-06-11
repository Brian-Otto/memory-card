import Pokemon from "./Pokemon";
import { generation } from "./utils";

const getPokemons = async (
  quantity: number,
  wantedGenerations: generation[]
) => {
  const wantedIndexes = wantedGenerations.map((generation) => generation - 1);

  // pokedex starting num and pokedex ending num as arrays inside array
  const dexFromToArray = [
    [1, 151],
    [152, 251],
    [252, 386],
    [387, 493],
    [494, 649],
    [650, 721],
    [722, 809],
    [810, 905],
    [906, 1025],
  ];

  const possibleDexNums: number[] = [];

  // for every generation, push every possible pokedex num to array
  for (let i = 0; i < wantedIndexes.length; i++) {
    const from = dexFromToArray[wantedIndexes[i]][0];
    const to = dexFromToArray[wantedIndexes[i]][1];

    for (let j = from; j <= to; j++) {
      possibleDexNums.push(j);
    }
  }

  const pokemons = [];

  for (let i = 0; i < quantity; i++) {
    // pick a random index
    const indexOfDexNum = Math.floor(Math.random() * possibleDexNums.length);
    // convert the index to the dexNum
    const dexNum = possibleDexNums[indexOfDexNum];
    // delete used dexNum to avoid repetition
    possibleDexNums.splice(indexOfDexNum, 1);

    // fetch pokemondata
    const fetchedPokemon = await fetchPokemon(dexNum);
    const id = await fetchedPokemon.id;
    const lowercaseName: string = await fetchedPokemon.name;
    const name = lowercaseName
      .charAt(0)
      .toUpperCase()
      .concat(lowercaseName.slice(1));
    const imgUrl = await fetchedPokemon.sprites.front_default;
    pokemons.push(new Pokemon(id, name, imgUrl));
  }

  return pokemons;
};

const fetchPokemon = async (pokedexNum: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export { fetchPokemon, getPokemons };
