import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import ComponentTwo from "./components/ComponentTwo";

function App() {
  return (
    <div className="App">
      <Counter />
      <ComponentTwo />
    </div>
  );
}

export default App;
