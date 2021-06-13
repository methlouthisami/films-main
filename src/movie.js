import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card } from "react-bootstrap";

import "./movie.css";


function Movie({getFavoris}) {
    const [movie, setMovie] = useState([]);

    const getData = () => {
        axios.get('https://aflem-6e85d-default-rtdb.firebaseio.com/posts.json')
            .then(({data}) => setMovie(data))
            .catch((err) => console.log('erreurrr',err));
    }

    useEffect(() => getData() ,[]);

    return movie.map( (el ) => el && (
        <div className="col-md-4">
            <Card style={{ width: "15rem" }} >
                <Card.Img variant="top" src={el.image} />
                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                        <div className="mr-auto">
                            {el.rating}
                            <img src="/favoris.png" className="favoris" alt="" />
                        </div>
                        <h6>{el.genre}/</h6>
                    </Card.Text>
                    <button
                        onClick={ () => { getFavoris(el) }}
                        className="fav_button"
                    >
                        favourite
                    </button>
                </Card.Body>
            </Card>
        </div>
    ));
}

export default Movie;
