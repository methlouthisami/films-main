import React, { useEffect, useState } from "react";
import "./movie.css";
import { Card } from "react-bootstrap";

function Movie({ input, getFavoris, movie}) {





  return movie 
    // .filter((ro) => {
    //   if (input === "") {
    //     return ro;
    //   } else if (ro.title.toLowerCase().includes(input.toLowerCase())) {
    //     return ro;
    //   }
    // })
    .map((el) => (


      <div>
        <div className="cward  m-3">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                <div className="mr-auto">
                  {el.rating}
                  <img src="/favoris.png" className="favoris" />
                </div>
                <h6>{el.genre}/</h6>
              </Card.Text>
              <button onClick={() => { getFavoris(el) }}className="fav_button">favourite</button>
            </Card.Body>
          </Card>
        </div>
      </div>

    ));
}

export default Movie;
