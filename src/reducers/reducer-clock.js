import { actionType } from '../actions/action-type';
import _ from 'lodash';

const INITIAL_STATE = { displayList: [{ offset: 0, textDisplay: 'GMT' }], timeInterval: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.ADD_TIME_DISPLAY:
      const newListItem = [
        ...state.displayList,
        { offset: action.payload.offset, textDisplay: action.payload.textDisplay },
      ];
      return { ...state, displayList: newListItem };
    case actionType.REMOVE_TIME_DISPLAY:
      const newDisplayList = state.displayList.splice(action.payload, 1);
      return { ...state };
    case actionType.CLEAR_ALL_DISPLAY:
      return { ...state, displayList: [] };
    default:
      return state;
  }
}
