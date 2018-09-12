import { actionType } from '../actions/action-type';
import _ from 'lodash';

const INITIAL_STATE = { weatherProvider: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.ADD_LOCATION_WEATHER:
      return { ...state, weatherProvider: state.weatherProvider.concat(action.payload) };
    default:
      return state;
  }
}
