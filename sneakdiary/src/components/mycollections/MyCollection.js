import MyCollectionsList from './MyCollectionsList'
import { connect} from 'react-redux'
import React, { Component } from 'react'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

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
  console.log(state.firebase.auth.uid)
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
