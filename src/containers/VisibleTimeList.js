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

const mapStateToProps = state => {
  return {
    times: getVisibleTimes(state.times, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTimesClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTimeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeList);

export default VisibleTimeList;
