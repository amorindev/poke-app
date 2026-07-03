import { deleteLocalPost } from "../local-storage/delete";
import { apiJSONPlaceholder } from "../../../config/api";

export const deletePost = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await apiJSONPlaceholder.delete(`/posts/${id}`);

  deleteLocalPost(id);

  return id;
};
