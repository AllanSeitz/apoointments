import React from "react";
import { connect } from "react-redux";
import { addLocation } from "../actions";

let AddLocation = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addLocation(input.value));
          input.value = "";
        }}
      >
        <input
          placeholder="Enter Location"
          ref={node => {
            input = node;
          }}
        />
      </form>
      {/* <button
        onClick={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addLocation(input.value));
          input.value = "";
        }}
      >
        Add Location
      </button> */}
    </div>
  );
};

AddLocation = connect()(AddLocation);

export default AddLocation;
