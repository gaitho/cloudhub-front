"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useDarkMode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = _interopRequireDefault(require("cloudhub-components/dist/theme/ThemeProvider"));

var _core = require("cloudhub-components/dist/mui/core");

var _getTheme = _interopRequireDefault(require("./getTheme"));

var _aos = _interopRequireDefault(require("aos"));

require("react-lazy-load-image-component/src/effects/opacity.css");

require("leaflet/dist/leaflet.css");

require("../assets/css/index.css");

require("swiper/css/swiper.min.css");

require("aos/dist/aos.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDarkMode = function useDarkMode() {
  var _useState = (0, _react.useState)('light'),
      _useState2 = _slicedToArray(_useState, 2),
      themeMode = _useState2[0],
      setTheme = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mountedComponent = _useState4[0],
      setMountedComponent = _useState4[1];

  var setMode = function setMode(mode) {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  var themeToggler = function themeToggler() {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  (0, _react.useEffect)(function () {
    var localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);

    _aos.default.refresh();
  }, []);
  (0, _react.useEffect)(function () {
    _aos.default.refresh();
  }, [themeMode]);
  return [themeMode, themeToggler, mountedComponent];
};

exports.useDarkMode = useDarkMode;

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  _react.default.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    _aos.default.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out'
    });
  }, []);

  var _useDarkMode = useDarkMode(),
      _useDarkMode2 = _slicedToArray(_useDarkMode, 3),
      themeMode = _useDarkMode2[0],
      themeToggler = _useDarkMode2[1],
      mountedComponent = _useDarkMode2[2];

  if (!mountedComponent) return /*#__PURE__*/_react.default.createElement("div", null);
  return /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, _extends({
    theme: (0, _getTheme.default)({
      mode: themeMode
    }),
    themeMode: themeMode,
    themeToggler: themeToggler
  }, props), /*#__PURE__*/_react.default.createElement(_core.CssBaseline, null), /*#__PURE__*/_react.default.createElement(_core.Paper, {
    elevation: 0
  }, typeof children === 'function' ? children({
    themeMode: themeMode,
    themeToggler: themeToggler
  }) : children));
};

var _default = ThemeProvider;
exports.default = _default;