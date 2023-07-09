import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Glasses/header";
import ListGlasses from "./Glasses/list-glasses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-img">
      <div className="overlay">
        <Header />
        <ListGlasses />
      </div>
    </div>
  );
}

export default App;
