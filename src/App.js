import React, { useState } from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [getPage, setPage] = useState("about");

  const showPage = page => 
    page === 'about' 
      ? <About /> 
      : page === 'work' 
      ? <Work /> 
      : page === 'contact'
      ? <Contact />
      : '';

  return (
    <>
      <Nav currentPage={setPage} />
      <main>
        {showPage(getPage)}
      </main>
    </>
  );
};

export default App;
