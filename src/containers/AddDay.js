import React from "react";
import { connect } from "react-redux";
import { addDay } from "../actions";

let AddDay = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addDay(input.value));
          input.value = "";
        }}
      >
        <input
          type="date"
          placeholder="Enter Day"
          ref={node => {
            input = node;
          }}
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addDay(input.value));
            input.value = "";
          }}
        />
      </form>
      <button
        onClick={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addDay(input.value));
          input.value = "";
        }}
      >
        Add Day
      </button>
    </div>
  );
};

AddDay = connect()(AddDay);

export default AddDay;
