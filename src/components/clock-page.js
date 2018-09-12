import React, { Component } from 'react';
import NavBar from './nav-bar';
import TabButtons from './tab-buttons';
import WorldClock from './clock/world-clock';
import Stopwatch from './stopwatch/stopwatch';
import Timer from './timer/timer';

// Available options for this section
const ClockOptions = {
  clock: { name: 'World Clock', id: 0 },
  timer: { name: 'Timer', id: 1 },
  stopwatch: { name: 'Stopwatch', id: 2 },
};
// Options displayed on the tab selection
const TabsDisplayed = [ClockOptions.clock, ClockOptions.timer, ClockOptions.stopwatch];


export default class ClockIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 2 };

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id, list) {
    for (const el in list) {
      if (list[el].id == id) {
        this.setState({ active: id });
      }
    }
  }
  renderSelectedUtility() {
    switch (this.state.active) {
      case ClockOptions.clock.id:
        return <WorldClock />;
      case ClockOptions.timer.id:
        return <Timer />;
      case ClockOptions.stopwatch.id:
        return <Stopwatch />;
      default:
    }
  }
  render() {
    return (
      <div>
        <NavBar currentPath={this.props.location.pathname} />
        <TabButtons data={TabsDisplayed} handleOnClick={this.handleOnClick} active={this.state.active} />
        {this.renderSelectedUtility()}
      </div>
    );
  }
}
