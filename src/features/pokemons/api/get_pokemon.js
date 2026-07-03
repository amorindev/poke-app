import { apiPokemon } from "../../../config/api";

export const getPokemon = async (url) => {
  const { data } = await apiPokemon.get(url);
  return data;
};
