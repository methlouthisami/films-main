import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";

import UpdateMovies from "./UpdateMovies";
import "./admin.css";

const image = "https://picsum.photos/seed/picsum/600/600";

const MovieCard = ({id, movie = {}, deleteMovie, handleUpdateMovie }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const { title, image, genre, rating } = movie;

    return(
        <>
            <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                        <div className="mr-auto">
                            {genre}
                            <img src="/favoris.png" className="favoris" alt="" />
                        </div>
                        <h6>{rating}</h6>
                </Card.Body>
                <Card.Footer>
                    <Button
                        style={{ marginRight: 10 }}
                        variant="danger"
                        onClick={() => deleteMovie(id)}
                    >
                        Remove
                    </Button>
                    <Button
                        variant="primary"
                        onClick={ () => setModalOpen(true) }
                    >
                        Edit
                    </Button>
                </Card.Footer>
            </Card>
            <UpdateMovies
                open={ modalOpen }
                close={ () => setModalOpen(false) }
                id={ id }
                movie={ movie }
                handleUpdateMovie={handleUpdateMovie}
            />
        </>
    );
};

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

const Admin = ({ movies, getMovies, deleteMovie, updateMovie, createMovie }) => {
    //eslint-disable-next-line
    useEffect(() => getMovies(), []);
    return(
        <div>
            <AddNewMovie
                fetchMovies={getMovies}
                createMovie={createMovie}
            />
            <div className="d-flex justify-content-around flex-wrap">
                { movies.map( movie => movie && (
                    <div key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            movie={movie}
                            deleteMovie={deleteMovie}
                            handleUpdateMovie={updateMovie}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
