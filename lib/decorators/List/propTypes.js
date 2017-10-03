'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDropTarget = exports.connectDragSource = exports.isDragging = exports.children = exports.rows = exports.listStyle = exports.listId = exports.list = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = exports.list = _propTypes2.default.object.isRequired;
var listId = exports.listId = _propTypes3.PropTypes.id.isRequired;
var listStyle = exports.listStyle = _propTypes2.default.object.isRequired;
var rows = exports.rows = (0, _propTypes3.deprecate)(_propTypes2.default.array, '`rows` is deprecated. Use `list.rows` instead');
var children = exports.children = _propTypes2.default.node;
var isDragging = exports.isDragging = _propTypes2.default.bool.isRequired;
var connectDragSource = exports.connectDragSource = _propTypes2.default.func.isRequired;
var connectDropTarget = exports.connectDropTarget = _propTypes2.default.func.isRequired;