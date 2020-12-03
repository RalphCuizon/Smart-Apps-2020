import MyCollectionsList from './MyCollectionsList'
import { connect} from 'react-redux'
import React, { Component } from 'react'

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
  return {
    mycollections: state.mycollection.mycollections
  }
}
export default connect(mapStateToProps)(MyCollection);
