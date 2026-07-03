import { updateLocalPost } from "../local-storage/update";
import { apiJSONPlaceholder } from "../../../config/api";

export const updatePost = async (post) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = await apiJSONPlaceholder.put(`/posts/${post.id}`, post);

  updateLocalPost(data);

  return data;
};
