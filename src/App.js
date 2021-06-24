import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setMovies } from "./actions";

import AdminPage from './admin';
import HomePage from "./home";

import Foote from "./footer";
import Favor from './favories'
import Navi from './nav';
import About from './about';

import {deleteMovies, getMovies, updateMovies, createMovie} from "./core/movies";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovies()
            .then( movies => dispatch( setMovies( movies ) ));
    }, []);

    const handleDeleteMovie = async id => {
        await deleteMovies(id);
        //setMovies( movies.filter( movie => movie.id !== id))
    }

    const handleUpdateMovie = async (id, body) => {
        await updateMovies(id, body);
        //setMovies( movies.map( movie => movie.id === id ?  {...movie, ...body } : movie ));
    }

    const handleNewMovie = async movie => {
        const {data:{name }}= await createMovie(movie);
        //setMovies([...movies, {id: name,...movie}]);
    }

    //const isFavoriteExists = id => ( favorites.filter(movie => id === movie.id ) ).length;
    //const handleAddFavorite = id => !isFavoriteExists(id) && setFavorites([...favorites, ...movies.filter( movie => id === movie.id )]);
    //const handleDeleteFavorite = id => setFavorites(favorites.filter( movie => movie.id !== id ));

    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <Navi />
                    <div className="bag">
                        <img src="/landing.jpg" alt=""/>
                    </div>
                    <div className="box">
                        <h2>watch your favorite movie for free in one place</h2>
                        <button className="button_one">Log in</button>
                        <button className="button_tow">Sign up</button>
                    </div>

                    <Route exact path="/">
                         <HomePage />
                    </Route>

                    <Route path='/favories'>
                        <Favor />
                    </Route>

                    <Route path='/admin'>
                        <AdminPage />
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
