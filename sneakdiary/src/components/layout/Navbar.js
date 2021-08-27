import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'


const Navbar = (props) => {
    const { auth } =props;
    const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;
    return (
        <nav className="nav-wrapper blue-grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">SneakDiary</Link>
                {isLoaded(auth) && links}
            </div>
        </nav>  
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)