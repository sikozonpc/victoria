"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./styles/palette"));

var _typography = _interopRequireDefault(require("./styles/typography"));

var _spacing = _interopRequireDefault(require("./styles/spacing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Victoria Theme Template
 * ---
 * What it is: This object contains all of the exposable
 * propeties that the defaut theme contains.
 * ---
 * If you wish to create your own theme
 * use this as template, for consistence.
 * ---
 * How it works: It's simple passed to the
 * theme in theme `<ThemeProvider theme={_theme} >`.
 */

/**
 * Palette
 * ---
 * The colors of the components to suit your brand.
 */

/**
 * Typography
 * ---
 * Set of type sizes that work well together, they create consitent layout.
 */

/**
 * Spacings
 * ---
 * Spaces variables
 */

/**
 * Gradients
 */
// TODO:

/**
 * Breakpoints
 */
// TODO:

/**
 * Shadows
 */
// TODO:

/**
 * Borders
 */
// TODO:
var _default = {
  palette: _palette["default"],
  typography: _typography["default"],
  spacings: _spacing["default"]
};
exports["default"] = _default;