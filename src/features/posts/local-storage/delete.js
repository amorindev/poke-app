import { getPosts } from "./get_posts";
import { savePosts } from "./create";

export const deleteLocalPost = (id) => {
  const posts = getPosts();

  const newPosts = posts.filter((post) => post.id !== id);

  savePosts(newPosts);
};
