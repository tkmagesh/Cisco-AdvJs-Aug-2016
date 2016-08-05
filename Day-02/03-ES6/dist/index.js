(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
	function Calculator() {
		_classCallCheck(this, Calculator);
	}

	_createClass(Calculator, [{
		key: "add",
		value: function add(x, y) {
			return x + y;
		}
	}, {
		key: "subtract",
		value: function subtract(x, y) {
			return x - y;
		}
	}]);

	return Calculator;
}();

exports.default = Calculator;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator = require('./Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spinner = function () {
	var countSymbol = Symbol();

	var Spinner = function () {
		function Spinner() {
			_classCallCheck(this, Spinner);

			this[countSymbol] = 0;
		}

		_createClass(Spinner, [{
			key: 'up',
			value: function up() {
				return ++this[countSymbol];
			}
		}, {
			key: 'down',
			value: function down() {
				return --this[countSymbol];
			}
		}]);

		return Spinner;
	}();

	return Spinner;
}();

var evenNumbers = [10, 11, 12, 13, 14].filter(function (n) {
	return n % 2 === 0;
});

console.log(evenNumbers);

var calc = new _Calculator2.default();

},{"./Calculator":1}]},{},[2]);
