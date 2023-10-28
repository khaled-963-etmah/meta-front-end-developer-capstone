import React from "react";


import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
