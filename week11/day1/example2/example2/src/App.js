import "./App.css";
import Count from "./Count";
import Sentence from "./Sentence";
import Picture from "./Picture";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Count />
      <h1>Change the Sentence!</h1>
      <Sentence />
      <h1>Cat!</h1>
      <Picture />
    </div>
  );
}

export default App;
