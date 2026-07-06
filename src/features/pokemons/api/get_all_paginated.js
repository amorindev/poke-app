import { apiPokemon } from "../../../config/api";

export const getAllPaginated = async (limit, offset) => {
  const { data } = await apiPokemon.get(`/pokemon?limit=${limit}&offset=${offset}`);
  return data;
};
