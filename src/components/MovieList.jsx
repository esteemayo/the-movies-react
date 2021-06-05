const MovieList = ({ movies, favouriteComponent, handleFavouritesClick }) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <>
      {movies.map((movie) => {
        const { imdbID, Title, Poster } = movie;
        return (
          <div
            key={imdbID}
            className="image-container d-flex justify-content-start m-3"
          >
            <img src={Poster} alt={Title} />
            <div
              onClick={() => handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
