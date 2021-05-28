import { Modal,Button } from 'react-bootstrap'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './update.css'

function UpdateMovies({el}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const[update,setupdateMovie]= useState({
      title:el.title,
      genre:el.genre,
      rating:el.rating

  });

  const  changeMovie = (e) => {
    const  {name, value} = e.target.value;
    
    setupdateMovie ({
        ...update,
        [name] : value,
        
    });
    console.log(update)
}


    const  upChangeMovie=(id)=> {
        console.log(id)
        axios.put(`http://localhost:3004/posts/${id}`,update)
        .then(response => {
            setupdateMovie(response.data);
          })
        .catch(err=> 
          console.log("4altaaaa", err)
        );
      }
     
 
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div><input type="text" name="title" defaultValue={update.title} onChange={changeMovie} placeholder="ahlaaa" /></div>
          <div><input type="text" name="genre" defaultValue={update.genre} onChange={changeMovie} placeholder="gwaaa"/></div>
          <div><input type="text" name="rating" defaultValue={update.rating} onChange={changeMovie}placeholder="rasssss" /></div>
        

         
         </Modal.Body>
         

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => upChangeMovie(el.id)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default UpdateMovies
