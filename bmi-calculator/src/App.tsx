import "./App.css";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Limitations from "./components/Limitations";
import Result from "./components/Result";

function App() {
  return (
    <div className="space-y-16 lg:space-y-32 mb-32">
      <Hero />
      <Result />
      <Info />
      <Limitations />
    </div>
  );
}

export default App;
