const reducer = (state, action) => {
  if (action.type === "ADD_FAVOURITE_MOVIE") {
    const newFavouriteList = [action.payload, ...state.favourites];

    return { ...state, favourites: newFavouriteList };
  }

  if (action.type === "REMOVE_FAVOURITE_MOVIE") {
    const newFavouriteList = state.favourites.filter(
      (f) => f.imdbID !== action.payload.id
    );

    return { ...state, favourites: newFavouriteList };
  }

  throw new Error("No matching action type");
};

export default reducer;
