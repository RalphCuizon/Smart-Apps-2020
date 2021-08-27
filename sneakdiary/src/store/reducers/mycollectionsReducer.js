const initState = {
    mycollections: [
        {id: '1', sneakerName: 'Sneaker 1', size: '43', dateOfPurchase: '19/09/2018', purchasePrice: '190', sellingPrice: '300'},
        {id: '2', sneakerName: 'Sneaker 2', size: '42', dateOfPurchase: '19/09/2020', purchasePrice: '180', sellingPrice: '200'},
        {id: '3', sneakerName: 'Sneaker 3', size: '43', dateOfPurchase: '19/06/2018', purchasePrice: '100', sellingPrice: '300'}
      ]
}

const mycollectionsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MYCOLLECTIONS':
      console.log('created my collection', action.mycollection);
      return state;
    case 'CREATE_MYCOLLECTIONS_ERROR':
      console.log('created my collection error', action.err);
      return state;
      case 'UPDATE_MYCOLLECTIONS':
        console.log('update my collection', action.mycollection);
        return state;
      case 'UPDATE_MYCOLLECTIONS_ERROR':
        console.log('update my collection error', action.err);
        return state;
    default:
      return state;
  }
};

export default mycollectionsReducer;