import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { signOut } from '../../store/actions/authActions'
import { connect } from "react-redux";

class SidebarSignIn extends Component {
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
         <li><NavLink className="sidenav-close"to="/">Home</NavLink></li>                  
         <li><NavLink className="sidenav-close" to="/mycollections">My Collection</NavLink></li>
         <li><NavLink className="sidenav-close" to="/" onClick={this.props.signOut}>Log Out</NavLink></li>        
         </ul>
         <a href="#" data-target="slide-out" class="sidenav-trigger show-on-small"><i class="material-icons">menu</i></a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

  
  export default connect(null, mapDispatchToProps)(SidebarSignIn)