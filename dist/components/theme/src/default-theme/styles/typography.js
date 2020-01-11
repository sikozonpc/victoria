"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Font families
 */
var fontFamilies = {
  /** monoscpaed font for code, numbers and others. */
  monospaced: ['"Roboto Mono"', '"Monaco"', '"Source Code Pro"', 'monospace'].join(','),

  /** used for almost all components */
  elements: ['"Roboto"', '"Lato"', 'sans-serif'].join(','),

  /** used for titles (+24px) */
  headings: ['"Roboto Slab"', '"Roboto"', '"Lato"', 'sans-serif'].join(',')
};
/**
 * Headings
 */

var headings = {
  900: {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: fontFamilies.headings,
    color: _palette["default"].text.dark
  },
  800: {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: fontFamilies.headings,
    color: _palette["default"].text.dark
  },
  700: {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: fontFamilies.headings,
    color: _palette["default"].text.dark
  }
};
var text = {
  /**
    * It's useful to have 600 because `Link` uses the `Text` component.
    * A `Link` could be used as 600 in the context of a breadcrumb.
    */
  600: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,

    /**
     * Use font family display because the font-size is 20px.
     */
    fontFamily: fontFamilies.elements
  },
  500: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16
  },
  400: {
    // Base default
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 12
  },
  300: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 12
  }
};
var _default = {
  text: text,
  fontFamilies: fontFamilies,
  headings: headings
};
exports["default"] = _default;