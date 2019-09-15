"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MgmtConsumer = exports.useMgmt = exports.MgmtProvider = exports.MgmtContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MgmtContext = _react["default"].createContext();

exports.MgmtContext = MgmtContext;

var MgmtProvider = function MgmtProvider(_ref) {
  var reducer = _ref.reducer,
      initialState = _ref.initialState,
      children = _ref.children;
  return _react["default"].createElement(MgmtContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};

exports.MgmtProvider = MgmtProvider;

var useMgmt = function useMgmt() {
  return (0, _react.useContext)(MgmtContext);
};

exports.useMgmt = useMgmt;
var MgmtConsumer = MgmtContext.Consumer;
exports.MgmtConsumer = MgmtConsumer;
