'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGhost = exports.containerWidth = exports.rowStyle = exports.rowId = exports.row = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var row = exports.row = _propTypes2.default.object.isRequired;
var rowId = exports.rowId = _propTypes3.PropTypes.id.isRequired;
var rowStyle = exports.rowStyle = _propTypes2.default.object.isRequired;
var containerWidth = exports.containerWidth = _propTypes2.default.number.isRequired;
var isGhost = exports.isGhost = _propTypes2.default.bool.isRequired;