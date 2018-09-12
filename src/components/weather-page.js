import React, { Component } from 'react';
import NavBar from './nav-bar';
import Weather from './weather/weather';


export default class WeatherIndex extends Component {
  render() {
    return (
      <div>
        <NavBar currentPath={this.props.location.pathname} />
        <Weather />
      </div>
    );
  }
}
