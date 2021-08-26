import MyCollectionsList from './MyCollectionsList'
import { connect} from 'react-redux'
import React, { Component } from 'react'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'

class MyCollection extends Component {
  render(){
  //console.log(this.props);
  const { mycollections } = this.props;
  return (
    <div className="mycollection container">
      <div className="row">
        <MyCollectionsList mycollections={mycollections}/>
        <div>
          <a
            class="btn-floating btn-large waves-effect waves-light light-blue lighten-2"
            href="/createcollection"
          >
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      mycollections: state.firestore.ordered.mycollections
    
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'mycollections'}
  ])
)(MyCollection);
