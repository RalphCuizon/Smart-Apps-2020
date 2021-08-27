import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'


const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>                  
            <li><NavLink to="/mycollections">My Collection</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>        
            <li><NavLink to="/" className="btn btn-floating light-blue lighten-2">RC</NavLink></li>
        </ul> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignInLinks)