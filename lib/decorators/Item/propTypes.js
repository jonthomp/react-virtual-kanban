'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDropTarget = exports.connectDragSource = exports.rowStyle = exports.isDragging = exports.listId = exports.rowId = exports.row = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var row = exports.row = _propTypes2.default.object.isRequired;
var rowId = exports.rowId = _propTypes3.PropTypes.id.isRequired;
var listId = exports.listId = _propTypes3.PropTypes.id.isRequired;
var isDragging = exports.isDragging = _propTypes2.default.bool.isRequired;
var rowStyle = exports.rowStyle = _propTypes2.default.object.isRequired;
var connectDragSource = exports.connectDragSource = _propTypes2.default.func.isRequired;
var connectDropTarget = exports.connectDropTarget = _propTypes2.default.func.isRequired;