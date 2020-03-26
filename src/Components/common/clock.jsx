import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    // Initial
    this.state = { time: new Date() };
  }

  // We want to set up a timer whenever the Clock is rendered to the DOM the first time
  componentDidMount() {
    // We saved the timer ID right on this
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // We also want to clear the timer whenever the DOM produced by the Clock is removed
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    clearInterval(this.timerID);
  }

  // Clock will run this method every second
  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return <h6 align="right">{this.state.time.toLocaleTimeString()}</h6>;
  }
}

export default Clock;
