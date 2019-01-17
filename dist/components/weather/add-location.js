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

var _index = require('../../actions/index');

var _weatherDisplay = require('./weather-display');

var _weatherDisplay2 = _interopRequireDefault(_weatherDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddLocation = function (_Component) {
  (0, _inherits3.default)(AddLocation, _Component);

  function AddLocation() {
    (0, _classCallCheck3.default)(this, AddLocation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddLocation.__proto__ || Object.getPrototypeOf(AddLocation)).call(this));

    _this.state = {
      city: null
    };
    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    _this.onCityInputChange = _this.onCityInputChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddLocation, [{
    key: 'onFormSubmit',
    value: function onFormSubmit(event) {
      event.preventDefault();
      this.props.getWeatherDataByCity(this.state.city);
      this.setState({ city: null });
    }
  }, {
    key: 'onCityInputChange',
    value: function onCityInputChange(event) {
      this.setState({ city: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.onFormSubmit, className: 'Aligner-item' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', {
              type: 'text',
              className: 'form-control',
              placeholder: 'Enter a City',
              value: this.state.city,
              onChange: this.onCityInputChange,
              autoCapitalize: 'none',
              required: true
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary tab2-btn' },
              'Add'
            )
          )
        )
      );
    }
  }]);
  return AddLocation;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { getWeatherDataByCity: _index.getWeatherDataByCity })(AddLocation);