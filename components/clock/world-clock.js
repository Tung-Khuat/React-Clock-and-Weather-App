'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _timeDisplay = require('./time-display');

var _timeDisplay2 = _interopRequireDefault(_timeDisplay);

var _addTimezone = require('./add-timezone');

var _addTimezone2 = _interopRequireDefault(_addTimezone);

var _index = require('../../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorldClock = function (_React$Component) {
  (0, _inherits3.default)(WorldClock, _React$Component);

  function WorldClock(props) {
    (0, _classCallCheck3.default)(this, WorldClock);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WorldClock.__proto__ || Object.getPrototypeOf(WorldClock)).call(this, props));

    _this.state = { isAdding: false, isEditing: false };

    _this.handleOnAddClick = _this.handleOnAddClick.bind(_this);
    _this.handleOnEditClick = _this.handleOnEditClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WorldClock, [{
    key: 'renderTimeDisplay',
    value: function renderTimeDisplay() {
      var _this2 = this;

      var displayList = this.props.ClockStores.displayList;
      if (this.state.isAdding) {
        return _react2.default.createElement(_addTimezone2.default, { cback: function cback() {
            _this2.setState((0, _extends3.default)({}, _this2.state, { isAdding: !_this2.state.isAdding }));
          } });
      }
      return displayList.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'time-display' },
          _react2.default.createElement(
            'span',
            { className: 'lh3 ' + (_this2.state.isEditing ? '' : 'hidden'), onClick: function onClick() {
                return _this2.props.removeTimeDisplay(i);
              } },
            _react2.default.createElement('i', { className: 'fa fa-times-circle d-icon' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'absorbing' },
            _react2.default.createElement(
              'strong',
              null,
              item.textDisplay
            ),
            _react2.default.createElement(
              'p',
              { className: 'light-text' },
              item.offset,
              ' Hours offset'
            )
          ),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_timeDisplay2.default, { offset: item.offset })
          )
        );
      });
    }
  }, {
    key: 'handleOnAddClick',
    value: function handleOnAddClick() {
      this.setState((0, _extends3.default)({}, this.state, { isAdding: !this.state.isAdding }));
    }
  }, {
    key: 'handleOnEditClick',
    value: function handleOnEditClick() {
      this.setState((0, _extends3.default)({}, this.state, { isEditing: !this.state.isEditing }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-display' },
        _react2.default.createElement(
          'button',
          { className: 'sd-btn tk-btn m5 ' + (this.state.isEditing ? 'hidden' : ''), onClick: this.handleOnAddClick },
          this.state.isAdding ? 'Cancel' : 'Add'
        ),
        _react2.default.createElement(
          'button',
          { className: 'sd-btn btn-danger m5 ' + (this.state.isEditing ? '' : 'hidden'), onClick: this.props.clearAllDisplay },
          'Clear All'
        ),
        _react2.default.createElement(
          'button',
          { className: 'sd-btn tk-btn m5 ' + (this.state.isAdding ? 'hidden' : ''), onClick: this.handleOnEditClick },
          this.state.isEditing ? 'Done' : 'Edit'
        ),
        this.renderTimeDisplay()
      );
    }
  }]);
  return WorldClock;
}(_react2.default.Component);

function mapStateToProps(state) {
  return { ClockStores: state.ClockStores };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { removeTimeDisplay: _index.removeTimeDisplay, clearAllDisplay: _index.clearAllDisplay })(WorldClock);