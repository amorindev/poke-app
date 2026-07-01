import { api } from "../../../config/api";

export const getAllPaginated = async (limit, offset) => {
  const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
  console.log(data);
  return data;
};
