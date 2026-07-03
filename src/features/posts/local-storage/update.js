import { getPosts } from "./get_posts";
import { savePosts } from "./create";

export const updateLocalPost = (updatedPost) => {
  const posts = getPosts();

  const newPosts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post,
  );

  savePosts(newPosts);

  return updatedPost;
};