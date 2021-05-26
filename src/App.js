import "./App.css"
import firebase from "./firebase"
import Foote from "./footer";
import React, { useState, useEffect } from "react";
import Favor from './favories'
import Home from "./home"
import PostForm from './admin'
import axios from "axios"
import Navi from './nav'
import { BrowserRouter, Route} from "react-router-dom";
import About from './about'
function App() {

  const [favouriteMovie,handelchange, setfavouriteMovie] = useState([]);
  
 
// ********get movies function*************
  const [movie, setMovie] = useState([]);
  // const ref=firebase.firestore().collection('movie')
  // console.log(ref)
  const getMovie = ()=>{
    axios.get('https://aflem-6e85d-default-rtdb.firebaseio.com/posts').then(
         (response) => {setMovie(response.data)
  })
}

  useEffect(() => {
    getMovie();

  }, []);

// *******************************

  const getFavoris = (el) => {
    favouriteMovie.push(el)
    console.log(favouriteMovie)
  }
const deleteMovie =(id)=>{
  axios.delete(`https://aflem-6e85d-default-rtdb.firebaseio.com/.posts.json/${id}`)
  .then((response)=>console.log("deletttttte",response))
  .catch((err)=>console.log("4altaaaa",err))
}
  
    
    
    
  return (
    <div>
      <BrowserRouter>


        <div className="App ">
        <div className="bag"> <img src="/landing.jpg" /> </div>
        <Navi handelchange={handelchange} favouriteMovie={favouriteMovie} />

          <div className="box"><h2>watch your favorite movie for free in one place</h2><button className="button_one">Log in</button><button className="button_tow">Sign up</button></div>
         
          <Route exact path="/"  ><Home getFavoris={getFavoris} movie={movie} favouriteMovie={favouriteMovie} getMovie={getMovie} deleteMovie={deleteMovie}/></Route>

          <Route path='/favories'><Favor favouriteMovie={favouriteMovie}  /></Route>
          <Route path='/admin'><PostForm/></Route>
          <Route path='/about'><About/></Route>
          <div className="ahbet">
            <Foote />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
