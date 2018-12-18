import React from "react";
import propTypes from "prop-types";
import Locations from "./Locations";

const LocationsList = ({ locations, onLocationsClick }) => (
  <span>
    {locations.map((location, index) => (
      <Locations
        key={index}
        {...location}
        onClick={() => onLocationsClick(index)}
      />
    ))}
  </span>
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
