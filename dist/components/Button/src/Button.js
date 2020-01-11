"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../../theme/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    base: {
      position: 'relative',
      fontWeight: theme.typography.text['600'],
      fontSize: 14,
      fontFamily: theme.typography.fontFamilies.elements,
      borderRadius: 10,
      padding: '10px 20px',
      border: '2px solid transparent',
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      cursor: 'pointer',
      textTransform: 'uppercase'
    },
    text: {
      border: 'none',
      backgroundColor: 'transparent'
    },
    contained: {
      padding: '10px 15px',
      backgroundColor: theme.palette["default"].base
    },
    outlined: {
      borderColor: theme.palette["default"].base,
      backgroundColor: 'transparent',
      color: theme.palette["default"].base
    },
    primary: {
      backgroundColor: theme.palette.primary.base,
      color: '#fff'
    },
    secondary: {
      backgroundColor: theme.palette.secondary.base,
      color: '#fff'
    },
    disabled: {
      cursor: 'not-allowed'
    }
  };
};
/**
 * Button component
 */


var Button = function Button(props) {
  var _cx;

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      classes = props.classes,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'contained' : _props$variant,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type;
  /** theme object */

  var theme = (0, _index.useTheme)();
  /** TODO: here gotta use classes not styles */

  var inlineStyles = {
    color: variant === 'outlined' && type ? theme.palette[type].base : '',
    borderColor: variant === 'outlined' && type ? theme.palette[type].base : ''
  };
  console.log(inlineStyles);
  /** TODO: be able to use a `a` tag as button  - aka ButtonBase */

  return _react["default"].createElement("button", {
    className: (0, _classnames["default"])(classes.base, (_cx = {}, _defineProperty(_cx, classes.disabled, disabled), _defineProperty(_cx, classes[variant], variant), _defineProperty(_cx, classes[type], type && variant !== 'outlined'), _defineProperty(_cx, className, className), _cx)),
    style: inlineStyles,
    disabled: disabled
  }, children);
};

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes["default"].node,

  /**
   * Theme object from `ThemeProvider`
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * CSS Class
   */
  className: _propTypes["default"].string,

  /**
   * Classes object from `withTheme` styles object
   * contains an objectwith css class names generated from the styles object
   */
  classes: _propTypes["default"].object,

  /**
   * Style to be applied according to the button function in
   * the design.
   */
  type: _propTypes["default"].oneOf(['default', 'primary', 'secondary']),

  /**
   * Variant of the button.
   */
  variant: _propTypes["default"].oneOf(['contained', 'text', 'outlined']),

  /**
   * Disable the button
   */
  disabled: _propTypes["default"].bool
};

var _default = (0, _index.withTheme)(Button)(styles);

exports["default"] = _default;