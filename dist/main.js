/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tekksunn/image-carousel/src/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@tekksunn/image-carousel/src/index.js ***!
  \************************************************************/
/***/ ((module) => {

const get = (query) => document.querySelector(query);

const getAll = (query) => Array.from(document.querySelectorAll(query));

const getProperty = (element, propertyName) => getComputedStyle(element).getPropertyValue(propertyName);

const getWidth = (element) => element.offsetWidth;

const getLeft = (element) => parseFloat(getProperty(element, "left").slice(0, -2));

const changeLeft = (element, newNum) => { element.style.left = newNum };

const exceedsUpward = (number, coreNumber) => number <= -coreNumber;

const exceedsDownward = (number) => number > 0;

const addLeft = (element) => {
    const divWidth = getWidth(element);
    const pictureWidth = getWidth(element.childNodes[1]);
    const curLeftVal = getLeft(element);
    const newLeft = curLeftVal - pictureWidth;
    if (exceedsUpward(newLeft, divWidth)) {
        return 0;
    }
    return newLeft;
};

const subLeft = (element) => {
    const divWidth = getWidth(element);
    const pictureWidth = getWidth(element.childNodes[1]);
    const curLeftVal = getLeft(element);
    const newLeft = curLeftVal + pictureWidth;
    if (exceedsDownward(newLeft)) {
        return -divWidth + pictureWidth;
    }
    return newLeft;
};

const getNumPictures = (pictures) => Math.floor(pictures.childNodes.length / 2);

const getCurrentImgNum = (pictureFrame) => parseInt(pictureFrame.lastChild.textContent);

const getImgNum = (pictureFrame) => pictureFrame.lastChild;

const changeImgNum = (pictureFrame, newNum) => { getImgNum(pictureFrame).textContent = `${newNum}` };

function addImageNum(pictureFrame, pictures) {
    const numPictures = getNumPictures(pictures);
    const currentNum = getCurrentImgNum(pictureFrame);
    const newNum = currentNum + 1;
    if (newNum > numPictures) {
        return 1;
    }
    return newNum;
}

function subImageNum(pictureFrame, pictures) {
    const numPictures = getNumPictures(pictures);
    const currentNum = getCurrentImgNum(pictureFrame);
    const newNum = currentNum - 1;
    if (newNum < 1) {
        return numPictures;
    }
    return newNum;
}

function getPictures(pictureFrame) {
    return pictureFrame.childNodes[1];
}

function next(pictureFrame) {
    const pictures = getPictures(pictureFrame);
    if (pictures.length <= 2) {
        return;
    }
    const newLeft = `${addLeft(pictures)}px`;
    const newImgNum = addImageNum(pictureFrame, pictures);
    changeLeft(pictures, newLeft);
    changeImgNum(pictureFrame, newImgNum);
}

function back(pictureFrame) {
    const pictures = getPictures(pictureFrame);
    if (pictures.length <= 2) {
        return;
    }
    const newLeft = `${subLeft(pictures)}px`;
    const newImgNum = subImageNum(pictureFrame, pictures);
    changeLeft(pictures, newLeft);
    changeImgNum(pictureFrame, newImgNum);
}

function createButton(className, callbackfn) {
    const button = document.createElement('button');
    button.className = `p-frame-asset p-frame-btn ${className}`;
    button.addEventListener('click', callbackfn);
    return button;
}

function createText(className, type, content) {
    const text = document.createElement(type);
    text.className = `p-frame-asset p-frame-text ${className}`;
    text.textContent = content;
    return text;
}

function constructButtons(pictureFrame) {
    const nextButton = createButton('next-btn', () => next(pictureFrame));
    const backButton = createButton('back-btn', () => back(pictureFrame));
    const imageNumber = createText('image-number', 'p', '1');
    window.setInterval(() => next(pictureFrame), 5000);
    pictureFrame.appendChild(nextButton);
    pictureFrame.appendChild(backButton);
    pictureFrame.appendChild(imageNumber);
}

function makeImageCarouselAll(frameQuery) {
    const pictureFrameAll = getAll(frameQuery);
    pictureFrameAll.map((pictureFrame) => constructButtons(pictureFrame));
}

function makeImageCarousel(frameQuery) {
    const pictureFrame = get(frameQuery);
    constructButtons(pictureFrame);
}

function loadDefaultImageCarousel() {
    const defaultQuery = "div.picture-frame";
    const pictureFrameAll = getAll(defaultQuery);
    pictureFrameAll.map((pictureFrame) => constructButtons(pictureFrame));
}

module.exports = { makeImageCarouselAll, makeImageCarousel, loadDefaultImageCarousel };


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@tekksunn/image-carousel/src/styles.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@tekksunn/image-carousel/src/styles.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./next.png */ "./node_modules/@tekksunn/image-carousel/src/next.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./back.png */ "./node_modules/@tekksunn/image-carousel/src/back.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --tim-btn-size: 35px;
    --tim-img-size: 300px;
    --tim-shadow-normal: 5px 5px 10px #00000025;
    --tim-next-image-btn: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    --tim-back-image-btn: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    --tim-center-img: calc((var(--tim-img-size) / 2) - (var(--tim-btn-size) / 2));
    --tim-p-frame-fs: calc(var(--tim-img-size) / 20);
    --tim-p-frame-fg: #eee;
    --tim-true-center: calc(var(--tim-img-size) / 2);
    --tim-text-shadow: 2px 2px 5px #00000075;
    --tim-p-frame-bdr: 10px;
    --tim-p-frame-btn-bg: #ffffff25;
    --tim-p-frame-btn-bg-hov: #ffffff75;
    --tim-space: 5px;
    --tim-p-frame-bd: 2.5px solid black;
}

div.picture-frame.image-carousel {
    height: var(--tim-img-size);
    width: var(--tim-img-size);
    box-sizing: border-box;
    overflow: hidden;
    border: var(--tim-p-frame-bd);
    box-shadow: var(--tim-shadow-normal);
    border-radius: var(--tim-p-frame-bdr);
    display: flex;
    position: relative;
}

div.picture-frame.image-carousel > div.pictures > img.carousel-img {
    height: var(--tim-img-size);
    width: var(--tim-img-size);
    object-fit: cover;
}

div.picture-frame.image-carousel > div.pictures {
    display: flex;
    position: relative;
}

.p-frame-asset {
    position: absolute;
}

.p-frame-btn {
    border: 0;
    height: var(--tim-btn-size);
    width: var(--tim-btn-size);
    border-radius: var(--tim-btn-size);
    cursor: pointer;
    background-size: var(--tim-btn-size);
    background-color: var(--tim-p-frame-btn-bg);
    top: var(--tim-center-img);
}

.p-frame-btn:hover {
    background-color: var(--tim-p-frame-btn-bg-hov);
    box-shadow: var(--tim-shadow-normal);
}

.next-btn {
    background-image: var(--tim-next-image-btn);
    right: var(--tim-space);
}

.back-btn {
    background-image: var(--tim-back-image-btn);
    left: var(--tim-space);
}

.p-frame-text {
    color: var(--tim-p-frame-fg);
    font-size: var(--tim-p-frame-fs);
    text-shadow: var(--tim-text-shadow);
}

.image-number {
    left: var(--tim-true-center);
    bottom: var(--tim-space);
}`, "",{"version":3,"sources":["webpack://./node_modules/@tekksunn/image-carousel/src/styles.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,2CAA2C;IAC3C,6DAAuC;IACvC,6DAAuC;IACvC,6EAA6E;IAC7E,gDAAgD;IAChD,sBAAsB;IACtB,gDAAgD;IAChD,wCAAwC;IACxC,uBAAuB;IACvB,+BAA+B;IAC/B,mCAAmC;IACnC,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,2BAA2B;IAC3B,0BAA0B;IAC1B,sBAAsB;IACtB,gBAAgB;IAChB,6BAA6B;IAC7B,oCAAoC;IACpC,qCAAqC;IACrC,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,2BAA2B;IAC3B,0BAA0B;IAC1B,kCAAkC;IAClC,eAAe;IACf,oCAAoC;IACpC,2CAA2C;IAC3C,0BAA0B;AAC9B;;AAEA;IACI,+CAA+C;IAC/C,oCAAoC;AACxC;;AAEA;IACI,2CAA2C;IAC3C,uBAAuB;AAC3B;;AAEA;IACI,2CAA2C;IAC3C,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,gCAAgC;IAChC,mCAAmC;AACvC;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;AAC5B","sourcesContent":[":root {\n    --tim-btn-size: 35px;\n    --tim-img-size: 300px;\n    --tim-shadow-normal: 5px 5px 10px #00000025;\n    --tim-next-image-btn: url(\"./next.png\");\n    --tim-back-image-btn: url(\"./back.png\");\n    --tim-center-img: calc((var(--tim-img-size) / 2) - (var(--tim-btn-size) / 2));\n    --tim-p-frame-fs: calc(var(--tim-img-size) / 20);\n    --tim-p-frame-fg: #eee;\n    --tim-true-center: calc(var(--tim-img-size) / 2);\n    --tim-text-shadow: 2px 2px 5px #00000075;\n    --tim-p-frame-bdr: 10px;\n    --tim-p-frame-btn-bg: #ffffff25;\n    --tim-p-frame-btn-bg-hov: #ffffff75;\n    --tim-space: 5px;\n    --tim-p-frame-bd: 2.5px solid black;\n}\n\ndiv.picture-frame.image-carousel {\n    height: var(--tim-img-size);\n    width: var(--tim-img-size);\n    box-sizing: border-box;\n    overflow: hidden;\n    border: var(--tim-p-frame-bd);\n    box-shadow: var(--tim-shadow-normal);\n    border-radius: var(--tim-p-frame-bdr);\n    display: flex;\n    position: relative;\n}\n\ndiv.picture-frame.image-carousel > div.pictures > img.carousel-img {\n    height: var(--tim-img-size);\n    width: var(--tim-img-size);\n    object-fit: cover;\n}\n\ndiv.picture-frame.image-carousel > div.pictures {\n    display: flex;\n    position: relative;\n}\n\n.p-frame-asset {\n    position: absolute;\n}\n\n.p-frame-btn {\n    border: 0;\n    height: var(--tim-btn-size);\n    width: var(--tim-btn-size);\n    border-radius: var(--tim-btn-size);\n    cursor: pointer;\n    background-size: var(--tim-btn-size);\n    background-color: var(--tim-p-frame-btn-bg);\n    top: var(--tim-center-img);\n}\n\n.p-frame-btn:hover {\n    background-color: var(--tim-p-frame-btn-bg-hov);\n    box-shadow: var(--tim-shadow-normal);\n}\n\n.next-btn {\n    background-image: var(--tim-next-image-btn);\n    right: var(--tim-space);\n}\n\n.back-btn {\n    background-image: var(--tim-back-image-btn);\n    left: var(--tim-space);\n}\n\n.p-frame-text {\n    color: var(--tim-p-frame-fg);\n    font-size: var(--tim-p-frame-fs);\n    text-shadow: var(--tim-text-shadow);\n}\n\n.image-number {\n    left: var(--tim-true-center);\n    bottom: var(--tim-space);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_tekksunn_image_carousel_src_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/@tekksunn/image-carousel/src/styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@tekksunn/image-carousel/src/styles.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_tekksunn_image_carousel_src_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --img-size: 300px;
    --shadow-normal: 5px 5px 10px rgb(0, 0, 0, 0.25);
    --padding-normal: 8px 16px;
}

* {
    font-family: Arial, Helvetica, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template: max-content repeat(3, 1fr) max-content / repeat(3, 1fr);
    grid-template-areas:
        "header header header"
        ". . ."
        ". image-carousel-container ."
        ". . ."
        ". footer .";
}

header {
    grid-area: header;
    text-align: center;
    background-color: black;
    color: white;
    text-shadow: 2px 2px 5px #ffffff75;
    box-shadow: var(--shadow-normal);
    padding: var(--padding-normal);
}

.title-link {
    color: white;
}

.title-link:hover {
    text-decoration: none;
    text-shadow: 2px 2px 5px #ffffff50;
    opacity: 50%;
}

.image-carousel-container {
    grid-area: image-carousel-container;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    margin: 0;
    padding: 0;
}

footer {
    grid-area: footer;
    text-align: center;
}

.credit {
    padding: 8px 4px;
    border-radius: 25px;
    color: white;
}

.credit:not(.credit-link) {
    background-color: #00000075;
    box-shadow: var(--shadow-normal);
}

.credit-link:hover {
    text-decoration: none;
    background-color: #00000075;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/styles.css"],"names":[],"mappings":"AAEA;IACI,iBAAiB;IACjB,gDAAgD;IAChD,0BAA0B;AAC9B;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,aAAa;IACb,sEAAsE;IACtE;;;;;oBAKgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,kCAAkC;IAClC,gCAAgC;IAChC,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;AAC/B","sourcesContent":["@import url(\"@tekksunn/image-carousel/src/styles.css\");\n\n:root {\n    --img-size: 300px;\n    --shadow-normal: 5px 5px 10px rgb(0, 0, 0, 0.25);\n    --padding-normal: 8px 16px;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: grid;\n    grid-template: max-content repeat(3, 1fr) max-content / repeat(3, 1fr);\n    grid-template-areas:\n        \"header header header\"\n        \". . .\"\n        \". image-carousel-container .\"\n        \". . .\"\n        \". footer .\";\n}\n\nheader {\n    grid-area: header;\n    text-align: center;\n    background-color: black;\n    color: white;\n    text-shadow: 2px 2px 5px #ffffff75;\n    box-shadow: var(--shadow-normal);\n    padding: var(--padding-normal);\n}\n\n.title-link {\n    color: white;\n}\n\n.title-link:hover {\n    text-decoration: none;\n    text-shadow: 2px 2px 5px #ffffff50;\n    opacity: 50%;\n}\n\n.image-carousel-container {\n    grid-area: image-carousel-container;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.title {\n    margin: 0;\n    padding: 0;\n}\n\nfooter {\n    grid-area: footer;\n    text-align: center;\n}\n\n.credit {\n    padding: 8px 4px;\n    border-radius: 25px;\n    color: white;\n}\n\n.credit:not(.credit-link) {\n    background-color: #00000075;\n    box-shadow: var(--shadow-normal);\n}\n\n.credit-link:hover {\n    text-decoration: none;\n    background-color: #00000075;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/styles.css":
/*!************************************!*\
  !*** ./src/stylesheets/styles.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@tekksunn/image-carousel/src/back.png":
/*!************************************************************!*\
  !*** ./node_modules/@tekksunn/image-carousel/src/back.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c6c88251772d11c67289.png";

/***/ }),

/***/ "./node_modules/@tekksunn/image-carousel/src/next.png":
/*!************************************************************!*\
  !*** ./node_modules/@tekksunn/image-carousel/src/next.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47e09a3b86900a59eb58.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/styles.css */ "./src/stylesheets/styles.css");
/* harmony import */ var _tekksunn_image_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tekksunn/image-carousel */ "./node_modules/@tekksunn/image-carousel/src/index.js");
/* harmony import */ var _tekksunn_image_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tekksunn_image_carousel__WEBPACK_IMPORTED_MODULE_1__);




document.addEventListener("DOMContentLoaded", _tekksunn_image_carousel__WEBPACK_IMPORTED_MODULE_1__.loadDefaultImageCarousel);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map