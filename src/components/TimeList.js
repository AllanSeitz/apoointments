import React from "react";
import PropTypes from "prop-types";
import Times from "./Times";

const TimeList = ({ times, onTimesClick }) => (
  <ul>
    {times.map((time, index) => (
      <Times key={index} {...time} onClick={() => onTimesClick(index)} />
    ))}
  </ul>
);

TimeList.propTypes = {
  times: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TimeList;
