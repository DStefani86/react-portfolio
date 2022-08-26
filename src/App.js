import React from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/work" exact component={Work}/>
        <Route path="/contact" exact component={Contact}/>
      </div>
    </Router>
  
  );
};

const Home = () => (
  <div>
    <h1>Welcome to my site!</h1>
  </div>
);

export default App;
