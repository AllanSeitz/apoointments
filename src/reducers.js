import { combineReducers } from "redux";
import {
  ADD_TIME,
  ADD_DAY,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  ADD_LOCATION
} from "./actions";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function days(state = [], action) {
  switch (action.type) {
    case ADD_DAY:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((day, index) => {
        if (index === action.index) {
          return Object.assign({}, day, {
            completed: !day.completed
          });
        }
        return day;
      });
    default:
      return state;
  }
}

function times(state = [], action) {
  switch (action.type) {
    case ADD_TIME:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((time, index) => {
        if (index === action.index) {
          return Object.assign({}, time, {
            completed: !time.completed
          });
        }
        return time;
      });
    default:
      return state;
  }
}

function locations(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((location, index) => {
        if (index === action.index) {
          return Object.assign({}, location, {
            completed: !location.completed
          });
        }
        return location;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  days,
  times,
  locations
});

export default todoApp;
