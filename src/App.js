import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Routers from './Components/Routers';
import Books from './Components/Books';


function App() {
  return (
    <div className="App">

     
      <Router>
      <Routers />
                <Switch>
                  <Route exact path="/books" component={Books} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route  path="/" component={Home} />
                </Switch>
      </Router>

      
    </div>
  );
}

export default App;
