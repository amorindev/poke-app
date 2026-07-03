import { getPosts } from "../local-storage/get_posts";
import { savePosts } from "../local-storage/create";
import { apiJSONPlaceholder } from "../../../config/api";

export const createPost = async (newPost) => {
  // userid burned for example.
  const userId = "1";

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = await apiJSONPlaceholder.post("/posts", newPost);
  console.log(data);

  const posts = getPosts();

  let id;
  if (posts.length === 0) {
    id = 1;
  } else {
    id = posts[posts.length - 1].id + 1;
  }

  const post = {
    ...newPost,
    id: id,
    userId,
  };

  posts.push(post);

  savePosts(posts);

  return post;
};
