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

var _navBar = require('./nav-bar');

var _navBar2 = _interopRequireDefault(_navBar);

var _weather = require('./weather/weather');

var _weather2 = _interopRequireDefault(_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeatherIndex = function (_Component) {
  (0, _inherits3.default)(WeatherIndex, _Component);

  function WeatherIndex() {
    (0, _classCallCheck3.default)(this, WeatherIndex);
    return (0, _possibleConstructorReturn3.default)(this, (WeatherIndex.__proto__ || Object.getPrototypeOf(WeatherIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(WeatherIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navBar2.default, { currentPath: this.props.location.pathname }),
        _react2.default.createElement(_weather2.default, null)
      );
    }
  }]);
  return WeatherIndex;
}(_react.Component);

exports.default = WeatherIndex;