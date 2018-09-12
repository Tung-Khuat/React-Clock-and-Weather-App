import React, { Component } from 'react';
import { timerStatus } from '../../../utils/constants';
import Time from '../../../utils/get-time';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      hours: null,
      minutes: null,
      seconds: null,
      status: null,
      timeInterval: null,
    };
    this.startTimer = this.startTimer.bind(this);
    this.cancelTimer = this.cancelTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  startTimer() {
    if (this.state.status !== timerStatus.STARTED) {
      this.setState({ status: timerStatus.STARTED });
    }
    const totalMilliseconds = ((parseInt(this.state.hours || 0) * 60 * 60)
                + (parseInt(this.state.minutes || 0) * 60)
                + parseInt(this.state.seconds || 0))
                * 1000;
    if (totalMilliseconds <= 0) {
      clearInterval(this.interval);
      this.setState(() => ({ status: null }));
      return;
    }
    this.setState({ timeInterval: parseInt(totalMilliseconds) });
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timeInterval: prevState.timeInterval - 10 }));
      if (this.state.timeInterval === 0) {
        clearInterval(this.interval);
        this.setState(() => ({ status: null }));
        alert('Timer Done!');
      }
    }, 10);
  }
  cancelTimer() {
    clearInterval(this.interval);
    this.setState(() => ({ status: null, timeInterval: null }));
  }
  pauseTimer() {
    if (this.state.status === timerStatus.STARTED) {
      clearInterval(this.interval);
      this.setState({ status: timerStatus.PAUSED });
    }
  }
  resumeTimer() {
    if (this.state.status === timerStatus.PAUSED) {
      this.interval = setInterval(() => {
        this.setState(prevState => ({ status: timerStatus.STARTED, timeInterval: prevState.timeInterval - 10 }));
        if (this.state.timeInterval === 0) {
          clearInterval(this.interval);
          this.setState(() => ({ status: null }));
          alert('Timer Done!');
        }
      }, 10);
    }
  }
  handleHourChange(val) {
    this.setState({ hours: val });
  }
  handleMinuteChange(val) {
    this.setState({ minutes: val });
  }
  handleSecondChange(val) {
    this.setState({ seconds: val });
  }

  render() {
    const time = new Time();
    return (
      <div className="card-display">
        {
          (this.state.status === timerStatus.STARTED || this.state.status === timerStatus.PAUSED) &&
          <div className="timer-bg">{time.getTime(this.state.timeInterval)}</div>
        }
        {
          this.state.status === null &&
          <div>
            <div className="timer-display">
              <label>H</label>
              <label>M</label>
              <label>S</label>
            </div>
            <div className="timer-display">
              <input
                type="number"
                min="0"
                max="99"
                placeholder="00"
                value={this.state.hours}
                onChange={ev => this.handleHourChange(ev.target.value)}
              /> :
              <input
                type="number"
                min="0"
                max="59"
                placeholder="00"
                value={this.state.minutes}
                onChange={ev => this.handleMinuteChange(ev.target.value)}
              /> :
              <input
                type="number"
                min="0"
                max="59"
                placeholder="00"
                value={this.state.second}
                onChange={ev => this.handleSecondChange(ev.target.value)}
              />
            </div>
          </div>
        }
        {
          this.state.status === null &&
          <button className="sd-btn btn-success" onClick={this.startTimer}>Start</button>
        }
        {
          (this.state.status === timerStatus.STARTED || this.state.status === timerStatus.PAUSED) &&
          <button className="sd-btn tk-btn m5" onClick={this.cancelTimer}>Cancel</button>
        }
        {
          this.state.status === timerStatus.STARTED &&
          <button className="sd-btn btn-warning m5" onClick={this.pauseTimer}>Pause</button>
        }
        {
          this.state.status === timerStatus.PAUSED &&
          <button className="sd-btn btn-success m5" onClick={this.resumeTimer}>Resume</button>
        }

      </div>
    );
  }
}
