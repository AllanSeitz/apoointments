import React from "react";
import PropTypes from "prop-types";
import Days from "./Days";

const DayList = ({ days, onDayClick }) => (
  <ul class="list-group">
    <li class="list-group-item list-group-item-success">
      Week Day:{" "}
      {days.map((day, index) => (
        <li>
          {" "}
          <Days key={index} {...day} onClick={() => onDayClick(index)} />{" "}
        </li>
      ))}
    </li>
  </ul>
);

DayList.PropTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDayClick: PropTypes.func.isRequired
};

export default DayList;
