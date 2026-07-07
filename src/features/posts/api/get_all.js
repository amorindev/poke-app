import { apiJSONPlaceholder } from "../../../config/api";
import { getPosts } from "../local-storage/get_posts";
import { savePosts } from "../local-storage/create";

export const getAllPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // We check if they already exist in localStorage
  const localPosts = getPosts();

  if (localPosts.length > 0) {
    return localPosts;
  }

  // If they don't exist, we get them from the API
  const { data } = await apiJSONPlaceholder.get("/posts");

  // permite agregar los post creados al inicio
  const posts = [...data].reverse();

  // save in localStorage
  savePosts(posts);

  return data;
};
