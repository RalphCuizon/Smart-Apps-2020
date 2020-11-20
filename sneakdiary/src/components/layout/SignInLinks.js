import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>        
            <li><NavLink to="/">General Releases</NavLink></li>            
            <li><NavLink to="/">My Collection</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>          
            <li><NavLink to="/" className="btn btn-floating light-blue lighten-2">RC</NavLink></li>
        </ul> 
    )
}

export default SignInLinks