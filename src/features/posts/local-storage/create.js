import { KEY } from "./storage";

export const savePosts = (posts) => {
  localStorage.setItem(KEY, JSON.stringify(posts));
};