import React from "react";
import classes from "./BorderBox.module.css";

const BorderBox = (props) => {
  return (
    <div className={`${classes.borderbox} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default BorderBox;
