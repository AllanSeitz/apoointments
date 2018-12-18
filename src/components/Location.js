import React, { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("location was added:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input
              type="time"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </label>
          <p>time ={this.state.value}</p>
        </form>
      </>
    );
  }
}

export default Location;
