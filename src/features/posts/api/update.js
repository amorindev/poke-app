import { updateLocalPost } from "../local-storage/update";
import { apiJSONPlaceholder } from "../../../config/api";

export const updatePost = async (post) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // jsonplaceholder supports up to 100 posts in update
  if (!(post.id > 100)) {
    const { data } = await apiJSONPlaceholder.put(`/posts/${post.id}`, post);
    updateLocalPost(data);
    return data;
  }
  updateLocalPost(post);
  return post;
};
