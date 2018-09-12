import React, { Component } from 'react';

export default class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hours: '00', minutes: '00', seconds: '00' };
  }
  setTime() {
    const currentdate = new Date();
    let hours = currentdate.getUTCHours() + this.props.offset;

    // correct for number over 24, and negatives
    if (hours >= 24) { hours -= 24; }
    if (hours < 0) { hours += 12; }

    // add leading zero, first convert hours to string
    hours += '';
    if (hours.length == 1) { hours = `0${hours}`; }

    // minutes are the same on every time zone
    let minutes = currentdate.getUTCMinutes();

    // add leading zero, first convert hours to string
    minutes += '';
    if (minutes.length == 1) { minutes = `0${minutes}`; }

    let seconds = currentdate.getUTCSeconds();
    if (seconds < 10) { seconds = `0${seconds}`; }

    // Only set state when a clock is in the page
    if (this.refs) {
      if (this.refs.clock) {
        this.setState({
          hours,
          minutes,
          seconds,
        });
      }
    }
  }
  componentWillMount() {
    this.setTime();
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setTime();
    }, 1000);
  }
  render() {
    return (
      <div>
        <span id="clock" ref="clock" className="lh3">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </span>
      </div>
    );
  }
}
