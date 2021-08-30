const initState = {
    releases: [
        {sneakerTitle: 'yeezy', sneakerInfo: 'Info', price: '43', dateOfPurchase: '19/09/2018'},
        {sneakerTitle: 'yeezy 2', sneakerInfo: 'Info', price: '43', dateOfPurchase: '19/10/2018'},
        {sneakerTitle: 'yeezy 3', sneakerInfo: 'Info', price: '43', dateOfPurchase: '19/11/2018'}
      ]
}

const releasesReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_RELEASES':
        console.log('created a release', action.mycollection);
        return state;
      case 'CREATE_RELEASES_ERROR':
        console.log('created a release error', action.err);
        return state;
      default:
        return state;
    }
  };

export default releasesReducer;