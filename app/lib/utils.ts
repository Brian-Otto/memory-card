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

export { getRandomizedArray, getDefaultPreferredColorScheme };
