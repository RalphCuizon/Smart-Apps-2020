import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/home/Home"
import ReleasesDetails from "./components/releases/ReleasesDetails"
import MyCollection from "./components/mycollections/MyCollection"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateMyCollections from "./components/mycollections/CreateMyCollections"
import MyCollectionsDetails from "./components/mycollections/MyCollectionsDetails"
import AuthorizedRouteSignedOut from "./components/auth/AuthorizedRouteSignedOut"
import { connect } from "react-redux"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/releases/:id" component={ReleasesDetails} />

          <AuthorizedRouteSignedOut
            path="/mycollections"
            component={MyCollection}
          />
          <Route path="/mycollection/:id" component={MyCollectionsDetails} />
          <Route path="/createcollection" component={CreateMyCollections} />

          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(App);
