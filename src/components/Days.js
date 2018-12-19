import React from "react";
import propTypes from "prop-types";

const Days = ({ onClick, completed, text }) => (
  <span
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </span>
);

Days.propTypes = {
  onClick: propTypes.func.isRequired,
  completed: propTypes.bool.isRequired,
  text: propTypes.string.isRequired
};

export default Days;
