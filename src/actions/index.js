import { actionType } from './action-type';
import axios from 'axios';

const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'f100da1908a9af01424638ea11cc9c20';
const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

function getWeather(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        if (response && response.status === 200) {
          const { main, icon } = response.data.weather[0];
          const { temp, temp_min, temp_max } = response.data.main;
          const { lat, lon } = response.data.coord;
          const { dt, name } = response.data;
          resolve({
            condition: main,
            date: new Date(dt * 1000),
            icon: `${OPEN_WEATHER_IMG_URL}/${icon}.png`,
            location: {
              name,
              lat,
              lon,
            },
            temperature: {
              current: temp,
              min: temp_min,
              max: temp_max,
            },
          });
        } else {
          reject('No weather data found');
        }
      })
      .catch(error => reject(error.message));
  });
}
function getHourlyForecast(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        if (response && response.status === 200) {
          const hourlyForecast = response.data.list.map(
            forecast => ({
              condition: forecast.weather[0].description,
              date: new Date(forecast.dt * 1000),
              icon: `${OPEN_WEATHER_IMG_URL}/${forecast.weather[0].icon}.png`,
              temperature: {
                current: forecast.main.temp,
              },
            }),
          );
          resolve(hourlyForecast);
        } else {
          reject('No weather data found');
        }
      })
      .catch(error => reject(error.message));
  });
}

export function getWeatherDataByCity(city) {
  const currentWeatherUrl = `${OPEN_WEATHER_BASE_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&q=${city}&units=metric`;
  const forecastUrl = `${OPEN_WEATHER_BASE_URL}/forecast?appid=${OPEN_WEATHER_API_KEY}&q=${city}&units=metric`;

  return function (dispatch) {
    let currentWeather = null;
    getWeather(currentWeatherUrl)
      .then(
        response => currentWeather = response,
        error => console.log(error),
      )
      .then(
        getHourlyForecast(forecastUrl)
          .then(
            response => response,
            error => alert(error),
          ).then(
            hourlyForecast => dispatch(recieveWeatherForecast(currentWeather, hourlyForecast)),
          ),
      );
  };
}

export function recieveWeatherForecast(currentWeather, hourlyForecast) {
  return {
    type: actionType.ADD_LOCATION_WEATHER,
    payload: {
      currentWeather,
      hourlyForecast,
    },
  };
}
export function addTimeDisplay(offset, textDisplay) {
  const newTimeZone = {
    offset,
    textDisplay,
  };
  return {
    type: actionType.ADD_TIME_DISPLAY,
    payload: newTimeZone,
  };
}
export function removeTimeDisplay(index) {
  return {
    type: actionType.REMOVE_TIME_DISPLAY,
    payload: index,
  };
}
export function clearAllDisplay() {
  return {
    type: actionType.CLEAR_ALL_DISPLAY,
  };
}
