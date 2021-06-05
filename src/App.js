import { ToastContainer } from "react-toastify";
import axios from "axios";

import RemoveFavourites from "./components/RemoveFavourites";
import AddFavourites from "./components/AddFavourites";
import { useGlobalContext } from "./utils/context";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

axios.defaults.baseURL = "https://www.omdbapi.com";

function App() {
  const { movies, favourites, addFavouriteMovie, removeFavouriteMovie } =
    useGlobalContext();

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header />
        <SearchBox />
      </div>
      <ToastContainer />
      <div className="row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          favouriteComponent={RemoveFavourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
