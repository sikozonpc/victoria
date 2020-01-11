"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeConsumer = exports.ThemeProvider = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaultTheme = _interopRequireDefault(require("./default-theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeContext = _react["default"].createContext(_defaultTheme["default"]);

var ThemeProvider = ThemeContext.Provider,
    ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;
exports.ThemeProvider = ThemeProvider;
var _default = ThemeContext;
exports["default"] = _default;