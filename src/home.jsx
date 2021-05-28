import { React, useState } from 'react'
import Movie from "./movie";

const Home = ({ getFavoris, movie, favouriteMovie}) => {
    const [input, setInput] = useState("")
    const handelchange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className="page_home">

          
            <input placeholder="rechercher" onChange={handelchange} />

            <div className="container">
                <div className="row justify-content-center">
                <Movie input={input} getFavoris={getFavoris} movie={movie} handelchange={handelchange} /></div>

                </div>
        </div>
    )
}

export default Home
