import { getPosts } from "../local-storage/get_posts";
import { savePosts } from "../local-storage/create";
import { apiJSONPlaceholder } from "../../../config/api";

export const createPost = async (newPost) => {
  // userid burned for example.
  const userId = 10;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = await apiJSONPlaceholder.post("/posts", newPost);
  console.log(data);
  console.log(newPost);

  const posts = getPosts();

  let id;
  if (posts.length === 0) {
    id = 1;
  } else {
    id = posts[0].id + 1;
    // We use this if we do a push, that is, if we add at the end
    // id = posts[posts.length - 1].id + 1;
  }

  const post = {
    userId: userId,
    id: id,
    title: data.title,
    body: data.body,
  };

  posts.unshift(post);

  savePosts(posts);

  return post;
};
