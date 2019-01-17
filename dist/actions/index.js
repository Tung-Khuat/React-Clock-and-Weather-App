'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherDataByCity = getWeatherDataByCity;
exports.recieveWeatherForecast = recieveWeatherForecast;
exports.addTimeDisplay = addTimeDisplay;
exports.removeTimeDisplay = removeTimeDisplay;
exports.clearAllDisplay = clearAllDisplay;

var _actionType = require('./action-type');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
var OPEN_WEATHER_API_KEY = 'f100da1908a9af01424638ea11cc9c20';
var OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

function getWeather(url) {
  return new Promise(function (resolve, reject) {
    _axios2.default.get(url).then(function (response) {
      if (response && response.status === 200) {
        var _response$data$weathe = response.data.weather[0],
            main = _response$data$weathe.main,
            icon = _response$data$weathe.icon;
        var _response$data$main = response.data.main,
            temp = _response$data$main.temp,
            temp_min = _response$data$main.temp_min,
            temp_max = _response$data$main.temp_max;
        var _response$data$coord = response.data.coord,
            lat = _response$data$coord.lat,
            lon = _response$data$coord.lon;
        var _response$data = response.data,
            dt = _response$data.dt,
            name = _response$data.name;

        resolve({
          condition: main,
          date: new Date(dt * 1000),
          icon: OPEN_WEATHER_IMG_URL + '/' + icon + '.png',
          location: {
            name: name,
            lat: lat,
            lon: lon
          },
          temperature: {
            current: temp,
            min: temp_min,
            max: temp_max
          }
        });
      } else {
        reject('No weather data found');
      }
    }).catch(function (error) {
      return reject(error.message);
    });
  });
}
function getHourlyForecast(url) {
  return new Promise(function (resolve, reject) {
    _axios2.default.get(url).then(function (response) {
      if (response && response.status === 200) {
        var hourlyForecast = response.data.list.map(function (forecast) {
          return {
            condition: forecast.weather[0].description,
            date: new Date(forecast.dt * 1000),
            icon: OPEN_WEATHER_IMG_URL + '/' + forecast.weather[0].icon + '.png',
            temperature: {
              current: forecast.main.temp
            }
          };
        });
        resolve(hourlyForecast);
      } else {
        reject('No weather data found');
      }
    }).catch(function (error) {
      return reject(error.message);
    });
  });
}

function getWeatherDataByCity(city) {
  var currentWeatherUrl = OPEN_WEATHER_BASE_URL + '/weather?appid=' + OPEN_WEATHER_API_KEY + '&q=' + city + '&units=metric';
  var forecastUrl = OPEN_WEATHER_BASE_URL + '/forecast?appid=' + OPEN_WEATHER_API_KEY + '&q=' + city + '&units=metric';

  return function (dispatch) {
    var currentWeather = null;
    getWeather(currentWeatherUrl).then(function (response) {
      return currentWeather = response;
    }, function (error) {
      return console.log(error);
    }).then(getHourlyForecast(forecastUrl).then(function (response) {
      return response;
    }, function (error) {
      return alert(error);
    }).then(function (hourlyForecast) {
      return dispatch(recieveWeatherForecast(currentWeather, hourlyForecast));
    }));
  };
}

function recieveWeatherForecast(currentWeather, hourlyForecast) {
  return {
    type: _actionType.actionType.ADD_LOCATION_WEATHER,
    payload: {
      currentWeather: currentWeather,
      hourlyForecast: hourlyForecast
    }
  };
}
function addTimeDisplay(offset, textDisplay) {
  var newTimeZone = {
    offset: offset,
    textDisplay: textDisplay
  };
  return {
    type: _actionType.actionType.ADD_TIME_DISPLAY,
    payload: newTimeZone
  };
}
function removeTimeDisplay(index) {
  return {
    type: _actionType.actionType.REMOVE_TIME_DISPLAY,
    payload: index
  };
}
function clearAllDisplay() {
  return {
    type: _actionType.actionType.CLEAR_ALL_DISPLAY
  };
}