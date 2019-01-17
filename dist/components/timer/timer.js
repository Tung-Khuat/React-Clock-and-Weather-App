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

var Timer = function (_Component) {
  (0, _inherits3.default)(Timer, _Component);

  function Timer() {
    (0, _classCallCheck3.default)(this, Timer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this));

    _this.state = {
      hours: null,
      minutes: null,
      seconds: null,
      status: null,
      timeInterval: null
    };
    _this.startTimer = _this.startTimer.bind(_this);
    _this.cancelTimer = _this.cancelTimer.bind(_this);
    _this.pauseTimer = _this.pauseTimer.bind(_this);
    _this.resumeTimer = _this.resumeTimer.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Timer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      var _this2 = this;

      if (this.state.status !== _constants.timerStatus.STARTED) {
        this.setState({ status: _constants.timerStatus.STARTED });
      }
      var totalMilliseconds = (parseInt(this.state.hours || 0) * 60 * 60 + parseInt(this.state.minutes || 0) * 60 + parseInt(this.state.seconds || 0)) * 1000;
      if (totalMilliseconds <= 0) {
        clearInterval(this.interval);
        this.setState(function () {
          return { status: null };
        });
        return;
      }
      this.setState({ timeInterval: parseInt(totalMilliseconds) });
      this.interval = setInterval(function () {
        _this2.setState(function (prevState) {
          return { timeInterval: prevState.timeInterval - 10 };
        });
        if (_this2.state.timeInterval === 0) {
          clearInterval(_this2.interval);
          _this2.setState(function () {
            return { status: null };
          });
          alert('Timer Done!');
        }
      }, 10);
    }
  }, {
    key: 'cancelTimer',
    value: function cancelTimer() {
      clearInterval(this.interval);
      this.setState(function () {
        return { status: null, timeInterval: null };
      });
    }
  }, {
    key: 'pauseTimer',
    value: function pauseTimer() {
      if (this.state.status === _constants.timerStatus.STARTED) {
        clearInterval(this.interval);
        this.setState({ status: _constants.timerStatus.PAUSED });
      }
    }
  }, {
    key: 'resumeTimer',
    value: function resumeTimer() {
      var _this3 = this;

      if (this.state.status === _constants.timerStatus.PAUSED) {
        this.interval = setInterval(function () {
          _this3.setState(function (prevState) {
            return { status: _constants.timerStatus.STARTED, timeInterval: prevState.timeInterval - 10 };
          });
          if (_this3.state.timeInterval === 0) {
            clearInterval(_this3.interval);
            _this3.setState(function () {
              return { status: null };
            });
            alert('Timer Done!');
          }
        }, 10);
      }
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(val) {
      this.setState({ hours: val });
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(val) {
      this.setState({ minutes: val });
    }
  }, {
    key: 'handleSecondChange',
    value: function handleSecondChange(val) {
      this.setState({ seconds: val });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var time = new _getTime2.default();
      return _react2.default.createElement(
        'div',
        { className: 'card-display' },
        (this.state.status === _constants.timerStatus.STARTED || this.state.status === _constants.timerStatus.PAUSED) && _react2.default.createElement(
          'div',
          { className: 'timer-bg' },
          time.getTime(this.state.timeInterval)
        ),
        this.state.status === null && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'timer-display' },
            _react2.default.createElement(
              'label',
              null,
              'H'
            ),
            _react2.default.createElement(
              'label',
              null,
              'M'
            ),
            _react2.default.createElement(
              'label',
              null,
              'S'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'timer-display' },
            _react2.default.createElement('input', {
              type: 'number',
              min: '0',
              max: '99',
              placeholder: '00',
              value: this.state.hours,
              onChange: function onChange(ev) {
                return _this4.handleHourChange(ev.target.value);
              }
            }),
            ' :',
            _react2.default.createElement('input', {
              type: 'number',
              min: '0',
              max: '59',
              placeholder: '00',
              value: this.state.minutes,
              onChange: function onChange(ev) {
                return _this4.handleMinuteChange(ev.target.value);
              }
            }),
            ' :',
            _react2.default.createElement('input', {
              type: 'number',
              min: '0',
              max: '59',
              placeholder: '00',
              value: this.state.second,
              onChange: function onChange(ev) {
                return _this4.handleSecondChange(ev.target.value);
              }
            })
          )
        ),
        this.state.status === null && _react2.default.createElement(
          'button',
          { className: 'sd-btn btn-success', onClick: this.startTimer },
          'Start'
        ),
        (this.state.status === _constants.timerStatus.STARTED || this.state.status === _constants.timerStatus.PAUSED) && _react2.default.createElement(
          'button',
          { className: 'sd-btn tk-btn m5', onClick: this.cancelTimer },
          'Cancel'
        ),
        this.state.status === _constants.timerStatus.STARTED && _react2.default.createElement(
          'button',
          { className: 'sd-btn btn-warning m5', onClick: this.pauseTimer },
          'Pause'
        ),
        this.state.status === _constants.timerStatus.PAUSED && _react2.default.createElement(
          'button',
          { className: 'sd-btn btn-success m5', onClick: this.resumeTimer },
          'Resume'
        )
      );
    }
  }]);
  return Timer;
}(_react.Component);

exports.default = Timer;