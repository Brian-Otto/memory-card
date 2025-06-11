const getRandomizedArray = <T>(array: T[]): T[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const getDefaultPreferredColorScheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export type generation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export { getRandomizedArray, getDefaultPreferredColorScheme };
