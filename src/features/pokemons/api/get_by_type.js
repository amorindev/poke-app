import { api } from "../../../config/api";

export const getByType = async (type) => {
  const { data } = await api.get(`https://pokeapi.co/api/v2/type/${type}`);
  return data;
};
