"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useLog = function useLog(input) {
  if (input.constructor === Array) {
    (0, _react.useEffect)(function () {
      input.map(function (item) {
        return console.log(item);
      });
    }, input);
  } else if (input.constructor === Object) {
    if (Object.keys(input).length > 1) {
      var dependence = [];
      Object.keys(input).map(function (item) {
        return dependence.push(input[item]);
      });
      (0, _react.useEffect)(function () {
        console.log(input);
      }, dependence);
    } else {
      var inputName = Object.keys(input)[0];
      (0, _react.useEffect)(function () {
        console.log(input);
      }, [input[inputName]]);
    }

    ;
  } else {
    (0, _react.useEffect)(function () {
      console.log(input);
    }, [input]);
  }

  ;
};

var _default = useLog;
exports.default = _default;
