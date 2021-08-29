import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'


const SignInLinks = (props) => {
    return (
        
        <div>
        <nav className="nav-wrapper blue-grey darken-3">
        
        <ul className="right ">
            <li><NavLink to="/"><i class="material-icons">menu</i></NavLink></li>                  
            <li><NavLink to="/mycollections"><i class="material-icons">menu</i></NavLink></li>
            <li><NavLink to="/" onClick={props.signOut}><i class="material-icons">menu</i></NavLink></li>        
            <li><NavLink to="/" className="btn btn-floating light-blue lighten-2">RC</NavLink></li>
        </ul> 
        </nav>
       
         </div>
         
    ) 
    
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

  
  export default connect(null, mapDispatchToProps)(SignInLinks)