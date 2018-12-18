import React from "react";
import PropTypes from "prop-types";
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
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default LocationsList;
