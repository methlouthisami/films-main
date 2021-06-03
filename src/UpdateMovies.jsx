import { Modal,Button } from 'react-bootstrap'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './update.css'

function UpdateMovies({el,inpuut}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const[update,setupdateMovie]= useState({
      title:inpuut[el].title,
      genre:inpuut[el].genre,
      rating:inpuut[el].rating

  });

  const upChangeMovie = e => {
    const { name, value } = e.target
    setupdateMovie({
      ...update,
      [name]: value 
    });
    console.log(update)
  };
const refrech=()=>{
window.location.reload()
}

    const  upChangeMovi=(id)=> {
        console.log(id)
        axios.put(`https://aflem-6e85d-default-rtdb.firebaseio.com/posts/${id}.json`,update)
        .then(response => {
            setupdateMovie(response.data);
          })
          .then(res=>refrech())
        .catch(err=> 
          console.log("4altaaaa", err)
        );
      }
     
 
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div><input type="text" name="title" defaultValue={update.title} onChange={upChangeMovie} placeholder="ahlaaa" /></div>
          <div><input type="text" name="genre" defaultValue={update.genre} onChange={upChangeMovie} placeholder="gwaaa"/></div>
          <div><input type="text" name="rating" defaultValue={update.rating} onChange={upChangeMovie}placeholder="rasssss" /></div>
        

         
         </Modal.Body>
         

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => upChangeMovi(el)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default UpdateMovies
