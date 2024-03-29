import authReducer from './authReducer'
import mycollectionsReducer from './mycollectionsReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    mycollection: mycollectionsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer