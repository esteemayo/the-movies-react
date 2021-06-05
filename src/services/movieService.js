import http from "./httpService";

export function getMovies(query) {
  return http.get(`/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
}
