import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const NavBar = () => (
  <nav>
    Sort By: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </nav>
);

export default NavBar;
