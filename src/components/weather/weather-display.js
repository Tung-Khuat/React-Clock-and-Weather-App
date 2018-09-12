import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';

const getUpdateTime = (date) => {
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const dateString = date.toDateString();
  return `${dateString} at ${hour}:${minute}`;
};
const getHourlyForecastHour = (date) => {
  const hour = date.getHours().toString().padStart(2, '0');
  const day = date;
  return `${hour}:00`;
};
const carouselOptions = {
  items: 1,
  nav: false,
  rewind: true,
  autoplay: false,
};
class WeatherDisplay extends Component {
  renderWeatherForecast(weatherData, i) {
    if (weatherData) {
      const { currentWeather } = weatherData;
      return (
        <div key={i}>
          <h1>{currentWeather.location.name}</h1>
          <img src={currentWeather.icon} />
          {currentWeather.condition}
          <h1>{parseInt(currentWeather.temperature.current)}°C</h1>
          <div>{parseInt(currentWeather.temperature.min)}° | {parseInt(currentWeather.temperature.max)}°</div>
          <div className="horizontal-scroll-display" >
            {weatherData.hourlyForecast.map(this.renderHourlyForecast)}
          </div>
          <div className="light-text">Last Updated: {getUpdateTime(currentWeather.date)}</div>
        </div>
      );
    }
  }
  renderHourlyForecast(weatherData, i) {
    return (
      <div key={i}>
        <h4>{weatherData.date.toLocaleDateString('en-en', { weekday: 'short', month: 'short', day: 'numeric' })}</h4>
        <h4>{getHourlyForecastHour(weatherData.date)}</h4>
        <h3>{parseInt(weatherData.temperature.current)}°C</h3>
        <img src={weatherData.icon} />
        {weatherData.condition}
      </div>
    );
  }
  render() {
    return (
      <div className="carousel">
        <OwlCarousel ref={el => this.carousel = el} options={carouselOptions}>
          {
            this.props.weatherProvider.map(
              (item, i) => this.renderWeatherForecast(item, i),
            )
          }
        </OwlCarousel>
        {
          this.props.weatherProvider.length > 1 &&
          <div>
            <div className="carousel-nav" style={{ left: 0 }}>
              <i className="fa fa-chevron-left fa-lg pl-2" onClick={() => this.carousel.prev()} />
            </div>
            <div className="carousel-nav" style={{ right: 0 }}>
              <i className="fa fa-chevron-right fa-lg pl-2" onClick={() => this.carousel.next()} />
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weatherProvider: state.WeatherStores.weatherProvider };
}

export default connect(mapStateToProps)(WeatherDisplay);
