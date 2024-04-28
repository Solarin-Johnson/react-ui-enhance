"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _Input = _interopRequireDefault(require("./lib/Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { InputText } from "react-ui-enhance";

const root = _client.default.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/_react.default.createElement(_Input.default, null));