export const createMyCollections = (mycollection) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('mycollections').add({
        ...mycollection,
        userId: 12345,
        createdAt: new Date()
    
      }).then(() => {
        dispatch({ type: 'CREATE_MYCOLLECTIONS', mycollection });
      }).catch((err) => {
        dispatch({ type: 'CREATE_MYCOLLECTIONS_ERROR', err });
      })
    }
  };