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

var _timezone = require('../../../utils/timezone');

var _index = require('../../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTimezone = function (_React$Component) {
  (0, _inherits3.default)(AddTimezone, _React$Component);

  function AddTimezone() {
    (0, _classCallCheck3.default)(this, AddTimezone);
    return (0, _possibleConstructorReturn3.default)(this, (AddTimezone.__proto__ || Object.getPrototypeOf(AddTimezone)).apply(this, arguments));
  }

  (0, _createClass3.default)(AddTimezone, [{
    key: 'renderDropdownItem',
    value: function renderDropdownItem() {
      var _this2 = this;

      return _timezone.timezone.map(function (zone, i) {
        return _react2.default.createElement(
          'div',
          { className: 'light-underline', key: i, onClick: function onClick() {
              _this2.props.addTimeDisplay(zone.offset, zone.value);_this2.props.cback();
            }, value: zone.offset },
          zone.text
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderDropdownItem()
      );
    }
  }]);
  return AddTimezone;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, { addTimeDisplay: _index.addTimeDisplay })(AddTimezone);