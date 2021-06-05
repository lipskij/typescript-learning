/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": () => (/* binding */ Invoice)
/* harmony export */ });
// classes
class Invoice {
    constructor(client, details, amount, date) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.date = date;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details} at ${this.date}`;
    }
}


/***/ }),

/***/ "./src/classes/ListTemplate.ts":
/*!*************************************!*\
  !*** ./src/classes/ListTemplate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListTemplate": () => (/* binding */ ListTemplate)
/* harmony export */ });
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        const button = document.createElement("button");
        button.innerText = "Delete";
        li.append(button);
        function deleteElement(event) {
            if (event.type === "click") {
                li.remove();
            }
        }
        button.addEventListener("click", deleteElement);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}


/***/ }),

/***/ "./src/classes/Payments.ts":
/*!*********************************!*\
  !*** ./src/classes/Payments.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment)
/* harmony export */ });
// classes
class Payment {
    constructor(recipient, details, amount, date) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.date = date;
    }
    format() {
        return `${this.recipient} is owed €${this.amount} for ${this.details} at ${this.date}`;
    }
}


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
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ "./src/classes/Invoice.ts");
/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplate */ "./src/classes/ListTemplate.ts");
/* harmony import */ var _classes_Payments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payments */ "./src/classes/Payments.ts");



const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const date = document.querySelector(".date");
// date
date.value = new Date().toISOString().split("T")[0];
// list template instance
const ul = document.querySelector("ul");
const list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber, date.value];
    let doc;
    if (type.value === "invoice") {
        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(...values);
    }
    else {
        doc = new _classes_Payments__WEBPACK_IMPORTED_MODULE_2__.Payment(...values);
    }
    list.render(doc, type.value, "end");
});

})();

/******/ })()
;
//# sourceMappingURL=app.js.map