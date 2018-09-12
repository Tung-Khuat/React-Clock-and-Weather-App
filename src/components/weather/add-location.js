import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherDataByCity } from '../../actions/index';
import WeatherDisplay from './weather-display';

class AddLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCityInputChange = this.onCityInputChange.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.getWeatherDataByCity(this.state.city);
    this.setState({ city: null });
  }
  onCityInputChange(event) {
    this.setState({ city: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="Aligner-item" >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a City"
              value={this.state.city}
              onChange={this.onCityInputChange}
              autoCapitalize="none"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary tab2-btn">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { getWeatherDataByCity })(AddLocation);
