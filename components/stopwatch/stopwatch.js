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

var _constants = require('../../../utils/constants');

var _getTime = require('../../../utils/get-time');

var _getTime2 = _interopRequireDefault(_getTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = new _getTime2.default();

var Stopwatch = function (_Component) {
  (0, _inherits3.default)(Stopwatch, _Component);

  function Stopwatch() {
    (0, _classCallCheck3.default)(this, Stopwatch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

    _this.state = {
      status: null,
      timeInterval: 0,
      markedTimes: []
    };
    _this.startStopwatch = _this.startStopwatch.bind(_this);
    _this.resetStopwatch = _this.resetStopwatch.bind(_this);
    _this.pauseStopwatch = _this.pauseStopwatch.bind(_this);
    _this.resumeStopwatch = _this.resumeStopwatch.bind(_this);
    _this.markTime = _this.markTime.bind(_this);
    _this.renderMarkedTimes = _this.renderMarkedTimes.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Stopwatch, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'startStopwatch',
    value: function startStopwatch() {
      var _this2 = this;

      if (this.state.status !== _constants.timerStatus.STARTED) {
        this.setState({ status: _constants.timerStatus.STARTED });
      }
      this.interval = setInterval(function () {
        _this2.setState(function (prevState) {
          return { timeInterval: prevState.timeInterval + 10 };
        });
      }, 10);
    }
  }, {
    key: 'resetStopwatch',
    value: function resetStopwatch() {
      clearInterval(this.interval);
      this.setState(function () {
        return { status: null, timeInterval: null, markedTimes: [] };
      });
    }
  }, {
    key: 'pauseStopwatch',
    value: function pauseStopwatch() {
      if (this.state.status === _constants.timerStatus.STARTED) {
        clearInterval(this.interval);
        this.setState({ status: _constants.timerStatus.PAUSED });
      }
    }
  }, {
    key: 'resumeStopwatch',
    value: function resumeStopwatch() {
      var _this3 = this;

      if (this.state.status === _constants.timerStatus.PAUSED) {
        this.interval = setInterval(function () {
          _this3.setState(function (prevState) {
            return { timeInterval: prevState.timeInterval + 10 };
          });
        }, 10);
      }
    }
  }, {
    key: 'markTime',
    value: function markTime() {
      var _this4 = this;

      this.setState(function (prevState) {
        return { markedTimes: prevState.markedTimes.concat(time.getTime(_this4.state.timeInterval)).reverse() };
      });
    }
  }, {
    key: 'renderMarkedTimes',
    value: function renderMarkedTimes() {
      var _this5 = this;

      return this.state.markedTimes.map(function (time, i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'light-underline' },
          _react2.default.createElement(
            'span',
            null,
            'Mark ',
            _this5.state.markedTimes.length - i,
            ' '
          ),
          _react2.default.createElement(
            'span',
            { className: 'timer' },
            time
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-display' },
        _react2.default.createElement(
          'div',
          { className: 'timer-bg' },
          time.getTime(this.state.timeInterval)
        ),
        _react2.default.createElement(
          'div',
          { className: 'add-ovflw' },
          this.renderMarkedTimes()
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-pannel' },
          this.state.status === _constants.timerStatus.PAUSED && _react2.default.createElement(
            'button',
            { className: 'sd-btn tk-btn pull-left', onClick: this.resetStopwatch },
            'Reset'
          ),
          (this.state.status === null || this.state.status === _constants.timerStatus.STARTED) && _react2.default.createElement(
            'button',
            { className: 'sd-btn tk-btn pull-left ' + (this.state.status ? '' : 'blur'), onClick: this.markTime },
            'Mark'
          ),
          (this.state.status === null || this.state.status === _constants.timerStatus.PAUSED) && _react2.default.createElement(
            'button',
            { className: 'sd-btn btn-success pull-right', onClick: this.startStopwatch },
            'Start'
          ),
          this.state.status === _constants.timerStatus.STARTED && _react2.default.createElement(
            'button',
            { className: 'sd-btn btn-danger pull-right', onClick: this.pauseStopwatch },
            'Stop'
          )
        )
      );
    }
  }]);
  return Stopwatch;
}(_react.Component);

exports.default = Stopwatch;