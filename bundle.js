/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");




var Calculator = /*#__PURE__*/function () {
  function Calculator(previousOperand, currentOperand) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Calculator);

    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clear();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Calculator, [{
    key: "clear",
    value: function clear() {
      this.previousNumber = '';
      this.currentNumber = '';
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }
  }, {
    key: "appendNumbers",
    value: function appendNumbers(number) {
      if (number === '.' && this.currentNumber.includes('.')) {
        return;
      }

      ;
      this.currentNumber = this.currentNumber.toString() + number.toString();
    }
  }, {
    key: "chosenOperation",
    value: function chosenOperation(operationSign) {
      if (this.currentNumber === '') {
        return;
      }

      ;

      if (this.previousNumber !== '') {
        this.calculate();
      }

      this.operation = operationSign;
      this.previousNumber = this.currentNumber;
      this.currentNumber = '';
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var result;
      var prev = parseFloat(this.previousNumber);
      var curr = parseFloat(this.currentNumber);

      if (isNaN(prev) || isNaN(curr)) {
        return;
      }

      ;

      switch (this.operation) {
        case '/':
          result = prev / curr;
          break;

        case '*':
          result = prev * curr;
          break;

        case '+':
          result = prev + curr;
          break;

        case '-':
          result = prev - curr;
          break;

        default:
          return;
      }

      this.currentNumber = result;
      this.operation = undefined;
      this.previousNumber = '';
    }
  }, {
    key: "update",
    value: function update() {
      this.currentOperand.innerText = this.currentNumber;

      if (this.operation != undefined) {
        this.previousOperand.innerText = "".concat(this.previousNumber, " ").concat(this.operation);
      } else {
        this.previousOperand.innerText = '';
      }
    }
  }]);

  return Calculator;
}();

var previousOperand = document.querySelector('[data-previous]');
var currentOperand = document.querySelector('[data-current]');
var clearBtn = document.querySelector('[data-clear]');
var deleteBtn = document.querySelector('[data-delete]');
var operationBtns = document.querySelectorAll('[data-operation]');
var numberBtns = document.querySelectorAll('[data-number]');
var equalBtn = document.querySelector('[data-equal]');
var calculator = new Calculator(previousOperand, currentOperand);
numberBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    calculator.appendNumbers(btn.innerText);
    calculator.update();
  });
});
operationBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    calculator.chosenOperation(btn.innerText);
    calculator.update();
  });
});
equalBtn.addEventListener('click', function () {
  calculator.calculate();
  calculator.update();
});
clearBtn.addEventListener('click', function () {
  calculator.clear();
  calculator.update();
});
deleteBtn.addEventListener('click', function () {
  calculator.delete();
  calculator.update();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map