import React from "react";
import PropTypes from "prop-types";
import Days from "./Days";

const DayList = ({ days, onTodoClick }) => (
  <span>
    {days.map((day, index) => (
      <Days key={index} {...day} onClick={() => onTodoClick(index)} />
    ))}
  </span>
);

DayList.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default DayList;
