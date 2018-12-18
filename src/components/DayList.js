import React from "react";
import propTypes from "prop-types";
import Days from "./Days";

const DayList = ({ days, onTodoClick }) => (
  <ul class="list-group">
    <li class="list-group-item list-group-item-success">
      Week Day:{" "}
      {days.map((day, index) => (
        <li>
          {" "}
          <Days key={index} {...day} onClick={() => onTodoClick(index)} />{" "}
        </li>
      ))}
    </li>
  </ul>
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
