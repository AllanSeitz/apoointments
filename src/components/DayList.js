import React from "react";
import propTypes from "prop-types";
import Days from "./Days";

const DayList = ({ days, onTodoClick }) => (
  <span>
    {days.map((day, index) => (
      <Days key={index} {...day} onClick={() => onTodoClick(index)} />
    ))}
  </span>
);

DayList.propTypes = {
  days: propTypes.arrayOf(
    propTypes.shape({
      // id: propTypes.number.isRequired,
      completed: propTypes.bool.isRequired,
      text: propTypes.string.isRequired
    }).isRequired
  ).isRequired
  // onTodoClick: propTypes.func.isRequired
};

export default DayList;
