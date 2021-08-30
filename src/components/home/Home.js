import IntroductionCard from "./IntroductionCard"
import ReleasesList from "../releases/ReleasesList"
import React, { Component } from "react"
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

class Home extends React.Component {

  
render(){
  //console.log(this.props);
  const { releases } = this.props;
  return (
    <div className="home container">
      <div className="row">
        <IntroductionCard />
        <ReleasesList releases={releases}/>
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
      releases: state.firestore.ordered.releases
    
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'releases',
    orderBy: ['releaseDate', 'asc'],
  }
  ])
)(Home);
