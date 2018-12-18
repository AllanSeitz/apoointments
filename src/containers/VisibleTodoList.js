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

const mapStateToProps = state => {
  return {
    days: getVisibleDays(state.days, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayList);

export default VisibleTodoList;
