const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllMyCollections,
    postOneMyCollection,
    deleteMyCollection,
    editMyCollection
} = require('./APIs/mycollections')

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// MyCollections
app.get('/mycollections', auth, getAllMyCollections);
app.post('/mycollection', auth, postOneMyCollection);
app.delete('/mycollection/:myCollectionId', auth, deleteMyCollection);
app.put('/mycollection/:myCollectionId', auth, editMyCollection);

// Login and SignUp
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);
app.post('user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);
