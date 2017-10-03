'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGhost = exports.listStyle = exports.listId = exports.list = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = exports.list = _propTypes2.default.object.isRequired;
var listId = exports.listId = _propTypes3.PropTypes.id.isRequired;
var listStyle = exports.listStyle = _propTypes2.default.object.isRequired;
var isGhost = exports.isGhost = _propTypes2.default.bool.isRequired;