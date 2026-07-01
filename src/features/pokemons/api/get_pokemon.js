import { api } from "../../../config/api";

export const getPokemon = async (url) => {
  const { data } = await api.get(url);
  return data;
};
