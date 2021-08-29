import "./styles.css"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Redirect } from 'react-router-dom'
import React, { Component } from "react"
import moment from "moment"
import { deleteMyCollections, updateMyCollections } from "../../store/actions/myCollectionsActions"




class MyCollectionsDetails extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })

  }
  handleSubmit = (e) => {
    const { id } = this.props
    e.preventDefault()
    console.log(this.state)
    this.props.updateMyCollections(this.state,id)
    this.props.history.push('/mycollections')
  }
  handleDelete = (e) => {
    const { id } = this.props
    e.preventDefault()
    this.props.deleteMyCollections(this.state,id)
        this.props.history.push('/mycollections')
  }
  render() {
    const { mycollection, auth } = this.props
    if (!auth.uid) return <Redirect to='/Signin'></Redirect>
    if (mycollection) {
      return (
      <div class="row">
      <div class="col s12 m2 l2"></div>
      <div class="col s12 m8 l8">
    <div class="card horizontal mycollections-details">
      <div class="card-stacked">
        <div class="card-content blue-grey-text text-darken-3">
            <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="text" id="sneakerName"  placeholder={mycollection.sneakerName} onChange={this.handleChange} />
            <label className="active" htmlFor="sneakerName" >Sneaker Name</label>
          </div>
          <div className="input-field">
            <input
              type="date"
              id="dateOfPurchase"
              onChange={this.handleChange}
              defaultDate={mycollection.dateOfPurchase}
            />
            <label className="active" htmlFor="dateOfPurchase">Date of Purchase {moment(mycollection.dateOfPurchase).format('L')}</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="purchasePrice"
              onChange={this.handleChange}
              placeholder={mycollection.purchasePrice}
            />
            <label class="active" htmlFor="purchasePrice">Purchase Price</label>
          </div>
          <div className="input-field">
            <input type="number" id="size" placeholder={mycollection.size} onChange={this.handleChange} />
            <label class="active" htmlFor="size">Size</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="sellingPrice"
              onChange={this.handleChange}
              placeholder={mycollection.sellingPrice}
            />
            <label class="active" htmlFor="sellingPrice">Selling Price</label>
          </div>
          <div className="input-field">
            <input type="number" id="soldPrice" value={mycollection.soldPrice} onChange={this.handleChange} />
            <label class="active" htmlFor="soldPrice">(if sold) Sold Price</label>
          </div>
          <div className="input-field">
            <button  className="btn light-blue lighten-2 ">Update</button>
          </div>
         
        </form>
          </div>
          <div className="input-filed">
            <button  onClick={this.handleDelete} className="btn light-blue lighten-2 ">Delete</button>
          </div>
      </div>
    </div>
  </div>
  <div class="col s12 m2 l2"></div>
  </div>
  )
    } else {
      return (
          <div className="container center">
            <p>Loading collection...</p>
          </div>

          
        )
    }

 
}
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const mycollections = state.firestore.data.mycollections
  const mycollection = mycollections ? mycollections[id] : null
  console.log(id)
  return {
    mycollection : mycollection,
    auth: state.firebase.auth,
    id: id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMyCollections: (mycollection, id) => dispatch(deleteMyCollections(mycollection, id)),
    updateMyCollections: (mycollection, id) => dispatch(updateMyCollections(mycollection, id)),

  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect ([
    {collection: 'mycollections'}
  ])
)(MyCollectionsDetails)