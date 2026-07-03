import axios from "axios";

export const apiPokemon = axios.create({
  baseURL: import.meta.env.VITE_POKEAPI_BASE_URL,
  headers: { "Content-Type": "application/json" },
});


export const apiJSONPlaceholder = axios.create({
  baseURL: import.meta.env.VITE_JSON_PLACEHOLDER_BASE_URL,
  headers: { "Content-Type": "application/json" },
});


