import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div class="container">
    <h2>Agenda</h2>
    <p class="lead">
      This agenda viewer will let you see multiple events cleanly!
    </p>

    <div class="agenda">
      <div class="table-responsive">
        <table class="table table-condensed table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="agenda-date" class="danger" rowspan="1">
                <div class="dayofweek">
                  Monday
                  <AddTodo />
                </div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                  <VisibleTodoList />
                </div>
              </td>
            </tr>
            <tr>
              <td class="agenda-date" class="primary" rowspan="1">
                <div class="dayofweek">
                  Tuesday
                  <AddTodo />
                </div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                    <VisibleTodoList />
                </div>
              </td>
            </tr>
            <tr>
              <td class="agenda-date" class="danger" rowspan="1">
                <div class="dayofweek">
                  Wenedsday <AddTodo />
                </div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                    Fishing
                </div>
              </td>
            </tr>
            <tr>
              <td class="agenda-date" class="primary" rowspan="1">
                <div class="dayofweek">
                  Thursday
                  <AddTodo />
                </div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                    Fishing
                </div>
              </td>
            </tr>
            <tr>
              <td class="agenda-date" class="primary" rowspan="1">
                <div class="dayofweek">Friday</div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                    Fishing
                </div>
              </td>
            </tr>
            <tr>
              <td class="agenda-date" class="active" rowspan="1">
                <div class="dayofweek">Saturday</div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                    Fishing
                </div>
              </td>
            </tr>
            <tr>
              <td class="agenda-date" class="active" rowspan="1">
                <div class="dayofweek">Sunday</div>
              </td>
              <td class="agenda-time">5:30 AM</td>
              <td class="agenda-events">
                <div class="agenda-event">
                  <i
                    class="glyphicon glyphicon-repeat text-muted"
                    title="Repeating event"
                  />
                   
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <AddTodo />
    {","}
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
