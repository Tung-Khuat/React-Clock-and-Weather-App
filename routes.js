'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _indexPage = require('./components/index-page');

var _indexPage2 = _interopRequireDefault(_indexPage);

var _clockPage = require('./components/clock-page');

var _clockPage2 = _interopRequireDefault(_clockPage);

var _weatherPage = require('./components/weather-page');

var _weatherPage2 = _interopRequireDefault(_weatherPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _clockPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/clock', component: _clockPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/weather', component: _weatherPage2.default })
);