import Navbar from "./components/Navbar";
import BodyLeft from "./components/BodyLeft";
import BodyRight from "./components/BodyRight";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="body-con">
        <BodyLeft />
        <BodyRight/>
      </div>
    </div>
  );
}

export default App;
