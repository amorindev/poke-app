import {  apiPokemon } from "../../../config/api";

export const getAll = async () => {
  const { data } = await apiPokemon.get("/pokemon");
  return data;
};
