import {Card, Button} from "react-bootstrap";

const AddFavoriteButton = ({addFavorite}) => (
    <button
        onClick={addFavorite}
        className="fav_button"
    >
        favourite
    </button>
);

const MovieActionButtons = ({ deleteMovie, setModalOpen,  }) => (
    <Card.Footer>
        <Button
            style={{ marginRight: 10 }}
            variant="danger"
            onClick={deleteMovie}
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
);

const MovieCard = ({ movie: {id, title, image, genre, rating }, addFavorite, deleteMovie, setModalOpen}) => (
    <div className="col-md-3 col-sm-6 col-xs-12">
        <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <span className="mr-auto">
                    {rating}
                    <img src="/favoris.png" className="favoris" alt="" />
                </span>
                <h6>{genre}/</h6>
                { addFavorite && (
                    <AddFavoriteButton addFavorite={ () => addFavorite(id) } />
                )}
                {deleteMovie && setModalOpen && (
                    <MovieActionButtons
                        deleteMovie={ () => deleteMovie(id)} 
                        setModalOpen={ setModalOpen }
                    />
                )}
            </Card.Body>
        </Card>
    </div>
);

export default MovieCard;