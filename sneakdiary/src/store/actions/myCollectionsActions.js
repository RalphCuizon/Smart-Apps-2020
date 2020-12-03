export const createMyCollections = (mycollection) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_MYCOLLECTIONS', mycollection });
    }
  };