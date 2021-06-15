import {useEffect} from "react";
import Movie from "./movie";

const Home = ({ movies, addFavorite, getMovies }) => {

    //eslint-disable-next-line
    useEffect(() => getMovies(), []);

    return (
        <div className="page_home">
            <input placeholder="rechercher" onChange={() => console.log("changing")} id="inpute-recherche" />
            <div className="container">
                <div className="row justify-content-center">
                    { movies.map( movie => (
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
