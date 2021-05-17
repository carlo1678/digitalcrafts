import "./App.css";
import Class from "./Class";
import Weather from "./Weather";

function App() {
  const greeting = "Hello DC Students";
  return (
    <div className="app">
      <h1>App.js</h1>
      <Class greeting={greeting} />
      <Weather />
    </div>
  );
}

export default App;
