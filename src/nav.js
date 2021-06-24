import React from "react";
import { Link } from 'react-router-dom';

import Logo from "./images/logo.jpg";

const Navi = () => {
  return (
    <div className="naav col-md-12">
        <nav>
            <ul>
                <li className="left_side col-md-4">
                   <img className="img-logo" src={Logo} alt="" />
                </li>
              <div className="right_side col-md-6">
                  <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favories'>Favorite</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                 </ul>
              </div>
            </ul>
        </nav>
    </div>
  );
}

export default Navi;
