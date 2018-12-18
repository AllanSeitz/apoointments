import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import LocationsList from "../components/LocationsList";

const getVisibleLocations = (locations, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return locations.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return locations.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return locations;
  }
};

const mapStateToProps = state => {
  return {
    locations: getVisibleLocations(state.locations, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLocationsClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleLocationsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsList);

export default VisibleLocationsList;
