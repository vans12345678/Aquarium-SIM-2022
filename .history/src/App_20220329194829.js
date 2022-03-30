import NavBar from "./Navbar";
import Home from "./Home";
import Aquarium from "./Aquarium";
import Compendium from "./Compendium";
import Listings from "./Listings";
import { useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const title = "Welcome to the new blog";

  const {path, url } = useRouteMatch();
  
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
            <Route path="/Compendium" element={<Compendium />}>

            </Route>
            <Route path="/listings">
              <Listings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
