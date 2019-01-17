'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducerClock = require('./reducer-clock');

var _reducerClock2 = _interopRequireDefault(_reducerClock);

var _reducerWeather = require('./reducer-weather');

var _reducerWeather2 = _interopRequireDefault(_reducerWeather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  ClockStores: _reducerClock2.default,
  WeatherStores: _reducerWeather2.default
});

exports.default = rootReducer;