import React, { Component } from "react"
import { connect } from "react-redux"

import { createMyCollections } from "../../store/actions/myCollectionsActions"

class CreateMyCollections extends Component {
  
  state = {
    sneakerName: "",
    dateOfPurchase: "",
    purchasePrice: 0,
    size: 0,
    sellingPrice: 0,
    soldPrice: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createMyCollections(this.state)
    this.props.history.push('/mycollections')
  }
  render() {

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create One Collection</h5>
          <div className="input-field">
            <input type="text" id="sneakerName"className="validate"  onChange={this.handleChange} />
            <label htmlFor="sneakerName">Sneaker Name</label>
          </div>
          <div className="input-field">
            <input
              type="date"
              id="dateOfPurchase"
              onChange={this.handleChange}
              className="validate"
            />
            <label htmlFor="dateOfPurchase">Date of Purchase</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="purchasePrice"
              onChange={this.handleChange}
              className="validate"
            />
            <label htmlFor="purchasePrice">Purchase Price</label>
          </div>
          <div className="input-field">
            <input type="number" id="size" className="validate" onChange={this.handleChange} />
            <label htmlFor="size">Size</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="sellingPrice"
              onChange={this.handleChange}
              className="validate"
            />
            <label htmlFor="sellingPrice">Selling Price</label>
          </div>
          <div className="input-field">
            <input type="number" id="soldPrice" className="validate" onChange={this.handleChange} />
            <label htmlFor="soldPrice">(if sold) Sold Price</label>
          </div>
          <div className="input-field">
            <button className="btn light-blue lighten-2 ">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMyCollections: (mycollection) =>
      dispatch(createMyCollections(mycollection)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMyCollections)
