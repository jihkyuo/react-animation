const API_KEY = "c105586a40799362d1557cbaa06ec1fd";
const BASE_PATH = "https://api.themoviedb.org/3/";

export function getMovies() {
  return fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
