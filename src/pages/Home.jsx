import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import { getPopularMovies } from "../services/movieService";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

function Home({ searchResults, searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        if (searchQuery) {
          setMovies(searchResults);
        } else {
          const data = await getPopularMovies();
          setMovies(data);
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchResults, searchQuery]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>{searchQuery ? `Search results for "${searchQuery}"` : "Popular Movies"}</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={movies} />
    </main>
  );
}

export default Home;