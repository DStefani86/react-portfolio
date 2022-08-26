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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>,
  rootElement
  );
};

const Home = () => (
  <div>
    <Nav />
    <h1>Welcome to my site!</h1>
  </div>
);

export default App;
