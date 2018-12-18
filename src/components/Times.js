import React from "react";
import propTypess from "prop-types";

const Times = ({ onClick, completed, text }) => (
  <span
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </span>
);

Times.propTypess = {
  onClick: propTypess.func.isRequired,
  completed: propTypess.bool.isRequired,
  text: propTypess.string.isRequired
};

export default Times;
