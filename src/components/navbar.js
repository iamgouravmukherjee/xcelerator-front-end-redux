import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
   render() {
      return (
         <div className="header z-depth-1">
           <Link to="/">
               <div className="appName">NEWS SQUARED</div>
            </Link>
         </div>
      )
   }
}

export default Navbar;