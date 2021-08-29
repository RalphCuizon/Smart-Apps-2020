import React from 'react'
import { NavLink } from 'react-router-dom'
import SidebarSignOut from './SidebarSignOut'


const SignOutLinks = () => {
    return (
        <div>
        <nav className="nav-wrapper blue-grey darken-3">
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/signup">Sign Up</NavLink></li>                  
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul> 
        </nav>
        <SidebarSignOut></SidebarSignOut>
        </div>
    )
}

export default SignOutLinks