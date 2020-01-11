"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Button = _interopRequireDefault(require("../src/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Button', module).add('Default Button', function () {
  return _react["default"].createElement(_Button["default"], null, "Default Button");
}).add('Primary Button', function () {
  return _react["default"].createElement(_Button["default"], {
    type: "primary"
  }, "Primary Button");
}).add('Secondary Button', function () {
  return _react["default"].createElement(_Button["default"], {
    type: "secondary"
  }, "Secondary Button");
}).add('Disabled Button', function () {
  return _react["default"].createElement(_Button["default"], {
    disabled: true
  }, "Disabled Button");
});
(0, _react2.storiesOf)('Outliened Button', module).add('Outlined Base', function () {
  return _react["default"].createElement(_Button["default"], {
    variant: "outlined"
  }, "Primary Button");
}).add('Outlined Button', function () {
  return _react["default"].createElement(_Button["default"], {
    variant: "outlined",
    type: "primary"
  }, "Primary Button");
}).add('Outlined Secondary', function () {
  return _react["default"].createElement(_Button["default"], {
    variant: "outlined",
    type: "secondary"
  }, "Primary Button");
}).add('Outlined Disabled', function () {
  return _react["default"].createElement(_Button["default"], {
    variant: "outlined",
    disabled: true
  }, "Primary Button");
});