import Pokemon from "./Pokemon";

const getPokemons = async (quantity: number) => {
  const from = 1;
  const to = 151;
  const alreadySelected: number[] = [];
  const pokemons = [];

  for (let i = 0; i < quantity; i++) {
    const dexNum = Math.floor(Math.random() * (to - from + 1)) + from;

    if (alreadySelected.includes(dexNum)) {
      i -= 1;
      continue;
    }

    alreadySelected.push(dexNum);
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
