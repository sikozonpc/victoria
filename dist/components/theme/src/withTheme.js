"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("./ThemeContext");

var _getDisplayName = _interopRequireDefault(require("../../../../utils/getDisplayName"));

var _reactJss = _interopRequireDefault(require("react-jss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * HOC that consumes the theme.
 * Inspiration from Evergreen #https://github.com/segmentio/evergreen/blob/master/src/theme/src/withTheme.js
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
var withTheme = function withTheme(WrappedComponent) {
  return function (styles) {
    var StyledComponent = WrappedComponent; // Inject styles into the component if they are given

    if (styles) {
      StyledComponent = (0, _reactJss["default"])(styles)(WrappedComponent);
    } // Passes the theme to the react-jss Theme Provider


    var WithTheme = function WithTheme(props) {
      return _react["default"].createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
        return _react["default"].createElement(StyledComponent, _extends({
          theme: theme
        }, props));
      });
    };

    WithTheme.displayName = "WithTheme(".concat((0, _getDisplayName["default"])(WrappedComponent), ")");
    return WithTheme;
  };
};

var _default = withTheme;
exports["default"] = _default;