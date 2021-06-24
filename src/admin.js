import React, {useEffect, useState} from "react";
import UpdateMovies from "./UpdateMovies";
import MovieCard from "./components/_movie.card"
import { useSelector } from "react-redux";

const image = "https://picsum.photos/seed/picsum/600/600";

const AddNewMovie = ({createMovie}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMovie({
            image,
            title: e.target.elements.title.value,
            genre: [ e.target.elements.genre.value ],
            rating: e.target.elements.rating.value,
        });
        document.getElementById("add-movie-form").reset();
    }

    return(
        <form onSubmit={handleSubmit} id="add-movie-form" className="admin_form">
            <div>
                <h2>Title</h2>
                <input type="text" name="title" />
            </div>
            <div>
                <h2>Genre</h2>
                <input type="text" name="genre"/>
            </div>
            <div>
                <h2>Rating</h2>
                <input type="text" name="rating" />
            </div>
            <button type="submit" id="submit">
                submit
            </button>
        </form>
    );
}

const Admin = ({ deleteMovie, updateMovie, createMovie }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    
    const movies = useSelector( store => store.movies );

    return(
        <div>
            <AddNewMovie createMovie={createMovie} />
            <div className="d-flex justify-content-around flex-wrap">
                { movies.map( movie => movie && (
                    <div key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            movie={movie}
                            deleteMovie={deleteMovie}
                            setModalOpen={setModalOpen}
                        />
                        <UpdateMovies
                            open={ modalOpen }
                            close={ () => setModalOpen(false) }
                            movie={ movie }
                            handleUpdateMovie={updateMovie}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
