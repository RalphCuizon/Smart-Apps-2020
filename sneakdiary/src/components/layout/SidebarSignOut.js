import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                  <ul className="sidenav" id="slide-out">   
                  <li><NavLink className="sidenav-close" to="/signup">Sign Up</NavLink></li>                  
            <li><NavLink className="sidenav-close" to="/signin">Login</NavLink></li>
         </ul>
         <a href="#" data-target="slide-out" class="sidenav-trigger show-on-small"><i class="material-icons">menu</i></a>
            </div>
        );
    }
}

  
  export default Sidebar