import React, { useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
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
      <DemoOutput show={false} />
      {isDisplay && <h1>Maybe dispaly</h1>}
      <Button onClick={clickHandler}>Click me</Button>
    </div>
  );
}

export default App;
