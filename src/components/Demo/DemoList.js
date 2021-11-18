import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = items.sort((a, b) => a - b);
  console.log("DemoList RUNNING");

  // const sortedList = useMemo(() => {
  //   console.log('Items sorted');
  //   return items.sort((a, b) => a - b);
  // }, [items]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
