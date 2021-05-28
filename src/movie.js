import React, { useEffect, useState } from "react";
import "./movie.css";
import { Card } from "react-bootstrap";

function Movie({ input, getFavoris, movie}) {

//   .filter((ro) => 

//   ro.title.toString().toLowerCase().includes(input.toLowerCase())

//  )
  return (
  movie.map((el) => 


      <div className="">
        <div className="col-md-4">
          <Card style={{ width: "15rem" }} >
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

      ) 
       )
}

export default Movie;