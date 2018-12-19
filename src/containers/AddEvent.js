import React from "react";
import { connect } from "react-redux";
import { addDay } from "../actions";
import { addTime } from "../actions";

let AddEvent = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form>
        <input
          type="date"
          placeholder="Enter Day"
          ref={node => {
            input = node;
          }}
        />
      </form>
      <form>
        <input
          type="time"
          id="appt"
          name="appt"
          min="9:00"
          max="1700"
          placeholder="Enter Time"
          ref={node => {
            input = node;
          }}
        />
      </form>
      <button
        onClick={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTime(input.value));
          dispatch(addDay(input.value));
          input.value = "";
        }}
      >
        Add Event
      </button>
    </div>
  );
};

export default connect()(AddEvent);
