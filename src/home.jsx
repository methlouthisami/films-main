import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite } from "./actions";

import Movie from "./components/_movie.card";

const MoviesList = ({ movies, addFavorite }) => (
  <div className="row justify-content-center">
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} addFavorite={addFavorite} />
    ))}
  </div>
);

const Home = () => {

  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  const [moviesList, setMoviesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddFavorite = (id) => dispatch(addFavorite(id));

  const handleNewSearch = () => {
    setMoviesList(
      movies.filter((movie) => {
        const m = new RegExp(searchTerm.trim(), "i");
        return m.test(movie.title);
      })
    );
  };

  //eslint-disable-next-line
  useEffect(handleNewSearch, [searchTerm, movies]);

  return (
    <div style={{ minWidth: "100%" }}>
      <div className="page_home">
        <input
          placeholder="rechercher"
          onChange={ ({ target: { value }}) => setSearchTerm(value) }
          id="inpute-recherche"
        />
      </div>

      <div className="container">
        <MoviesList
          movies={moviesList}
          addFavorite={handleAddFavorite}
        />
      </div>
    </div>
  );
};

export default Home;
