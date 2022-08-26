import React, { useState } from "react";
import Nav from "./components/Nav";
import Apps from "./components/Apps";
import About from "./components/About";

const App = () => {
  const [getPage, setPage] = useState("apps");

  const showPage = page => 
    page === 'about' 
      ? <About /> 
      : page === 'apps' 
      ? <Apps /> 
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

