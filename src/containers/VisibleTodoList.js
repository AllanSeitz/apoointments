import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import DayList from "../components/DayList";

const getVisibleDays = (days, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return days.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return days.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return days;
  }
};

const mapStateToProps = state => ({
  days: getVisibleDays(state.days, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onDayClick: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayList);
