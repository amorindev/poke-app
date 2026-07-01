import { api } from "../../../config/api";

export const getAll = async () => {
  const { data } = await api.get("/pokemon");
  return data;
};
