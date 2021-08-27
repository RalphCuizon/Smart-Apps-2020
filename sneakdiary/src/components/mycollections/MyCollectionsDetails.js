import "./styles.css"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import moment from "moment"
import { Redirect } from 'react-router-dom'

const MyCollectionsDetails = (props) => {
    const { mycollection, auth } = props
    if (!auth.uid) return <Redirect to='/Signin'></Redirect>
    if (mycollection) {
      return (
      <div class="row">
      <div class="col s12 m2 l2"></div>
      <div class="col s12 m8 l8">
    <div class="card horizontal mycollections-details">
      <div class="card-image">
        <img  alt="sneaker" classname="mycollectionsdetailsphoto" src="https://pixabay.com/get/gaded274c88c16560ad3e42eaaea106ccf88c84784bc740c714be18fed31da857757bd96a332474cdecd181fc4fcf3834_640.png"/>
      </div>
      <div class="card-stacked">
        <div class="card-content blue-grey-text text-darken-3">
        <span className="card-title">{mycollection.sneakerName}</span>
            <p><b>Size</b>: {mycollection.size}</p>
            <p><b>Date of Purchase</b>: {moment(mycollection.dateOfPurchase).format('L')}</p>
            <p><b>Purchase Price</b>: {mycollection.purchasePrice} €</p>
            <p><b>Selling Price</b>: {mycollection.sellingPrice} €</p>
            <p><b>Sold Price</b>: {mycollection.soldPrice} €</p>
          </div>
          <div class="card-action">
            <a href="#">Update</a>
            <a href="#">Delete</a>
          </div>
      </div>
    </div>
  </div>
  <div class="col s12 m2 l2"></div>
  </div>)
    } else {
      return (
          <div className="container center">
            <p>Loading collection...</p>
          </div>
        )
    }
    console.log(props);
 
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const mycollections = state.firestore.data.mycollections
  const mycollection = mycollections ? mycollections[id] : null
  return {
    mycollection : mycollection,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect ([
    {collection: 'mycollections'}
  ])
)(MyCollectionsDetails)