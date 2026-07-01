import { api } from "../../../config/api";

export const getPokemonByName = async (name) => {
  const { data } = await api.get(`/pokemon/${name}`);
  return data;
};
