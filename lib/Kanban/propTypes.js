'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemCacheKey = exports.scrollToAlignment = exports.scrollToList = exports.overscanRowCount = exports.overscanListCount = exports.onDragEndRow = exports.onDropList = exports.onDropRow = exports.onMoveList = exports.onMoveRow = exports.listPreviewComponent = exports.itemPreviewComponent = exports.itemComponent = exports.listComponent = exports.height = exports.listWidth = exports.width = exports.lists = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lists = exports.lists = _propTypes2.default.array;
var width = exports.width = _propTypes2.default.number;
var listWidth = exports.listWidth = _propTypes2.default.number;
var height = exports.height = _propTypes2.default.number;
var listComponent = exports.listComponent = _propTypes2.default.func;
var itemComponent = exports.itemComponent = _propTypes2.default.func;
var itemPreviewComponent = exports.itemPreviewComponent = _propTypes2.default.func;
var listPreviewComponent = exports.listPreviewComponent = _propTypes2.default.func;
var onMoveRow = exports.onMoveRow = _propTypes2.default.func;
var onMoveList = exports.onMoveList = _propTypes2.default.func;
var onDropRow = exports.onDropRow = _propTypes2.default.func;
var onDropList = exports.onDropList = _propTypes2.default.func;
var onDragEndRow = exports.onDragEndRow = _propTypes2.default.func;
var overscanListCount = exports.overscanListCount = _propTypes2.default.number;
var overscanRowCount = exports.overscanRowCount = _propTypes2.default.number;
var scrollToList = exports.scrollToList = _propTypes2.default.number;
var scrollToAlignment = exports.scrollToAlignment = _propTypes2.default.string;
var itemCacheKey = exports.itemCacheKey = _propTypes2.default.func;