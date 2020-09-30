import React from "react";
import "./App.css";
import Top from "./components/top";
import Middle from "./components/middle";
import Bottom from "./components/bottom";
import Burgers from "./components/burgers";

function App() {
  return (
    <div className="App">
      <Burgers />
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
