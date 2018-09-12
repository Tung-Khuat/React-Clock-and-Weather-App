import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import IndexPage from './components/index-page';
import ClockIndex from './components/clock-page';
import WeatherIndex from './components/weather-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ClockIndex} />
    <Route path="/clock" component={ClockIndex} />
    <Route path="/weather" component={WeatherIndex} />
  </Route>
);
