import React from "react";
import PropTypes from "prop-types";
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

LocationsList.PropTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onLocationClick: PropTypes.func.isRequired
};

export default LocationsList;
