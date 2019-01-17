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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigations = [{ displayName: 'Clock', path: '/clock' }, { displayName: 'Weather', path: '/weather' }];

var NavBar = function (_React$Component) {
  (0, _inherits3.default)(NavBar, _React$Component);

  function NavBar(props) {
    (0, _classCallCheck3.default)(this, NavBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.state = { condition: true };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavBar, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ condition: !this.state.condition });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.props.currentPath);
      return _react2.default.createElement(
        'nav',
        { className: 'navbar tk-navbar navbar-fixed-top' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed', onClick: this.handleClick },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-brand' },
              'RCnW'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: this.state.condition ? 'navbar-collapsed' : '' },
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-left' },
              Navigations.map(function (nav, i) {
                return _react2.default.createElement(
                  'li',
                  { key: i },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: nav.path, className: nav.path == _this2.props.currentPath ? 'tk-nav-active' : '' },
                    nav.displayName
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);
  return NavBar;
}(_react2.default.Component);

exports.default = NavBar;