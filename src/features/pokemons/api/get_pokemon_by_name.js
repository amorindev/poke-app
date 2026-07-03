import {  apiPokemon } from "../../../config/api";

export const getPokemonByName = async (name) => {
  const { data } = await apiPokemon.get(`/pokemon/${name}`);
  return data;
};
