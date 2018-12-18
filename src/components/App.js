import React from "react";
import Footer from "./Footer";
import AddDay from "../containers/AddDay";
import AddTime from "../containers/AddTime";
import VisibleTodoList from "../containers/VisibleTodoList";
import VisibleTimeList from "../containers/VisibleTimeList";
// import Location from "./Location";

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
        </table>
      </div>
    </div>
    <div />
    <h1>Events</h1>
    <table>
      <tbody>
        <tr>
          <p>Week day = </p>

          <td>
            <VisibleTodoList />
          </td>
        </tr>
        <tr>
          <p>time of day = </p>
          <td>
            <VisibleTimeList />
          </td>
        </tr>
      </tbody>
    </table>
    {/* <Location /> */}
    <Footer />
  </div>
);

export default App;
