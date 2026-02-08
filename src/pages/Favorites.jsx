import MovieGrid from "../components/MovieGrid";

function Favorites() {
  // Load favorites from localStorage
  const favoriteMovies = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Favorites</h2>
        {favoriteMovies.length === 0 ? (
          <p>No favorite movies yet. Start adding some from the home page!</p>
        ) : (
          <MovieGrid movies={favoriteMovies} />
        )}
      </div>
    </main>
  );
}

export default Favorites;