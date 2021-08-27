import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route}  from 'react-router-dom';

//this code grabs the component passed in from app.js, if user is not logged in, load the sign in page, if user is logged in, load the passed in component.
 const AuthorizedRouteSignedOut = ({component: Component, auth, ...rest}) => {
    return(
        <Route {...rest} render={(props) => (
            auth.uid ? <Component {...props} /> :
                <Redirect to={{
                    pathname : '/SignIn',
                    state : {from : props.location}
                }}/>
        )} />
)
};

const mapStateToProps = (state) => {
     return {
         auth : state.firebase.auth
     }
}

export default connect(mapStateToProps)(AuthorizedRouteSignedOut)