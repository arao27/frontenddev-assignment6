const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch popular movies");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("getPopularMovies error:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) throw new Error("Failed to search movies");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("searchMovies error:", error);
    return [];
  }
};