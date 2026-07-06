import { apiJSONPlaceholder } from "../../../config/api";
import { getPosts } from "../local-storage/get_posts";
import { savePosts } from "../local-storage/create";

export const getAllPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Revisamos si ya existen en localStorage
  const localPosts = getPosts();

  if (localPosts.length > 0) {
    return localPosts;
  }

  // Si no existen, los obtenemos de la API
  const { data } = await apiJSONPlaceholder.get("/posts");

  // Guardarlos en localStorage
  savePosts(data);

  return data;
};