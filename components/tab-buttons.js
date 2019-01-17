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

var _redux = require('redux');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Require
data: [{name, id}]
handleOnClick: function()
active: id
*/

var menuTabs = 'sd-btn tk-btn';
var activeButton = ' tk-active';

var TabButtons = function (_React$Component) {
  (0, _inherits3.default)(TabButtons, _React$Component);

  function TabButtons(props) {
    (0, _classCallCheck3.default)(this, TabButtons);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabButtons.__proto__ || Object.getPrototypeOf(TabButtons)).call(this, props));

    _this.renderButtons = _this.renderButtons.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TabButtons, [{
    key: 'addClassName',
    value: function addClassName(id) {
      // check active button
      var active = '';
      this.props.active == id ? active = activeButton : active = '';
      return menuTabs + active;
    }
  }, {
    key: 'calcButtonLength',
    value: function calcButtonLength() {
      var width = 100 / this.props.data.length;
      return { width: width + '%' };
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(data) {
      var _this2 = this;

      this.calcButtonLength();
      return _react2.default.createElement(
        'button',
        { key: data.id, className: this.addClassName(data.id), onClick: function onClick() {
            return _this2.props.handleOnClick(data.id, _this2.props.data);
          }, style: this.calcButtonLength() },
        data.name
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.data.map(this.renderButtons)
      );
    }
  }]);
  return TabButtons;
}(_react2.default.Component);

exports.default = TabButtons;