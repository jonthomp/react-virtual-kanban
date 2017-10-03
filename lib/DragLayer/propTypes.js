'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPreviewComponent = exports.itemPreviewComponent = exports.isDragging = exports.currentOffset = exports.itemType = exports.item = exports.lists = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lists = exports.lists = _propTypes2.default.array;
var item = exports.item = _propTypes2.default.object;
var itemType = exports.itemType = _propTypes2.default.string;
var currentOffset = exports.currentOffset = _propTypes2.default.shape({
  x: _propTypes2.default.number.isRequired,
  y: _propTypes2.default.number.isRequire
});
var isDragging = exports.isDragging = _propTypes2.default.bool.isRequired;
var itemPreviewComponent = exports.itemPreviewComponent = _propTypes2.default.func.isRequired;
var listPreviewComponent = exports.listPreviewComponent = _propTypes2.default.func.isRequired;