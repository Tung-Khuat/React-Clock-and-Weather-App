import React, { Component } from 'react';
import { timerStatus } from '../../../utils/constants';
import Time from '../../../utils/get-time';

const time = new Time();

export default class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      status: null,
      timeInterval: 0,
      markedTimes: [],
    };
    this.startStopwatch = this.startStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    this.pauseStopwatch = this.pauseStopwatch.bind(this);
    this.resumeStopwatch = this.resumeStopwatch.bind(this);
    this.markTime = this.markTime.bind(this);
    this.renderMarkedTimes = this.renderMarkedTimes.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  startStopwatch() {
    if (this.state.status !== timerStatus.STARTED) {
      this.setState({ status: timerStatus.STARTED });
    }
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timeInterval: prevState.timeInterval + 10 }));
    }, 10);
  }
  resetStopwatch() {
    clearInterval(this.interval);
    this.setState(() => ({ status: null, timeInterval: null, markedTimes: [] }));
  }
  pauseStopwatch() {
    if (this.state.status === timerStatus.STARTED) {
      clearInterval(this.interval);
      this.setState({ status: timerStatus.PAUSED });
    }
  }
  resumeStopwatch() {
    if (this.state.status === timerStatus.PAUSED) {
      this.interval = setInterval(() => {
        this.setState(prevState => ({ timeInterval: prevState.timeInterval + 10 }));
      }, 10);
    }
  }
  markTime() {
    this.setState(prevState => ({ markedTimes: prevState.markedTimes.concat(time.getTime(this.state.timeInterval)).reverse() }));
  }
  renderMarkedTimes() {
    return (
      this.state.markedTimes.map(
        (time, i) => (
          <div key={i} className="light-underline">
            <span>Mark {this.state.markedTimes.length - i} </span>
            <span className="timer">{time}</span>
          </div>
        ),
      )
    );
  }
  render() {
    return (
      <div className="card-display">
        {
          <div className="timer-bg">{time.getTime(this.state.timeInterval)}</div>
        }
        <div className="add-ovflw">
          {this.renderMarkedTimes()}
        </div>
        <div className="button-pannel">
          {
            this.state.status === timerStatus.PAUSED &&
            <button className="sd-btn tk-btn pull-left" onClick={this.resetStopwatch}>Reset</button>
          }
          {
            (this.state.status === null || this.state.status === timerStatus.STARTED) &&
            <button className={`sd-btn tk-btn pull-left ${this.state.status ? '' : 'blur'}`} onClick={this.markTime}>Mark</button>
          }
          {
            (this.state.status === null || this.state.status === timerStatus.PAUSED) &&
            <button className="sd-btn btn-success pull-right" onClick={this.startStopwatch}>Start</button>
          }
          {
            this.state.status === timerStatus.STARTED &&
            <button className="sd-btn btn-danger pull-right" onClick={this.pauseStopwatch}>Stop</button>
          }
        </div>
      </div>
    );
  }
}
