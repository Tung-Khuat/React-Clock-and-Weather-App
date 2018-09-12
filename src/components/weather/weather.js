import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherDisplay from './weather-display';
import AddLocation from './add-location';

class Weather extends Component {
  render() {
    return (
      <div className="card-display">
        {
          (this.props.weatherProvider && this.props.weatherProvider.length > 0) &&
          <WeatherDisplay />
        }
        <AddLocation />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { weatherProvider: state.WeatherStores.weatherProvider };
}

export default connect(mapStateToProps)(Weather);
