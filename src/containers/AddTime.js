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
          input.value = "";
        }}
      >
        Add Time
      </button>
    </div>
  );
};

AddTime = connect()(AddTime);

export default AddTime;
