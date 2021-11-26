import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.jikan.moe/v3",
});

export const jwtapi = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
});
