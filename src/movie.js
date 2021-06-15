import {Card} from "react-bootstrap";
import "./movie.css";

const MovieComponent = ({ movie:{ id, image, title, rating, genre }, addFavorite }) => (
    <div className="col-md-4">
        <Card style={{ width: "15rem" }} >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <span className="mr-auto">
                    {rating}
                    <img src="/favoris.png" className="favoris" alt="" />
                </span>
                <h6>{genre}/</h6>
                <button
                    onClick={() => addFavorite(id) }
                    className="fav_button"
                >
                    favourite
                </button>
            </Card.Body>
        </Card>
    </div>
);

export default MovieComponent;
