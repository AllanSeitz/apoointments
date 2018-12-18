import React from "react";
import propTypes from "prop-types";
import Locations from "./Locations";

const LocationsList = ({ locations, onLocationsClick }) => (
  <ul className="list-group">
    <li className="list-group-item list-group-item-info">
      Location:{" "}
      {locations.map((location, index) => (
        <li>
          <Locations
            key={index}
            {...location}
            onClick={() => onLocationsClick(index)}
          />
        </li>
      ))}
    </li>
  </ul>
);

LocationsList.propTypes = {
  locations: propTypes.arrayOf(
    propTypes.shape({
      // id: propTypes.number.isRequired,
      completed: propTypes.bool.isRequired,
      text: propTypes.string.isRequired
    }).isRequired
  ).isRequired
  // onTodoClick: propTypes.func.isRequired
};

export default LocationsList;
