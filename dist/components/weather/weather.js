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

var _weatherDisplay = require('./weather-display');

var _weatherDisplay2 = _interopRequireDefault(_weatherDisplay);

var _addLocation = require('./add-location');

var _addLocation2 = _interopRequireDefault(_addLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weather = function (_Component) {
  (0, _inherits3.default)(Weather, _Component);

  function Weather() {
    (0, _classCallCheck3.default)(this, Weather);
    return (0, _possibleConstructorReturn3.default)(this, (Weather.__proto__ || Object.getPrototypeOf(Weather)).apply(this, arguments));
  }

  (0, _createClass3.default)(Weather, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-display' },
        this.props.weatherProvider && this.props.weatherProvider.length > 0 && _react2.default.createElement(_weatherDisplay2.default, null),
        _react2.default.createElement(_addLocation2.default, null)
      );
    }
  }]);
  return Weather;
}(_react.Component);

function mapStateToProps(state) {
  return { weatherProvider: state.WeatherStores.weatherProvider };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Weather);