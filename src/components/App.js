import React from "react";
import Footer from "./Footer";
import AddDay from "../containers/AddDay";
import AddTime from "../containers/AddTime";
import AddLocation from "../containers/AddLocation";
import VisibleTodoList from "../containers/VisibleTodoList";
import VisibleTimeList from "../containers/VisibleTimeList";
import VisibleLocationList from "../containers/VisibleLocationList";

const App = () => (
  <div className="container">
    <h2>Agenda</h2>
    <p className="lead">
      This agenda viewer will let you see multiple events cleanly!
    </p>
    <div className="agenda">
      <div className="table-responsive">
        <table className="table table-condensed table-bordered">
          <thead>
            <tr>
              <th>
                <strong>Date</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="agenda-date info" rowSpan="1">
                <AddDay />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>
                <strong>Time</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="agenda-date success" rowSpan="1">
                <AddTime />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>
                <strong>Location</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="agenda-date danger" rowSpan="1">
                <AddLocation />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div />
    <h1>Events</h1>
    <h3>
      Week day = <VisibleTodoList />
    </h3>

    <h3>
      Time of Day = <VisibleTimeList />
    </h3>
    <h3>
      Set Location = <VisibleLocationList />
    </h3>
    <h3>
      <Footer />
    </h3>
  </div>
);

export default App;
