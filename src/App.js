import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils_by_Yasmeen" aboutText="About us" />
      <About />
      <div className="container">
        <TextForm heading="Enter your Text to analayze" />
      </div>
    </>
  );
}

export default App;
