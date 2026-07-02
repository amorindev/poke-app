import { KEY } from "./storage";

export const getPosts = () => {
  const posts = localStorage.getItem(KEY);

  return posts ? JSON.parse(posts) : [];
};