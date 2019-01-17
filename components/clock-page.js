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

var _tabButtons = require('./tab-buttons');

var _tabButtons2 = _interopRequireDefault(_tabButtons);

var _worldClock = require('./clock/world-clock');

var _worldClock2 = _interopRequireDefault(_worldClock);

var _stopwatch = require('./stopwatch/stopwatch');

var _stopwatch2 = _interopRequireDefault(_stopwatch);

var _timer = require('./timer/timer');

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Available options for this section
var ClockOptions = {
  clock: { name: 'World Clock', id: 0 },
  timer: { name: 'Timer', id: 1 },
  stopwatch: { name: 'Stopwatch', id: 2 }
};
// Options displayed on the tab selection
var TabsDisplayed = [ClockOptions.clock, ClockOptions.timer, ClockOptions.stopwatch];

var ClockIndex = function (_Component) {
  (0, _inherits3.default)(ClockIndex, _Component);

  function ClockIndex(props) {
    (0, _classCallCheck3.default)(this, ClockIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ClockIndex.__proto__ || Object.getPrototypeOf(ClockIndex)).call(this, props));

    _this.state = { active: 2 };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ClockIndex, [{
    key: 'handleOnClick',
    value: function handleOnClick(id, list) {
      for (var el in list) {
        if (list[el].id == id) {
          this.setState({ active: id });
        }
      }
    }
  }, {
    key: 'renderSelectedUtility',
    value: function renderSelectedUtility() {
      switch (this.state.active) {
        case ClockOptions.clock.id:
          return _react2.default.createElement(_worldClock2.default, null);
        case ClockOptions.timer.id:
          return _react2.default.createElement(_timer2.default, null);
        case ClockOptions.stopwatch.id:
          return _react2.default.createElement(_stopwatch2.default, null);
        default:
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navBar2.default, { currentPath: this.props.location.pathname }),
        _react2.default.createElement(_tabButtons2.default, { data: TabsDisplayed, handleOnClick: this.handleOnClick, active: this.state.active }),
        this.renderSelectedUtility()
      );
    }
  }]);
  return ClockIndex;
}(_react.Component);

exports.default = ClockIndex;