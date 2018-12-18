import React from "react";
import propTypes from "prop-types";
import Times from "./Times";

const TimeList = ({ times, onTimesClick }) => (
  <span>
    {times.map((time, index) => (
      <Times key={index} {...time} onClick={() => onTimesClick(index)} />
    ))}
  </span>
);

TimeList.propTypes = {
  times: propTypes.arrayOf(
    propTypes.shape({
      // id: propTypes.number.isRequired,
      completed: propTypes.bool.isRequired,
      text: propTypes.string.isRequired
    }).isRequired
  ).isRequired
  // onTodoClick: propTypes.func.isRequired
};

export default TimeList;
