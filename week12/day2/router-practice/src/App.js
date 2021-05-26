import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/componentone">First One</Link>
            <Link to="/componenttwo">Second One</Link>
            <Link to="/componentthree">Third One</Link>
          </nav>
          <h1>Router Practice!</h1>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/componentone">
          <ComponentOne />
        </Route>
        <Route path="/componenttwo">
          <ComponentTwo />
        </Route>
        <Route path="/componentthree">
          <ComponentThree />
        </Route>
      </Router>
    </div>
  );
}

export default App;
