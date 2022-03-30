import NavBar from "./Navbar";
import Home from "./Home";
import Aquarium from "./Aquarium";
import Compendium from "./Compendium";
import Listings from "./Listings";
import FishProfile from "./FishProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "react-bootstrap";
import BackToTop from "./BackToTop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const title = "Welcome to the new blog";

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aquarium">
              <Aquarium />
            </Route>
            <Route path='/Compendium'>
              <Compendium />
            </Route>
            <Route path="/Fishprofile/:FishName">
              <FishProfile />
            </Route>
            <Route path="/listings">
              <Listings />
            </Route>
            <Route path="/listings">
              <Listings />
            </Route>
          </Switch>
          <BackToTop />
        </div>
      </div>
    </Router>
  );
}

export default App;
