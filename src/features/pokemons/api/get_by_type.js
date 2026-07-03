import {  apiPokemon } from "../../../config/api";

export const getByType = async (type) => {
  const { data } = await apiPokemon.get(`https://pokeapi.co/api/v2/type/${type}`);
  return data;
};
