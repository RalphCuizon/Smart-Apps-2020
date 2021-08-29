import MyCollectionsList from './MyCollectionsList'
import { connect} from 'react-redux'
import React, { Component } from 'react'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'

class MyCollection extends Component {
  render(){
  //console.log(this.props);
  const { mycollections } = this.props;

 // if (!auth.uid) return <Redirect to='/SignIn' />
  return (
    <div className="mycollection container">
      <div className="row">
        <MyCollectionsList mycollections={mycollections}/>
        <div>
          <a
            className="btn-floating btn-large waves-effect waves-light light-blue lighten-2"
            href="/createcollection"
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
      mycollections: state.firestore.ordered.mycollections,
      //auth: state.firebase.auth,
      userId: state.firebase.auth.uid
    
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
    { collection: 'mycollections',
    where: [['userId', '==', props.userId ? props.userId: null]]
  }

  ]})
)(MyCollection);
