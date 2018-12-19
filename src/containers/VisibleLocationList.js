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

const mapStateToProps = state => ({
  locations: getVisibleLocations(state.locations, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onLocationsClick: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsList);
