import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const NavBar = () => (
  <nav>
    <ul class="pagination">
      <li class="disabled">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      </li>
      <li class="active">
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      </li>
      <li class="active">
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
