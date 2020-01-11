"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

var _defaultTheme = _interopRequireDefault(require("./default-theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * `useTheme()` hook for functional components.
 * Access the theme object inside ReactComponents
 */
var useTheme = function useTheme() {
  // TODO: Test this condition
  return _react["default"].useContext(_ThemeContext["default"]) || _defaultTheme["default"];
};

var _default = useTheme;
exports["default"] = _default;