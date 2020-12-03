import authReducer from './authReducer'
import mycollectionsReducer from './mycollectionsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    mycollection: mycollectionsReducer
})

export default rootReducer