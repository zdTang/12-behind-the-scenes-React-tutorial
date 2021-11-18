import React, { useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
function App() {
  console.log("App loaded!");
  const [isDisplay, setIsDisplay] = useState(false);
  const clickHandler = (e) => {
    console.log("state changed.");
    e.preventDefault();
    setIsDisplay((isDisplay) => !isDisplay);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isDisplay} />
      {isDisplay && <h1>Maybe dispaly</h1>}
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
