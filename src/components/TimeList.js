import React from "react";
import propTypes from "prop-types";
import Times from "./Times";

const TimeList = ({ times, onTimesClick }) => (
  <ul className="list-group">
    <li className="list-group-item list-group-item-warning">
      Time:{" "}
      {times.map((time, index) => (
        <li>
          <Times key={index} {...time} onClick={() => onTimesClick(index)} />
        </li>
      ))}
    </li>
  </ul>
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
