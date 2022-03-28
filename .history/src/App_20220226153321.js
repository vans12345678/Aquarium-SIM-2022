import Navbar from "./Navbar";
import Home from "./Home";
import Aquarium from "./Aquarium";
import Listings from "./Listings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const title = "Welcome to the new blog";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Button>TEST</Button>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aquarium">
              <Aquarium />
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
