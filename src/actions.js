export const ADD_DAY = "ADD_DAY";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_TIME = "TOGGLE_TIME";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const ADD_TIME = "ADD_TIME";
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

/*
 * action creators
 */

export function addTime(text) {
  return { type: ADD_TIME, text };
}

export function addDay(text) {
  return { type: ADD_DAY, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}
export function toggleTimes(index) {
  return { type: TOGGLE_TIME, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
