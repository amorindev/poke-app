import { apiJSONPlaceholder } from "../../../config/api";

export const getByPostId = async (postId) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = await apiJSONPlaceholder.get("/comments");

  return data.filter((comment) => comment.postId === postId);
};
