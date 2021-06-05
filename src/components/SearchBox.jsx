import { useRef, useEffect } from "react";

import { useGlobalContext } from "../utils/context";

const SearchBox = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSearchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className="col col-sm-4">
      <input
        type="search"
        ref={searchValue}
        className="form-control"
        placeholder="Type to search..."
        onChange={handleSearchMovie}
      />
    </div>
  );
};

export default SearchBox;
