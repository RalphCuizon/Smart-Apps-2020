import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
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
        props = this.props
        return (
            <div>
                  <ul className="sidenav" id="slide-out">
         <li><NavLink to="/">Home</NavLink></li>                  
         <li><NavLink to="/mycollections">My Collection</NavLink></li>
         <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>        
         <li><NavLink to="/" className="btn btn-floating light-blue lighten-2">RC</NavLink></li>
         </ul>
         <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
            </div>
        );
    }
}

export default Sidebar;