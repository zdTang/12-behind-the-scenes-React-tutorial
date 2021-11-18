import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput");
  return <p>{props.show ? "this is new" : "this is new"}</p>;
};

export default DemoOutput;
