'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactOwlCarousel = require('react-owl-carousel2');

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUpdateTime = function getUpdateTime(date) {
  var hour = date.getHours().toString().padStart(2, '0');
  var minute = date.getMinutes().toString().padStart(2, '0');
  var dateString = date.toDateString();
  return dateString + ' at ' + hour + ':' + minute;
};
var getHourlyForecastHour = function getHourlyForecastHour(date) {
  var hour = date.getHours().toString().padStart(2, '0');
  var day = date;
  return hour + ':00';
};
var carouselOptions = {
  items: 1,
  nav: false,
  rewind: true,
  autoplay: false
};

var WeatherDisplay = function (_Component) {
  (0, _inherits3.default)(WeatherDisplay, _Component);

  function WeatherDisplay() {
    (0, _classCallCheck3.default)(this, WeatherDisplay);
    return (0, _possibleConstructorReturn3.default)(this, (WeatherDisplay.__proto__ || Object.getPrototypeOf(WeatherDisplay)).apply(this, arguments));
  }

  (0, _createClass3.default)(WeatherDisplay, [{
    key: 'renderWeatherForecast',
    value: function renderWeatherForecast(weatherData, i) {
      if (weatherData) {
        var currentWeather = weatherData.currentWeather;

        return _react2.default.createElement(
          'div',
          { key: i },
          _react2.default.createElement(
            'h1',
            null,
            currentWeather.location.name
          ),
          _react2.default.createElement('img', { src: currentWeather.icon }),
          currentWeather.condition,
          _react2.default.createElement(
            'h1',
            null,
            parseInt(currentWeather.temperature.current),
            '\xB0C'
          ),
          _react2.default.createElement(
            'div',
            null,
            parseInt(currentWeather.temperature.min),
            '\xB0 | ',
            parseInt(currentWeather.temperature.max),
            '\xB0'
          ),
          _react2.default.createElement(
            'div',
            { className: 'horizontal-scroll-display' },
            weatherData.hourlyForecast.map(this.renderHourlyForecast)
          ),
          _react2.default.createElement(
            'div',
            { className: 'light-text' },
            'Last Updated: ',
            getUpdateTime(currentWeather.date)
          )
        );
      }
    }
  }, {
    key: 'renderHourlyForecast',
    value: function renderHourlyForecast(weatherData, i) {
      return _react2.default.createElement(
        'div',
        { key: i },
        _react2.default.createElement(
          'h4',
          null,
          weatherData.date.toLocaleDateString('en-en', { weekday: 'short', month: 'short', day: 'numeric' })
        ),
        _react2.default.createElement(
          'h4',
          null,
          getHourlyForecastHour(weatherData.date)
        ),
        _react2.default.createElement(
          'h3',
          null,
          parseInt(weatherData.temperature.current),
          '\xB0C'
        ),
        _react2.default.createElement('img', { src: weatherData.icon }),
        weatherData.condition
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'carousel' },
        _react2.default.createElement(
          _reactOwlCarousel2.default,
          { ref: function ref(el) {
              return _this2.carousel = el;
            }, options: carouselOptions },
          this.props.weatherProvider.map(function (item, i) {
            return _this2.renderWeatherForecast(item, i);
          })
        ),
        this.props.weatherProvider.length > 1 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'carousel-nav', style: { left: 0 } },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left fa-lg pl-2', onClick: function onClick() {
                return _this2.carousel.prev();
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'carousel-nav', style: { right: 0 } },
            _react2.default.createElement('i', { className: 'fa fa-chevron-right fa-lg pl-2', onClick: function onClick() {
                return _this2.carousel.next();
              } })
          )
        )
      );
    }
  }]);
  return WeatherDisplay;
}(_react.Component);

function mapStateToProps(state) {
  return { weatherProvider: state.WeatherStores.weatherProvider };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WeatherDisplay);