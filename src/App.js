import "./App.css"

import React, { useState } from "react";
import axios from "axios"
import { BrowserRouter, Route } from "react-router-dom";
import Foote from "./footer";
import Favor from './favories'
import Home from "./home"
import PostForm from './admin'
import Navi from './nav'
import About from './about'

function App({movie,getMovie,handelchange}) {

  const [favouriteMovie] = useState([]);


// ********get favorite function*************

const getFavoris = (el) => {
    favouriteMovie.push(el);
    console.log('hhhhhhhhhhhhhh',favouriteMovie)
}

// *******************************

const deleteMovie = (id) => {
  axios.delete(`https://aflem-6e85d-default-rtdb.firebaseio.com/.posts.json/${id}`)
  .then((response)=> console.log("deletttttte",response))
  .catch((err)=>console.log("4altaaaa",err))
}

    return (
        <div>
            <BrowserRouter>
                <div className="App ">
                    <Navi  favouriteMovie={favouriteMovie} />
                    <div className="bag">
                        <img src="/landing.jpg" alt=""/>
                    </div>
                    <div className="box">
                        <h2>watch your favorite movie for free in one place</h2>
                        <button className="button_one">Log in</button>
                        <button className="button_tow">Sign up</button>
                    </div>

                    <Route exact path="/">
                        <Home
                            getFavoris={getFavoris}
                            movie={movie}
                            favouriteMovie={favouriteMovie}
                            getMovie={getMovie}
                            deleteMovie={deleteMovie}
                            handelchange={handelchange }
                        />
                    </Route>

                    <Route path='/favories'>
                        <Favor favouriteMovie={favouriteMovie}  />
                    </Route>
                    <Route path='/admin'>
                        <PostForm/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <div className="ahbet">
                        <Foote />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
