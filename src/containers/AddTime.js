import React from "react";
import { connect } from "react-redux";
import { addTime } from "../actions";

let AddTime = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTime(input.value));
          input.value = "";
        }}
      >
        <input
          type="time"
          id="appt"
          name="appt"
          min="9:00"
          max="1700"
          required
          placeholder="Enter Time"
          ref={node => {
            input = node;
          }}
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTime(input.value));
            input.value = "";
          }}
        />
        <span className="validity" />
      </form>
      <button
        onClick={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTime(input.value));
          input.value = "";
        }}
      >
        Add Time
      </button>
    </div>
  );
};

export default connect()(AddTime);
