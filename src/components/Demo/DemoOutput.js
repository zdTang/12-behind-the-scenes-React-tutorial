import React from "react";

//  the components will be re-evaluated once the state is changed
//  while, that is not to say, the DOM will be re-rendered surely.
//  As diff process will check if the re-render DOM is necessary
const DemoOutput = (props) => {
  console.log("DemoOutput");
  return <p>{props.show ? "this is new" : "this is new"}</p>;
};

export default DemoOutput;
