import Navbar from './Navbar';
import Home from './Home';
import Aquarium from './Aquarium';
import Listings from './Listings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog';

  return (
    <Router>
        <Navbar />
      <div className="content">
        <Switch> 
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/aquarium">
            <Aquarium />
          </Route>
          <Route path = "/listings">
            <Listings />
          </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
