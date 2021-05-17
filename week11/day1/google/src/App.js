import "./App.css";
import Navbar from "./components/Navbar";
import Google from "./components/Google";
import Input from "./components/Input";
import Button from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Google />
      <Input />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
