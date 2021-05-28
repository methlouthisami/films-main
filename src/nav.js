import React from "react";
import './nav.css';
import { Link } from 'react-router-dom'
import  './favories'

const Navi = ({  favouriteMovie }) => {
  return (
    
    <div className=" naav col-md-12">
      <nav >
  

        <ul>
        <li className="left_side col-md-4">
            <img className="img-logo" src="/logo.jpg" /></li>
       
          <div className="right_side col-md-6">
            <Link to='/'>Home</Link>
            <Link to='/favories'>favourite</Link>
            <Link to='/about'>About us</Link>
          </div>
        </ul>



      </nav>

    </div>
  );
}

export default Navi;
