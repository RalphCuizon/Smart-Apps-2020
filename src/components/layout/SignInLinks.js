import React from 'react'
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import SidebarSignIn from './SidebarSignIn'




const SignInLinks = (props) => {
    return (
        
        <div>
        <nav className="nav-wrapper blue-grey darken-3">
        
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>                  
            <li><NavLink to="/mycollections">My Collection</NavLink></li>
            <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>        
        </ul> 
        </nav>
       <SidebarSignIn></SidebarSignIn>
         </div>
         
    ) 
    
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

  
  export default connect(null, mapDispatchToProps)(SignInLinks)