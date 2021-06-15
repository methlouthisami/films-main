import React, {useEffect, useState} from 'react';
import { Modal,Button } from 'react-bootstrap';
import './update.css';

function UpdateMovies({ movie, id, open, close, handleUpdateMovie }) {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        setTitle( movie.title );
        setGenre( movie.genre );
        setRating( movie.rating );
        setImage( movie.image );

    }, [movie]);

    const handleMovieUpdate = (e) => {
        e.preventDefault();
        handleUpdateMovie(id, {
            id,
            title,
            genre,
            rating,
            image
        })
            .then( close )
            .catch( err => console.log("Update Error.", err));
    }

    return (
        <>
            <Modal show={open} onHide={close}>
                <form onSubmit={handleMovieUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
                                onChange={({ target:{ value }}) => setTitle(value)}
                                placeholder="Title"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="genre"
                                defaultValue={ genre.join ? genre.join() : genre }
                                onChange={({ target:{ value }}) => setGenre( value.split() )}
                                placeholder="Genre"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="rating"
                                defaultValue={rating}
                                onChange={({ target:{ value }}) => setRating(value)}
                                placeholder="Rating"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default UpdateMovies
