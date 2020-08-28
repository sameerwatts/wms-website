import React, { Fragment } from "react";
import "./style.css";

const Button = (props) => {
  return (
    <Fragment>
      <button
        className={`buttonStyleBasic fs-18 ${
          props.className ? props.className : ""
        }`}
        onClick={props.click}
        onSubmit={props.submit}
        type={props.type}
        ref={props.buttonRef}
        disabled={props.disabled}
      >
        {props.btnText}
      </button>
    </Fragment>
  );
};

export default Button;
