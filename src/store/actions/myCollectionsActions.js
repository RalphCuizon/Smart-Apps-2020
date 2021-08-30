export const createMyCollections = (mycollection) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid
      firestore.collection('mycollections').add({
        ...mycollection,
        createdAt: new Date(),
        userId:userId
    
      }).then(() => {
        dispatch({ type: 'CREATE_MYCOLLECTIONS', mycollection });
      }).catch((err) => {
        dispatch({ type: 'CREATE_MYCOLLECTIONS_ERROR', err });
      })
    }
  };

  export const updateMyCollections = (mycollection,id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('mycollections').doc(id).update({
        ...mycollection,
      }).then(() => {
        dispatch({ type: 'UPDATE_MYCOLLECTIONS', mycollection });
      }).catch((err) => {
        dispatch({ type: 'UPDATE_MYCOLLECTIONS_ERROR', err });
      })
    }
  };

  export const deleteMyCollections = (mycollection, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('mycollections').doc(id).delete({
      }).then(() => {
        dispatch({ type: 'DELETE_MYCOLLECTIONS', mycollection });
      }).catch((err) => {
        dispatch({ type: 'DELETE_MYCOLLECTIONS_ERROR', err });
      })
    }
  };