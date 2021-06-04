import React from 'react'
import { Card } from "react-bootstrap";


const Mybest = ({ favouriteMovie, Remove ,handleRemoveItem,deleteMovie}) => {
  

  return (
    <div>

      {favouriteMovie.map((el) => (
       <div className="d-flex flex-wrap justify-content-between">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                <div className="mr-auto">
                  {el.rating}
                  <img src="/favoris.png" className="favoris" />
                  <button onClick={deleteMovie} ><img src="/bouton.png" style={{ width: "20px" }} /></button> 
                </div>
                <h6>{el.genre}/</h6>
              </Card.Text>
            </Card.Body>
          </Card>
       </div>


      ))
      }
    </div>
  )
}
export default Mybest;