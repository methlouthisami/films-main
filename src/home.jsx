import {useEffect, useState} from "react";
import Movie from "./movie";

const Home = ({ movies, addFavorite, getMovies }) => {

    const [currentMovies, setCurrentMovies] = useState([]);

    const handleSearch = ({ target: {value} }) => {
        if(value.length >= 2){
            setCurrentMovies( movies.filter( movie => {
                const m = new RegExp(value, "i");
                return m.test( movie.title);
            }))
        }else setCurrentMovies([]);
    }

    //eslint-disable-next-line
    useEffect(() => getMovies(), []);

    return (
        <div className="page_home">
            <input
                placeholder="rechercher"
                onChange={ handleSearch }
                id="inpute-recherche"
            />
            <div className="container">
                <div className="row justify-content-center">
                    { (currentMovies.length > 0 ? currentMovies : movies).map( movie => (
                        <Movie
                            key={movie.id}
                            movie={movie}
                            addFavorite={addFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
