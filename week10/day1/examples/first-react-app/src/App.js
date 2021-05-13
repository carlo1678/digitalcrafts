import "./App.css";
import Sidebar from "./components/Sidebar";
import AboutContainer from "./components/AboutContainer";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Carlo Carbonell</h1>
      <h4 className="heading1">
        Aspiring Jr. Software Developer with a knack for tech and a willingness
        to learn!
      </h4>
      <Sidebar />
      <AboutContainer />
    </div>
  );
}

export default App;
