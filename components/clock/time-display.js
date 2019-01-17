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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeDisplay = function (_React$Component) {
  (0, _inherits3.default)(TimeDisplay, _React$Component);

  function TimeDisplay(props) {
    (0, _classCallCheck3.default)(this, TimeDisplay);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimeDisplay.__proto__ || Object.getPrototypeOf(TimeDisplay)).call(this, props));

    _this.state = { hours: '00', minutes: '00', seconds: '00' };
    return _this;
  }

  (0, _createClass3.default)(TimeDisplay, [{
    key: 'setTime',
    value: function setTime() {
      var currentdate = new Date();
      var hours = currentdate.getUTCHours() + this.props.offset;

      // correct for number over 24, and negatives
      if (hours >= 24) {
        hours -= 24;
      }
      if (hours < 0) {
        hours += 12;
      }

      // add leading zero, first convert hours to string
      hours += '';
      if (hours.length == 1) {
        hours = '0' + hours;
      }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert hours to string
      minutes += '';
      if (minutes.length == 1) {
        minutes = '0' + minutes;
      }

      var seconds = currentdate.getUTCSeconds();
      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      // Only set state when a clock is in the page
      if (this.refs) {
        if (this.refs.clock) {
          this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds
          });
        }
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setTime();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.setInterval(function () {
        _this2.setTime();
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { id: 'clock', ref: 'clock', className: 'lh3' },
          this.state.hours,
          ':',
          this.state.minutes,
          ':',
          this.state.seconds
        )
      );
    }
  }]);
  return TimeDisplay;
}(_react2.default.Component);

exports.default = TimeDisplay;