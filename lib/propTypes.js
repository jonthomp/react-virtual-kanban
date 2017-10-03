'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropTypes = undefined;
exports.deprecate = deprecate;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = exports.PropTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.symbol]),

  decorator: _propTypes2.default.func
};

/**
 * Wraps a singular React.PropTypes.[type] with
 * a console.warn call that is only called if the
 * prop is not undefined/null and is only called
 * once.
 * @param  {Object} propType React.PropType type
 * @param  {String} message  Deprecation message
 * @return {Function}        ReactPropTypes checkType
 */
function deprecate(propType, message) {
  var warned = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var props = args[0],
        propName = args[1];

    var prop = props[propName];
    if (prop !== undefined && prop !== null && !warned) {
      warned = true;
    }
    return propType.call.apply(propType, [this].concat(args));
  };
}