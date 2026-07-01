export const create = async (pokemon) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return pokemon;
};
