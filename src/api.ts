const API_KEY = "c105586a40799362d1557cbaa06ec1fd";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
