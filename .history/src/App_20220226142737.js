import Navbar from './Navbar';
import Home from './Home';
import Aquarium from './Aquarium';
import Listings from './Listings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog';

  // request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html))
  // {
  //   if(!error && response.statusCode==200)
  //   {
  //     const $=cheerio.load(html);
  //     console.log(html);
  //   }
  // }






  return (
    <Router>
      <div className="App">
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
