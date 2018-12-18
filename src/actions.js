export const ADD_DAY = "ADD_DAY";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const ADD_TIME = "ADD_TIME";
export const ADD_LOCATION = "ADD_LOCATION";
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
export function addLocation(text) {
  return { type: ADD_LOCATION, text };
}

export function addDay(text) {
  return { type: ADD_DAY, text };
}

// TOGGLE FUNCTIONS

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
