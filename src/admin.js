import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card} from "react-bootstrap";

import UpdateMovies from "./UpdateMovies";
import "./admin.css";

const image = "https://picsum.photos/seed/picsum/600/600";

const MovieCard = ({id, movie = {}, deleteMovie, fetchMovies }) => {
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
                fetchMovies={fetchMovies}
            />
        </>
    );
};

const AddNewMovie = ({fetchMovies}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resetForm = () => {
            e.target.elements.title.value = "";
            e.target.elements.genre.value  = "";
            e.target.elements.rating.value = "";
        }

         const body = {
             image,
             title: e.target.elements.title.value,
             genre: [ e.target.elements.genre.value ],
             rating: e.target.elements.rating.value,
         }
        await axios.post("https://aflem-6e85d-default-rtdb.firebaseio.com/posts.json", body)
            .then(fetchMovies)
            .then(resetForm)
            .catch(e => console.log("Error", e));
    }

    return(
        <form onSubmit={handleSubmit} className="admin_form">
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

const Admin = () => {

    const [ movies, setMovies ] = useState([]);

    const fetchMovies = () => axios.get("https://aflem-6e85d-default-rtdb.firebaseio.com/posts.json")
        .then(({data}) => {
            const moviesList = [];
            for( let id in data){
                moviesList.push({...data[id], id });
            }
            setMovies([...movies, ...moviesList])
        })
        .catch( err => console.log("erreurrr", err));

    //eslint-disable-next-line
    useEffect(() => fetchMovies(), []);

    const deleteMovie = id => {
        console.log({id})
        axios.delete(`https://aflem-6e85d-default-rtdb.firebaseio.com/posts/${id}.json`)
            .then( fetchMovies )
            .catch( e => console.log("Delete Error", e) );
    }

    return(
        <div>
            <AddNewMovie fetchMovies={fetchMovies} />
            <div className="d-flex justify-content-around flex-wrap">
                { movies.map( movie => movie && (
                    <div key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            movie={movie}
                            deleteMovie={deleteMovie}
                            fetchMovies={fetchMovies}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
