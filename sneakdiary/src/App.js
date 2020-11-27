import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import ReleasesDetails from "./components/releases/ReleasesDetails";
import MyCollection from "./components/mycollections/MyCollection";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateMyCollections from "./components/mycollections/CreateMyCollections"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/releases/:id" component={ReleasesDetails} />

          <Route path="/mycollections" component={MyCollection} />
          <Route path="/createcollection" component={CreateMyCollections} />

          <Route path ="/signin" component={SignIn} />
          <Route path ="/signup" component={SignUp} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
