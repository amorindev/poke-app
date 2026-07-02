import axios from "axios";
import { getPosts } from "../local-storage/get_posts";
import { savePosts } from "../local-storage/create";

export const createPost = async (newPost) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost,
  );

  const posts = getPosts();

  posts.push(data);

  savePosts(posts);

  return data;
};
