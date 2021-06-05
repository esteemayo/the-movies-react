import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useCallback,
  createContext,
} from "react";

import reducer from "./reducer";
import { getMovies } from "./../services/movieService";

const getLocalStorage = () => {
  const favourites = localStorage.getItem("favourites");
  if (favourites) return JSON.parse(favourites);
  return [];
};

const initialStates = {
  favourites: getLocalStorage(),
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = useCallback(async () => {
    const { data } = await getMovies(searchTerm);
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state.favourites]);

  const addFavouriteMovie = (movie) => {
    dispatch({ type: "ADD_FAVOURITE_MOVIE", payload: movie });
  };

  const removeFavouriteMovie = (movie) => {
    dispatch({ type: "REMOVE_FAVOURITE_MOVIE", payload: { id: movie.imdbID } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        movies,
        setSearchTerm,
        addFavouriteMovie,
        removeFavouriteMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
