/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/styles/index.sass");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/index.sass":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/lib/loader.js??ref--6-2!./src/styles/index.sass ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Seymour+One&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);

// Module
exports.push([module.i, "button {\n  background-color: #f8ae5d;\n  border: 1px solid #e44022;\n  padding: 0 20px;\n  margin: 10px;\n  font-size: 1.12rem;\n  font-family: \"Roboto\", sans-serif;\n  color: #485263;\n  line-height: 175%;\n}\nbutton:hover, button:active {\n  border-width: 3px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #76d5ec;\n}\n\nheader {\n  width: 100%;\n}\nheader #homeIcon img {\n  position: absolute;\n  padding: 10px;\n  left: 40px;\n  top: 20px;\n  width: 5%;\n  height: auto;\n}\nheader h1 {\n  text-align: center;\n  max-width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Seymour One\", sans-serif;\n  font-size: 350%;\n}\nheader h1 .letter-1 {\n  color: #e16006;\n}\nheader h1 .letter-2 {\n  color: #e27518;\n}\nheader h1 .letter-3 {\n  color: #e98b2b;\n}\nheader h1 .letter-4 {\n  color: #ffa022;\n}\nheader h1 .letter-5 {\n  color: #ff841b;\n}\nheader h1 .letter-6 {\n  color: #ea8b1b;\n}\nheader h1 .letter-7 {\n  color: #c56f14;\n}\nheader h1 .space {\n  display: inline-block;\n  width: 20px;\n}\nheader h1 #routerContainer {\n  margin: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-around;\n}\n\n#homeNav {\n  margin: 40px auto;\n  min-width: 36%;\n  min-height: 24%;\n  border-width: 12px;\n  border-style: solid;\n  border-color: #485263;\n  background-color: #f8ae5d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#homeNav ul {\n  height: 100%;\n  overflow: auto;\n  text-align: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n#homeNav ul li {\n  border-width: 6px;\n  border-style: solid;\n  border-color: #fff;\n  margin: 20px;\n  padding: 10px;\n}\n#homeNav ul li:hover {\n  border-color: #b4b4b4;\n}\n#homeNav ul a {\n  font-family: \"Seymour One\", sans-serif;\n  font-size: 4rem;\n  color: #fff;\n  text-decoration: none;\n}\n#homeNav ul a:hover, #homeNav ul a:focus {\n  color: #b4b4b4;\n}\n\n#routerContainer {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n#routerContainer .appButtons {\n  width: 100%;\n  margin-right: 20px;\n  margin-left: auto;\n}\n#routerContainer #toolbar {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  min-width: 6%;\n  overflow: hidden;\n  margin-top: 6%;\n}\n#routerContainer #toolbar div {\n  max-width: 90%;\n}\n#routerContainer #toolbar div svg {\n  fill: #485263;\n  padding: 10px;\n}\n#routerContainer #toolbar div svg:hover, #routerContainer #toolbar div svg:focus {\n  fill: #e44022;\n}\n#routerContainer .canvasSection {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 60%;\n  overflow: hidden;\n}\n#routerContainer .canvasSection #currentStyle {\n  width: 72%;\n  min-height: 10%;\n  margin-left: auto;\n  margin-right: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-content: space-between;\n}\n#routerContainer .canvasSection #currentStyle div {\n  font-family: \"Roboto\", sans-serif;\n  color: #485263;\n  font-weight: bold;\n  margin: 0 20px;\n}\n#routerContainer .canvasSection #currentStyle div input {\n  display: block;\n  margin-top: 20px;\n  width: 100%;\n}\n#routerContainer .canvasSection .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 70%;\n  height: 90%;\n  margin: 8px;\n  margin-top: 6%;\n}\n#routerContainer .canvasSection .color:hover, #routerContainer .canvasSection .color:focus {\n  border-color: #e44022;\n}\n#routerContainer .canvasSection #canvas {\n  border-width: 6px;\n  border-style: solid;\n  border-color: #485263;\n  background-color: white;\n  margin: 20px;\n}\n#routerContainer .canvasSection .canvasButtons {\n  display: flex;\n  align-content: space-around;\n}\n#routerContainer .canvasSection .canvasButtons button {\n  margin-left: 0;\n}\n#routerContainer .canvasSection #clearBtn {\n  margin-left: auto;\n  margin-right: 0;\n}\n#routerContainer #colorBlocks {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 6%;\n  width: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: space-around;\n}\n#routerContainer #colorBlocks .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 90%;\n  margin: 8px;\n}\n#routerContainer #colorBlocks .color:hover, #routerContainer #colorBlocks .color:focus {\n  border-color: #e44022;\n}\n#routerContainer #colorBlocks .color1 {\n  background-color: #EE2029;\n}\n#routerContainer #colorBlocks .color2 {\n  background-color: #EE7B20;\n}\n#routerContainer #colorBlocks .color3 {\n  background-color: #F5E52E;\n}\n#routerContainer #colorBlocks .color4 {\n  background-color: #58B422;\n}\n#routerContainer #colorBlocks .color5 {\n  background-color: #75E1DC;\n}\n#routerContainer #colorBlocks .color6 {\n  background-color: #1C20E9;\n}\n#routerContainer #colorBlocks .color7 {\n  background-color: #781CE9;\n}\n#routerContainer #colorBlocks .color8 {\n  background-color: #808080;\n}\n\n#routerContainer {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n#routerContainer .appButtons {\n  width: 100%;\n  margin-right: 20px;\n  margin-left: auto;\n}\n#routerContainer #toolbar {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  min-width: 6%;\n  overflow: hidden;\n  margin-top: 6%;\n}\n#routerContainer #toolbar div {\n  max-width: 90%;\n}\n#routerContainer #toolbar div svg {\n  fill: #485263;\n  padding: 10px;\n}\n#routerContainer #toolbar div svg:hover, #routerContainer #toolbar div svg:focus {\n  fill: #e44022;\n}\n#routerContainer .canvasSection {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 60%;\n  overflow: hidden;\n}\n#routerContainer .canvasSection #currentStyle {\n  width: 72%;\n  min-height: 10%;\n  margin-left: auto;\n  margin-right: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-content: space-between;\n}\n#routerContainer .canvasSection #currentStyle div {\n  font-family: \"Roboto\", sans-serif;\n  color: #485263;\n  font-weight: bold;\n  margin: 0 20px;\n}\n#routerContainer .canvasSection #currentStyle div input {\n  display: block;\n  margin-top: 20px;\n  width: 100%;\n}\n#routerContainer .canvasSection .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 70%;\n  height: 90%;\n  margin: 8px;\n  margin-top: 6%;\n}\n#routerContainer .canvasSection .color:hover, #routerContainer .canvasSection .color:focus {\n  border-color: #e44022;\n}\n#routerContainer .canvasSection #canvas {\n  border-width: 6px;\n  border-style: solid;\n  border-color: #485263;\n  background-color: white;\n  margin: 20px;\n}\n#routerContainer .canvasSection .canvasButtons {\n  display: flex;\n  align-content: space-around;\n}\n#routerContainer .canvasSection .canvasButtons button {\n  margin-left: 0;\n}\n#routerContainer .canvasSection #clearBtn {\n  margin-left: auto;\n  margin-right: 0;\n}\n#routerContainer #colorBlocks {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 6%;\n  width: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: space-around;\n}\n#routerContainer #colorBlocks .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 90%;\n  margin: 8px;\n}\n#routerContainer #colorBlocks .color:hover, #routerContainer #colorBlocks .color:focus {\n  border-color: #e44022;\n}\n#routerContainer #colorBlocks .color1 {\n  background-color: #EE2029;\n}\n#routerContainer #colorBlocks .color2 {\n  background-color: #EE7B20;\n}\n#routerContainer #colorBlocks .color3 {\n  background-color: #F5E52E;\n}\n#routerContainer #colorBlocks .color4 {\n  background-color: #58B422;\n}\n#routerContainer #colorBlocks .color5 {\n  background-color: #75E1DC;\n}\n#routerContainer #colorBlocks .color6 {\n  background-color: #1C20E9;\n}\n#routerContainer #colorBlocks .color7 {\n  background-color: #781CE9;\n}\n#routerContainer #colorBlocks .color8 {\n  background-color: #808080;\n}\n\n#routerContainer .appButtons {\n  display: flex;\n}\n#routerContainer .appButtons #chooseImageBtn {\n  margin-left: auto;\n}\n#routerContainer button a {\n  text-decoration: none;\n  color: #485263;\n}\n#routerContainer #strokeWidth {\n  margin-top: 6%;\n}\n#routerContainer #strokeWidth svg {\n  margin: 20px;\n  margin-top: 0;\n}\n#routerContainer #strokeWidth svg:hover, #routerContainer #strokeWidth svg:focus {\n  stroke: #e44022;\n}\n\n.gallery {\n  margin: 20px auto;\n  padding: 10px;\n  min-width: 880px;\n  max-width: 1320px;\n  min-height: 660px;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-around;\n  background-color: #f8ae5d;\n  border-width: 3px;\n  border-style: solid;\n  border-color: #e44022;\n}\n.gallery figure {\n  overflow: hidden;\n  margin: 5px;\n  background-color: #59aed6;\n  border-width: 6px;\n  border-style: solid;\n  border-color: #485263;\n}\n.gallery figure:focus, .gallery figure:hover {\n  border-color: #e44022;\n}\n.gallery figure img {\n  display: block;\n  max-height: 90%;\n  width: auto;\n  padding: 10px;\n}\n.gallery figure figcaption {\n  display: block;\n  text-align: center;\n  color: #485263;\n  font-size: 1.4rem;\n  font-family: \"Seymour One\", sans-serif;\n}\n\n.galleryButtons {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n\n.gallery figure {\n  max-width: 286px;\n  max-height: 40%;\n}\n.gallery figure img {\n  max-width: 90%;\n  height: auto;\n}", "",{"version":3,"sources":["D:/Students/Дубешко/Курсовой/src/styles/_main.sass","index.sass","D:/Students/Дубешко/Курсовой/src/pages/home/home-page.sass","D:/Students/Дубешко/Курсовой/src/pages/painting/painting-page.sass","D:/Students/Дубешко/Курсовой/src/pages/colouring/colouring-page.sass","D:/Students/Дубешко/Курсовой/src/pages/choose-image/choose-image-page.sass","D:/Students/Дубешко/Курсовой/src/pages/my-paintings/my_paintings-page.sass"],"names":[],"mappings":"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","file":"index.sass","sourcesContent":["$main_color: #76d5ec\r\n$color1: #485263\r\n$color2: #f8ae5d\r\n$color3: #e44022\r\n\r\n$font_family1: 'Seymour One', sans-serif\r\n$font_family2: 'Roboto', sans-serif\r\n\r\n$font_size: 1.4rem\r\n$font_size_large: 4rem\r\n$font_size_small: 1rem\r\n\r\n$padding: 10px\r\n$margin: 20px\r\n\r\n$button_width: 5%\r\n$button_height: 5%\r\n\r\n$block_width: 12%\r\n$border: 3px\r\n\r\n$image_width: 220px\r\n\r\n\r\n\r\n%button\r\n  background-color: $color2\r\n  border: 1px solid $color3\r\n  padding: 0 20px\r\n  margin: $margin / 2\r\n  font-size: $font_size * 0.8\r\n  font-family: $font_family2\r\n  color: $color1\r\n  line-height: $button_height * 35\r\n\r\n  &:hover, &:active\r\n    border-width: 3px\r\n\r\n@mixin align-center\r\n  position: absolute\r\n  top: 50%\r\n  left: 50%\r\n  transform: translate(-50%, -50%)\r\n\r\n@mixin border($width, $color)\r\n  border:\r\n    width: $width\r\n    style: solid\r\n    color: $color\r\n\r\nbody\r\n  margin: 0\r\n  padding: 0\r\n  background-color: $main_color\r\n\r\nheader\r\n  width: 100%\r\n\r\n  #homeIcon img\r\n    position: absolute\r\n    padding: $padding\r\n    left: $margin * 2\r\n    top: $margin\r\n    width: $button_width\r\n    height: auto\r\n\r\n\r\n  h1\r\n    text-align: center\r\n    max-width: 75%\r\n    margin-left: auto\r\n    margin-right: auto\r\n    font:\r\n      family: $font_family1\r\n      size: 350%\r\n\r\n    .letter-1\r\n      color: #e16006\r\n    .letter-2\r\n      color: #e27518\r\n    .letter-3\r\n      color: #e98b2b\r\n    .letter-4\r\n      color: #ffa022\r\n    .letter-5\r\n      color: #ff841b\r\n    .letter-6\r\n      color: #ea8b1b\r\n    .letter-7\r\n      color: #c56f14\r\n    .space\r\n      display: inline-block\r\n      width: 20px\r\n\r\n    #routerContainer\r\n      margin: $margin\r\n      display: flex\r\n      flex-wrap: wrap\r\n      align-items: stretch\r\n      justify-content: space-around\r\n\r\nbutton\r\n  @extend %button\r\n\r\n","@import url(\"https://fonts.googleapis.com/css?family=Seymour+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\nbutton {\n  background-color: #f8ae5d;\n  border: 1px solid #e44022;\n  padding: 0 20px;\n  margin: 10px;\n  font-size: 1.12rem;\n  font-family: \"Roboto\", sans-serif;\n  color: #485263;\n  line-height: 175%;\n}\nbutton:hover, button:active {\n  border-width: 3px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #76d5ec;\n}\n\nheader {\n  width: 100%;\n}\nheader #homeIcon img {\n  position: absolute;\n  padding: 10px;\n  left: 40px;\n  top: 20px;\n  width: 5%;\n  height: auto;\n}\nheader h1 {\n  text-align: center;\n  max-width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Seymour One\", sans-serif;\n  font-size: 350%;\n}\nheader h1 .letter-1 {\n  color: #e16006;\n}\nheader h1 .letter-2 {\n  color: #e27518;\n}\nheader h1 .letter-3 {\n  color: #e98b2b;\n}\nheader h1 .letter-4 {\n  color: #ffa022;\n}\nheader h1 .letter-5 {\n  color: #ff841b;\n}\nheader h1 .letter-6 {\n  color: #ea8b1b;\n}\nheader h1 .letter-7 {\n  color: #c56f14;\n}\nheader h1 .space {\n  display: inline-block;\n  width: 20px;\n}\nheader h1 #routerContainer {\n  margin: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-around;\n}\n\n#homeNav {\n  margin: 40px auto;\n  min-width: 36%;\n  min-height: 24%;\n  border-width: 12px;\n  border-style: solid;\n  border-color: #485263;\n  background-color: #f8ae5d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#homeNav ul {\n  height: 100%;\n  overflow: auto;\n  text-align: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n#homeNav ul li {\n  border-width: 6px;\n  border-style: solid;\n  border-color: #fff;\n  margin: 20px;\n  padding: 10px;\n}\n#homeNav ul li:hover {\n  border-color: #b4b4b4;\n}\n#homeNav ul a {\n  font-family: \"Seymour One\", sans-serif;\n  font-size: 4rem;\n  color: #fff;\n  text-decoration: none;\n}\n#homeNav ul a:hover, #homeNav ul a:focus {\n  color: #b4b4b4;\n}\n\n#routerContainer {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n#routerContainer .appButtons {\n  width: 100%;\n  margin-right: 20px;\n  margin-left: auto;\n}\n#routerContainer #toolbar {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  min-width: 6%;\n  overflow: hidden;\n  margin-top: 6%;\n}\n#routerContainer #toolbar div {\n  max-width: 90%;\n}\n#routerContainer #toolbar div svg {\n  fill: #485263;\n  padding: 10px;\n}\n#routerContainer #toolbar div svg:hover, #routerContainer #toolbar div svg:focus {\n  fill: #e44022;\n}\n#routerContainer .canvasSection {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 60%;\n  overflow: hidden;\n}\n#routerContainer .canvasSection #currentStyle {\n  width: 72%;\n  min-height: 10%;\n  margin-left: auto;\n  margin-right: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-content: space-between;\n}\n#routerContainer .canvasSection #currentStyle div {\n  font-family: \"Roboto\", sans-serif;\n  color: #485263;\n  font-weight: bold;\n  margin: 0 20px;\n}\n#routerContainer .canvasSection #currentStyle div input {\n  display: block;\n  margin-top: 20px;\n  width: 100%;\n}\n#routerContainer .canvasSection .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 70%;\n  height: 90%;\n  margin: 8px;\n  margin-top: 6%;\n}\n#routerContainer .canvasSection .color:hover, #routerContainer .canvasSection .color:focus {\n  border-color: #e44022;\n}\n#routerContainer .canvasSection #canvas {\n  border-width: 6px;\n  border-style: solid;\n  border-color: #485263;\n  background-color: white;\n  margin: 20px;\n}\n#routerContainer .canvasSection .canvasButtons {\n  display: flex;\n  align-content: space-around;\n}\n#routerContainer .canvasSection .canvasButtons button {\n  margin-left: 0;\n}\n#routerContainer .canvasSection #clearBtn {\n  margin-left: auto;\n  margin-right: 0;\n}\n#routerContainer #colorBlocks {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 6%;\n  width: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: space-around;\n}\n#routerContainer #colorBlocks .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 90%;\n  margin: 8px;\n}\n#routerContainer #colorBlocks .color:hover, #routerContainer #colorBlocks .color:focus {\n  border-color: #e44022;\n}\n#routerContainer #colorBlocks .color1 {\n  background-color: #EE2029;\n}\n#routerContainer #colorBlocks .color2 {\n  background-color: #EE7B20;\n}\n#routerContainer #colorBlocks .color3 {\n  background-color: #F5E52E;\n}\n#routerContainer #colorBlocks .color4 {\n  background-color: #58B422;\n}\n#routerContainer #colorBlocks .color5 {\n  background-color: #75E1DC;\n}\n#routerContainer #colorBlocks .color6 {\n  background-color: #1C20E9;\n}\n#routerContainer #colorBlocks .color7 {\n  background-color: #781CE9;\n}\n#routerContainer #colorBlocks .color8 {\n  background-color: #808080;\n}\n\n#routerContainer {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n#routerContainer .appButtons {\n  width: 100%;\n  margin-right: 20px;\n  margin-left: auto;\n}\n#routerContainer #toolbar {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  min-width: 6%;\n  overflow: hidden;\n  margin-top: 6%;\n}\n#routerContainer #toolbar div {\n  max-width: 90%;\n}\n#routerContainer #toolbar div svg {\n  fill: #485263;\n  padding: 10px;\n}\n#routerContainer #toolbar div svg:hover, #routerContainer #toolbar div svg:focus {\n  fill: #e44022;\n}\n#routerContainer .canvasSection {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 60%;\n  overflow: hidden;\n}\n#routerContainer .canvasSection #currentStyle {\n  width: 72%;\n  min-height: 10%;\n  margin-left: auto;\n  margin-right: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-content: space-between;\n}\n#routerContainer .canvasSection #currentStyle div {\n  font-family: \"Roboto\", sans-serif;\n  color: #485263;\n  font-weight: bold;\n  margin: 0 20px;\n}\n#routerContainer .canvasSection #currentStyle div input {\n  display: block;\n  margin-top: 20px;\n  width: 100%;\n}\n#routerContainer .canvasSection .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 70%;\n  height: 90%;\n  margin: 8px;\n  margin-top: 6%;\n}\n#routerContainer .canvasSection .color:hover, #routerContainer .canvasSection .color:focus {\n  border-color: #e44022;\n}\n#routerContainer .canvasSection #canvas {\n  border-width: 6px;\n  border-style: solid;\n  border-color: #485263;\n  background-color: white;\n  margin: 20px;\n}\n#routerContainer .canvasSection .canvasButtons {\n  display: flex;\n  align-content: space-around;\n}\n#routerContainer .canvasSection .canvasButtons button {\n  margin-left: 0;\n}\n#routerContainer .canvasSection #clearBtn {\n  margin-left: auto;\n  margin-right: 0;\n}\n#routerContainer #colorBlocks {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 6%;\n  width: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: space-around;\n}\n#routerContainer #colorBlocks .color {\n  border-width: 3px;\n  border-style: solid;\n  border-color: #485263;\n  border-radius: 40%;\n  min-width: 90%;\n  margin: 8px;\n}\n#routerContainer #colorBlocks .color:hover, #routerContainer #colorBlocks .color:focus {\n  border-color: #e44022;\n}\n#routerContainer #colorBlocks .color1 {\n  background-color: #EE2029;\n}\n#routerContainer #colorBlocks .color2 {\n  background-color: #EE7B20;\n}\n#routerContainer #colorBlocks .color3 {\n  background-color: #F5E52E;\n}\n#routerContainer #colorBlocks .color4 {\n  background-color: #58B422;\n}\n#routerContainer #colorBlocks .color5 {\n  background-color: #75E1DC;\n}\n#routerContainer #colorBlocks .color6 {\n  background-color: #1C20E9;\n}\n#routerContainer #colorBlocks .color7 {\n  background-color: #781CE9;\n}\n#routerContainer #colorBlocks .color8 {\n  background-color: #808080;\n}\n\n#routerContainer .appButtons {\n  display: flex;\n}\n#routerContainer .appButtons #chooseImageBtn {\n  margin-left: auto;\n}\n#routerContainer button a {\n  text-decoration: none;\n  color: #485263;\n}\n#routerContainer #strokeWidth {\n  margin-top: 6%;\n}\n#routerContainer #strokeWidth svg {\n  margin: 20px;\n  margin-top: 0;\n}\n#routerContainer #strokeWidth svg:hover, #routerContainer #strokeWidth svg:focus {\n  stroke: #e44022;\n}\n\n.gallery {\n  margin: 20px auto;\n  padding: 10px;\n  min-width: 880px;\n  max-width: 1320px;\n  min-height: 660px;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-around;\n  background-color: #f8ae5d;\n  border-width: 3px;\n  border-style: solid;\n  border-color: #e44022;\n}\n.gallery figure {\n  overflow: hidden;\n  margin: 5px;\n  background-color: #59aed6;\n  border-width: 6px;\n  border-style: solid;\n  border-color: #485263;\n}\n.gallery figure:focus, .gallery figure:hover {\n  border-color: #e44022;\n}\n.gallery figure img {\n  display: block;\n  max-height: 90%;\n  width: auto;\n  padding: 10px;\n}\n.gallery figure figcaption {\n  display: block;\n  text-align: center;\n  color: #485263;\n  font-size: 1.4rem;\n  font-family: \"Seymour One\", sans-serif;\n}\n\n.galleryButtons {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n\n.gallery figure {\n  max-width: 286px;\n  max-height: 40%;\n}\n.gallery figure img {\n  max-width: 90%;\n  height: auto;\n}","#homeNav\r\n  margin: $margin * 2 auto\r\n  min-width: $block_width * 3\r\n  min-height: $block_width * 2\r\n  @include border($border * 4, $color1)\r\n  background-color: $color2\r\n  display: flex\r\n  align-items: center\r\n  justify-content: center\r\n  flex-direction: column\r\n\r\n\r\n  ul\r\n    height: 100%\r\n    overflow: auto\r\n    text-align: center\r\n    list-style-type: none\r\n    margin: 0\r\n    padding: 0\r\n    border: none\r\n    display: flex\r\n    flex-direction: column\r\n    justify-content: space-around\r\n\r\n\r\n    li\r\n      @include border($border * 2, #fff)\r\n      margin: $margin\r\n      padding: $padding\r\n\r\n      &:hover\r\n        border-color: #b4b4b4\r\n\r\n\r\n    a\r\n      font:\r\n        family: $font_family1\r\n        size: $font_size_large\r\n      color: #fff\r\n      text-decoration: none\r\n\r\n      &:hover, &:focus\r\n        color: #b4b4b4\r\n\r\n\r\n\r\n\r\n","\r\n\r\n#routerContainer\r\n  display: flex\r\n  align-items: stretch\r\n  flex-wrap: wrap\r\n  justify-content: space-around\r\n\r\n  .appButtons\r\n    width: 100%\r\n    margin-right: $margin\r\n    margin-left: auto\r\n\r\n\r\n  #toolbar\r\n    display: flex\r\n    flex-direction: column\r\n    align-items: stretch\r\n    justify-content: flex-start\r\n    margin-left: auto\r\n    margin-right: auto\r\n    padding: $padding\r\n    min-width: $block_width * 0.5\r\n    overflow: hidden\r\n    margin-top: $block_width * 0.5\r\n\r\n    div\r\n      max-width: 90%\r\n\r\n      svg\r\n        fill: $color1\r\n        padding: $padding\r\n\r\n        &:hover, &:focus\r\n          fill: $color3\r\n\r\n  .canvasSection\r\n    margin:\r\n      top: $margin / 2\r\n      bottom: $margin / 2\r\n      left: auto\r\n      right: auto\r\n    display: flex\r\n    flex-direction: column\r\n    min-width: $block_width * 5\r\n    overflow: hidden\r\n\r\n    #currentStyle\r\n      width: $block_width * 6\r\n      min-height: $button_width * 2\r\n      margin-left: auto\r\n      margin-right: $margin * 2\r\n      display: flex\r\n      flex-direction: row\r\n      justify-content: flex-end\r\n      align-content: space-between\r\n\r\n      div\r\n        font-family: $font_family2\r\n        color: $color1\r\n        font-weight: bold\r\n        margin: 0 $margin\r\n\r\n        input\r\n          display: block\r\n          margin-top: $margin\r\n          width: 100%\r\n\r\n\r\n    .color\r\n      @include border($border, $color1)\r\n      border-radius: 40%\r\n      min-width: 70%\r\n      height: 90%\r\n      margin: $margin / 2.5\r\n      margin-top: $block_width * 0.5\r\n\r\n      &:hover, &:focus\r\n        border-color: $color3\r\n\r\n    #canvas\r\n      @include border($border * 2, $color1)\r\n      background-color: white\r\n      margin: $margin\r\n\r\n    .canvasButtons\r\n      display: flex\r\n      align-content: space-around\r\n\r\n      button\r\n        margin-left: 0\r\n\r\n    #clearBtn\r\n      margin-left: auto\r\n      margin-right: 0\r\n\r\n\r\n\r\n\r\n\r\n  #colorBlocks\r\n    margin-right: auto\r\n    margin-left: auto\r\n    margin-top: $block_width * 0.5\r\n    width: $button_width\r\n    display: flex\r\n    flex-direction: column\r\n    align-items: center\r\n    align-content: space-around\r\n\r\n    .color\r\n      @include border($border, $color1)\r\n      border-radius: 40%\r\n      min-width: 90%\r\n      margin: $margin / 2.5\r\n\r\n      &:hover, &:focus\r\n        border-color: $color3\r\n\r\n\r\n\r\n    @each $color, $value in (color1: #EE2029, color2: #EE7B20, color3: #F5E52E, color4: #58B422, color5: #75E1DC, color6: #1C20E9, color7: #781CE9, color8: #808080)\r\n      .#{$color}\r\n        background-color: $value\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","@import \"../../pages/painting/painting-page\"\r\n\r\n#routerContainer\r\n  .appButtons\r\n    display: flex\r\n\r\n    #chooseImageBtn\r\n      margin-left: auto\r\n\r\n  button\r\n    a\r\n      text-decoration: none\r\n      color: $color1\r\n\r\n  #strokeWidth\r\n    margin-top: $block_width * 0.5\r\n\r\n    svg\r\n      margin: $margin\r\n      margin-top: 0\r\n\r\n      &:hover, &:focus\r\n        stroke: $color3\r\n","\r\n\r\n\r\n  .gallery\r\n    margin: $margin auto\r\n    padding: $padding\r\n    min-width: $image_width * 4\r\n    max-width: $image_width * 6\r\n    min-height: $image_width * 3\r\n    overflow: auto\r\n    display: flex\r\n    flex-wrap: wrap\r\n    align-items: stretch\r\n    justify-content: space-around\r\n    background-color: $color2\r\n    @include border($border, $color3)\r\n\r\n    figure\r\n      overflow: hidden\r\n      margin: $margin / 4\r\n      background-color: #59aed6\r\n      @include border($border * 2, $color1)\r\n\r\n      &:focus, &:hover\r\n        border-color: $color3\r\n\r\n      img\r\n        display: block\r\n        max-height: 90%\r\n        width: auto\r\n        padding: $padding\r\n\r\n      figcaption\r\n        display: block\r\n        text-align: center\r\n        color: $color1\r\n        font-size: $font_size\r\n        font-family: $font_family1\r\n\r\n  .galleryButtons\r\n    display: flex\r\n    flex-wrap: wrap\r\n    align-items: flex-start\r\n    margin-left: $margin * 2\r\n    margin-top: $margin / 2\r\n","\r\n\r\n.gallery\r\n  figure\r\n    max-width: $image_width * 1.3\r\n    max-height: 40%\r\n    img\r\n      max-width: 90%\r\n      height: auto\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return '@media ' + item[2] + '{' + content + '}';
            }
            else {
                return content;
            }
        }).join('');
    }; // import a list of modules into the list
    list.i = function (modules, mediaQuery) {
        if (typeof modules === 'string') {
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (id != null) {
                alreadyImportedModules[id] = true;
            }
        }
        for (i = 0; i < modules.length; i++) {
            var item = modules[i]; // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            // when a module is imported multiple times with different media queries.
            // I hope this will never occur (Hey this way we have smaller bundles)
            if (item[0] == null || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                }
                else if (mediaQuery) {
                    item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                }
                list.push(item);
            }
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || '';
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
    return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
    // get current location
    var location = typeof window !== "undefined" && window.location;
    if (!location) {
        throw new Error("fixUrls requires window.location");
    }
    // blank or null?
    if (!css || typeof css !== "string") {
        return css;
    }
    var baseUrl = location.protocol + "//" + location.host;
    var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
    // convert each url(...)
    /*
    This regular expression is just a way to recursively match brackets within
    a string.

     /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
     \)  = Match a close parens

     /gi  = Get all matches, not the first.  Be case insensitive.
     */
    var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl
            .trim()
            .replace(/^"(.*)"$/, function (o, $1) { return $1; })
            .replace(/^'(.*)'$/, function (o, $1) { return $1; });
        // already a full url? no change
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
            return fullMatch;
        }
        // convert the url to a full url
        var newUrl;
        if (unquotedOrigUrl.indexOf("//") === 0) {
            //TODO: should we add protocol?
            newUrl = unquotedOrigUrl;
        }
        else if (unquotedOrigUrl.indexOf("/") === 0) {
            // path should be relative to the base url
            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        }
        else {
            // path should be relative to current directory
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
        }
        // send back the fixed url(...)
        return "url(" + JSON.stringify(newUrl) + ")";
    });
    // send back the fixed css
    return fixedCss;
};


/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/lib/loader.js??ref--6-2!./index.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/index.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=css.390570d1205095755a54.js.map