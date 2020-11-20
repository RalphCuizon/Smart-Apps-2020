import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import ReleasesDetails from "./components/releases/ReleasesDetails";
import MyCollection from "./components/mycollections/MyCollection";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/releases/:id" component={ReleasesDetails} />
          <Route path="/mycollections" component={MyCollection} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
