import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TimeList from "../components/TimeList";

const getVisibleTimes = (times, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return times.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return times.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return times;
  }
};

const mapStateToProps = state => ({
  times: getVisibleTimes(state.times, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTimesClick: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeList);
