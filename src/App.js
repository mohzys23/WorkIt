import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Routers from './Components/Routers';
import Books from './Pages/Books';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

     
      <Router>
      <Routers />
                <Switch>
                 <Route exact path="/contact" component={Contact} />
                  <Route exact path="/books" component={Books} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route  path="/" component={Home} />
                </Switch>

                <Footer />
      </Router>

      
    </div>
  );
}

export default App;
