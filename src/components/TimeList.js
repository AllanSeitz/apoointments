import React from "react";
import PropTypes from "prop-types";
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

TimeList.PropTypes = {
  times: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTimesClick: PropTypes.func.isRequired
};

export default TimeList;
