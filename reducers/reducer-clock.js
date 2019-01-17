'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionType.actionType.ADD_TIME_DISPLAY:
      var newListItem = [].concat((0, _toConsumableArray3.default)(state.displayList), [{ offset: action.payload.offset, textDisplay: action.payload.textDisplay }]);
      return (0, _extends3.default)({}, state, { displayList: newListItem });
    case _actionType.actionType.REMOVE_TIME_DISPLAY:
      var newDisplayList = state.displayList.splice(action.payload, 1);
      return (0, _extends3.default)({}, state);
    case _actionType.actionType.CLEAR_ALL_DISPLAY:
      return (0, _extends3.default)({}, state, { displayList: [] });
    default:
      return state;
  }
};

var _actionType = require('../actions/action-type');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { displayList: [{ offset: 0, textDisplay: 'GMT' }], timeInterval: null };