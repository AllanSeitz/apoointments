import React from "react";
import NavBar from "./NavBar";
import AddEvent from "../containers/AddEvent";
import AddDay from "../containers/AddDay";
import AddTime from "../containers/AddTime";
import AddLocation from "../containers/AddLocation";
import VisibleTodoList from "../containers/VisibleTodoList";
import VisibleTimeList from "../containers/VisibleTimeList";
import VisibleLocationList from "../containers/VisibleLocationList";

const App = () => (
  <div className="container">
    <div className="Main">
      <div className="jumbotron">
        <h3>Trifin Labs Agenda</h3>
        <p>Select Date/ Time/ Location</p>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Date</h3>
        </div>
        <div class="panel-body">
          <AddDay />
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Time</h3>
        </div>
        <div class="panel-body">
          <AddTime />
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h4 class="panel-title">Location</h4>
        </div>
        <div class="panel-body">
          <AddLocation />
        </div>
      </div>
      <AddEvent />
    </div>
    <h1>Events</h1>
    <ul>
      <li>
        <VisibleTodoList />
      </li>
    </ul>
    <ul>
      <li>
        <VisibleTimeList />
      </li>
    </ul>
    <ul>
      <li>
        <VisibleLocationList />
      </li>
    </ul>
    <NavBar />
  </div>
);

export default App;
