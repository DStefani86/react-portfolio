import React from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { render } from "react-dom";
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const rootElement = document.getElementById("root");
function App () {
  render (
    <BrowserRouter>
      <Routes>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/work" exact component={Work}/>
          <Route path="/contact" exact component={Contact}/>
        </div>
      </Routes>
  </BrowserRouter>,
  rootElement
  );
};

const Home = () => (
  <div>
    <h1>Welcome to my site!</h1>
  </div>
);

export default App;
