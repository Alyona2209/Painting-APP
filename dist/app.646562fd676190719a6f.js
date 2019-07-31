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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DataBase/painterDB.ts":
/*!***********************************!*\
  !*** ./src/DataBase/painterDB.ts ***!
  \***********************************/
/*! exports provided: PainterDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainterDB", function() { return PainterDB; });
const DB_NAME = 'PAINTER';
const DB_Version = 1;
class PainterDB {
    constructor() {
        this.currentObjectStoreName = '';
    }
    init(objectStoreName, allOSNames) {
        return new Promise((resolve, reject) => {
            let openRequest = indexedDB.open(DB_NAME, DB_Version);
            openRequest.onerror = err => reject(err);
            openRequest.onsuccess = async () => {
                this.db = openRequest.result;
                this.currentObjectStoreName = objectStoreName;
                resolve(this.db);
            };
            openRequest.onupgradeneeded = (event) => {
                //@ts-ignore
                let db = event.target.result;
                if (allOSNames) {
                    for (let objectStoreName of allOSNames) {
                        db.createObjectStore(objectStoreName, {
                            autoIncrement: true
                        });
                    }
                }
                else {
                    db.createObjectStore(objectStoreName, {
                        autoIncrement: true
                    });
                }
            };
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([this.currentObjectStoreName], 'readonly');
            let objectStore = transaction.objectStore(this.currentObjectStoreName);
            let request = objectStore.getAll();
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }
    get(key) {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([this.currentObjectStoreName], 'readonly');
            let objectStore = transaction.objectStore(this.currentObjectStoreName);
            let request = objectStore.get(key);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }
    add(item, key) {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([this.currentObjectStoreName], 'readwrite');
            let objectStore = transaction.objectStore(this.currentObjectStoreName);
            let request = objectStore.add(item, key);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }
    put(value, key) {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([this.currentObjectStoreName], 'readwrite');
            let objectStore = transaction.objectStore(this.currentObjectStoreName);
            let request = objectStore.put(value, key);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([this.currentObjectStoreName], 'readwrite');
            let objectStore = transaction.objectStore(this.currentObjectStoreName);
            let request = objectStore.delete(id);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: dataBase, objectStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataBase", function() { return dataBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectStores", function() { return objectStores; });
/* harmony import */ var _core_router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/router/router */ "./src/core/router/router.ts");
/* harmony import */ var _core_router_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/router/routes */ "./src/core/router/routes.ts");
/* harmony import */ var _DataBase_painterDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataBase/painterDB */ "./src/DataBase/painterDB.ts");
/* harmony import */ var _core_common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/common_functions */ "./src/core/common_functions.ts");




document.getElementById('homeIcon').innerHTML = `<img src="${__webpack_require__(/*! ./assets/icons/home-icon.png */ "./src/assets/icons/home-icon.png")}" alt="Home">`;
document.getElementById('header').innerHTML = Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_3__["createHeader"])('Раскраска');
let dataBase = new _DataBase_painterDB__WEBPACK_IMPORTED_MODULE_2__["PainterDB"]();
let objectStores = [];
for (let route of _core_router_routes__WEBPACK_IMPORTED_MODULE_1__["routes"]) {
    if (route.needsDB) {
        objectStores.push(route.page.name);
    }
}
let router = new _core_router_router__WEBPACK_IMPORTED_MODULE_0__["Router"](_core_router_routes__WEBPACK_IMPORTED_MODULE_1__["routes"], document.getElementById('routerContainer'));
router.start();


/***/ }),

/***/ "./src/assets/icons/home-icon.png":
/*!****************************************!*\
  !*** ./src/assets/icons/home-icon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/home-icon.65616a6b09ab9ac58c80482350871d31.png";

/***/ }),

/***/ "./src/assets/images/large/airplane.png":
/*!**********************************************!*\
  !*** ./src/assets/images/large/airplane.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/airplane.0d1e531d70d4a063567ffecb0e558965.png";

/***/ }),

/***/ "./src/assets/images/large/bird.png":
/*!******************************************!*\
  !*** ./src/assets/images/large/bird.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bird.624420c9d73a6dbf2d7bcff4e5357017.png";

/***/ }),

/***/ "./src/assets/images/large/car.png":
/*!*****************************************!*\
  !*** ./src/assets/images/large/car.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/car.5a16b13d0a92c7e2618ed3a76b86cd53.png";

/***/ }),

/***/ "./src/assets/images/large/cat.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/large/cat.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/cat.f0cd38f684f9abd5a7d8fa93c20ff02f.jpg";

/***/ }),

/***/ "./src/assets/images/large/cow.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/large/cow.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/cow.43f95911050b03b5e2c7eb8688f4c96c.jpg";

/***/ }),

/***/ "./src/assets/images/large/ezhik.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/large/ezhik.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ezhik.55408df5d0d76340f2ced59e21703421.jpg";

/***/ }),

/***/ "./src/assets/images/large/fish.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/large/fish.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/fish.aa27fff314bc1e9623d119f47db01b64.jpg";

/***/ }),

/***/ "./src/assets/images/large/popugai.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/large/popugai.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/popugai.7daafffe1172796e3e6a8983ad42b6b8.jpg";

/***/ }),

/***/ "./src/assets/images/large/train.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/large/train.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/train.779813e70a67599ee41546d9e3681834.jpg";

/***/ }),

/***/ "./src/assets/images/small/airplane.png":
/*!**********************************************!*\
  !*** ./src/assets/images/small/airplane.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/airplane.f7ab8a75c873b14b53c1dfbea015b557.png";

/***/ }),

/***/ "./src/assets/images/small/bird.png":
/*!******************************************!*\
  !*** ./src/assets/images/small/bird.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bird.e59a267d8d14a356574c83fe54add3a0.png";

/***/ }),

/***/ "./src/assets/images/small/car.png":
/*!*****************************************!*\
  !*** ./src/assets/images/small/car.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/car.c8130e2252eb9c36ac3fb85f6d631d15.png";

/***/ }),

/***/ "./src/assets/images/small/cat.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/small/cat.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/cat.a53f359dfa4b2e0690ff817b7c82f611.jpg";

/***/ }),

/***/ "./src/assets/images/small/cow.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/small/cow.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/cow.b97b196d8d6b9555d09c552b48a6d81b.jpg";

/***/ }),

/***/ "./src/assets/images/small/ezhik.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/small/ezhik.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ezhik.30ac94dd3ffdcaaf2f1b2d4408dde375.jpg";

/***/ }),

/***/ "./src/assets/images/small/fish.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/small/fish.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/fish.5c963d364411733e6c66dbcdf9a551aa.jpg";

/***/ }),

/***/ "./src/assets/images/small/popugai.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/small/popugai.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/popugai.5d145206079a2e5e4085d29953203aaa.jpg";

/***/ }),

/***/ "./src/assets/images/small/train.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/small/train.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/train.1e8f5f035364c1c54e6cc7c9b65e52cd.jpg";

/***/ }),

/***/ "./src/core/canvas/common/scene.ts":
/*!*****************************************!*\
  !*** ./src/core/canvas/common/scene.ts ***!
  \*****************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app */ "./src/app.ts");

class Scene {
    constructor(outlineImage) {
        this.hasChanges = false;
        if (outlineImage) {
            this.outlineImage = outlineImage;
        }
        this.items = [];
    }
    addChanges(curObject) {
        //@ts-ignore
        this.items.push({ [curObject.constructor.name]: curObject });
        this.hasChanges = true;
    }
    async toDataBase() {
        if (this.outlineImage) {
            await _app__WEBPACK_IMPORTED_MODULE_0__["dataBase"].put({
                hasChanges: this.hasChanges,
                items: this.items,
                outlineImage: this.outlineImage
            }, 'scene');
        }
        else {
            await _app__WEBPACK_IMPORTED_MODULE_0__["dataBase"].put({
                hasChanges: this.hasChanges,
                items: this.items
            }, 'scene');
        }
    }
}


/***/ }),

/***/ "./src/core/canvas/common/tool.ts":
/*!****************************************!*\
  !*** ./src/core/canvas/common/tool.ts ***!
  \****************************************/
/*! exports provided: Tool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
class Tool {
    constructor(name) {
        this.name = name;
        //        this.iconSrc = src;
    }
    ;
    drawObject(object, x, y, shiftKey) {
    }
    ;
}


/***/ }),

/***/ "./src/core/canvas/common/toolObject.ts":
/*!**********************************************!*\
  !*** ./src/core/canvas/common/toolObject.ts ***!
  \**********************************************/
/*! exports provided: ToolObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolObject", function() { return ToolObject; });
/* harmony import */ var _currentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currentState */ "./src/core/canvas/currentState.ts");

class ToolObject {
    constructor(x, y) {
        this.startX = x;
        this.startY = y;
        this.style = Object.assign({}, _currentState__WEBPACK_IMPORTED_MODULE_0__["currentStyle"]);
    }
    render(ctx, canvas) {
        ctx.fillStyle = this.style.fillColor;
        ctx.strokeStyle = this.style.strokeColor;
        ctx.lineWidth = this.style.strokeWidth;
    }
}


/***/ }),

/***/ "./src/core/canvas/currentState.ts":
/*!*****************************************!*\
  !*** ./src/core/canvas/currentState.ts ***!
  \*****************************************/
/*! exports provided: currentStyle, setCurrentStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentStyle", function() { return currentStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentStyle", function() { return setCurrentStyle; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");

let currentStyle = {
    fillColor: '#000000',
    strokeColor: '#000000',
    strokeWidth: 2
};
async function setCurrentStyle(fillColor, strokeColor, strokeWidth) {
    currentStyle.fillColor = fillColor;
    currentStyle.strokeColor = strokeColor;
    currentStyle.strokeWidth = strokeWidth;
    await _app__WEBPACK_IMPORTED_MODULE_0__["dataBase"].put(fillColor, 'fillColor');
    await _app__WEBPACK_IMPORTED_MODULE_0__["dataBase"].put(strokeColor, 'strokeColor');
    await _app__WEBPACK_IMPORTED_MODULE_0__["dataBase"].put(strokeWidth, 'strokeWidth');
}


/***/ }),

/***/ "./src/core/canvas/painter.ts":
/*!************************************!*\
  !*** ./src/core/canvas/painter.ts ***!
  \************************************/
/*! exports provided: Painter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painter", function() { return Painter; });
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common_functions */ "./src/core/common_functions.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _common_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/scene */ "./src/core/canvas/common/scene.ts");



class Painter {
    constructor(canvas, tools, outlineImage) {
        this.undoScene = [];
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.canvas.addEventListener('mousedown', this);
        this.objectsMap = Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["makeObjectsMap"])(tools);
        if (outlineImage) {
            this.scene = new _common_scene__WEBPACK_IMPORTED_MODULE_2__["Scene"](outlineImage);
        }
        else {
            this.scene = new _common_scene__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        }
        _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].get('scene')
            .then((value) => {
            if (value) {
                this.scene = Object.assign(this.scene, value);
                this.scene.hasChanges = true;
            }
        })
            .then(async () => {
            if (this.scene.outlineImage) {
                let { alt, src } = outlineImage;
                this.currentOutlineImage = await Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["loadImage"])(alt, src);
                this.scene.hasChanges = true;
            }
            this.start();
        })
            .catch(err => console.log(err));
    }
    setTool(tool) {
        this.currentTool = tool;
    }
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                return this.onMouseDown(event);
            case 'mousemove':
                return this.onMouseMove(event);
            case 'mouseup':
                return this.onMouseUp();
        }
    }
    async onMouseDown({ offsetX, offsetY }) {
        if (this.currentTool) {
            this.currentObject = this.currentTool.createObject(offsetX, offsetY, this.ctx, this.canvas);
            // @ts-ignore
            this.objectsMap.set(this.currentObject.constructor.name, this.currentObject.constructor);
            this.scene.addChanges(this.currentObject);
            await this.scene.toDataBase();
            if (this.currentObject.draggable) {
                this.canvas.addEventListener('mousemove', this);
            }
            document.addEventListener('mouseup', this);
        }
    }
    onMouseMove({ offsetX, offsetY, shiftKey }) {
        this.currentTool.drawObject(this.currentObject, offsetX, offsetY, shiftKey);
        this.scene.hasChanges = true;
    }
    async onMouseUp() {
        this.scene.hasChanges = true;
        this.canvas.removeEventListener('mousemove', this);
        document.removeEventListener('mouseup', this);
        this.currentObject = null;
        await this.scene.toDataBase();
    }
    render() {
        if (this.scene.hasChanges) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if (this.currentOutlineImage) {
                this.ctx.drawImage(this.currentOutlineImage, 0, 0, this.canvas.width, this.canvas.height);
            }
            else {
                this.ctx.fillStyle = 'white';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
            if (this.scene.items) {
                for (let item of this.scene.items) {
                    let objectName = Object.keys(item)[0];
                    let itemConstructor = this.objectsMap.get(objectName);
                    let curItem = new itemConstructor(item[objectName].startX, item[objectName].startY);
                    curItem = Object.assign(curItem, item[objectName]);
                    curItem.render(this.ctx, this.canvas);
                }
            }
        }
        this.scene.hasChanges = false;
    }
    async clear() {
        let confirmation = confirm("Ты уверен, что хочешь очистить всё? Назад дороги нет :)");
        if (confirmation) {
            this.scene = new _common_scene__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
            this.scene.hasChanges = true;
            this.currentOutlineImage = undefined;
            await this.scene.toDataBase();
            this.render();
        }
    }
    start() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
            this.start();
        });
    }
    stop() {
        cancelAnimationFrame(this.frameId);
    }
    async undo() {
        if (this.scene.items.length) {
            this.undoScene.push(this.scene.items.pop());
            this.scene.hasChanges = true;
            await this.scene.toDataBase();
            this.render();
        }
    }
    async return() {
        if (this.undoScene.length) {
            this.scene.items.push(this.undoScene.pop());
            this.scene.hasChanges = true;
            await this.scene.toDataBase();
            this.render();
        }
    }
    destroy() {
        this.stop();
        this.canvas.removeEventListener('mousedown', this);
    }
    export() {
        return new Promise(resolve => {
            this.canvas.toBlob(blob => resolve(blob));
        });
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/ellipse/ellipse.ts":
/*!**************************************************!*\
  !*** ./src/core/canvas/tools/ellipse/ellipse.ts ***!
  \**************************************************/
/*! exports provided: Ellipse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return Ellipse; });
/* harmony import */ var _common_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/tool */ "./src/core/canvas/common/tool.ts");
/* harmony import */ var _ellipseObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ellipseObject */ "./src/core/canvas/tools/ellipse/ellipseObject.ts");
/* harmony import */ var _ellipseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipseIcon */ "./src/core/canvas/tools/ellipse/ellipseIcon.ts");



class Ellipse extends _common_tool__WEBPACK_IMPORTED_MODULE_0__["Tool"] {
    constructor() {
        super('ellipse');
        this.icon = _ellipseIcon__WEBPACK_IMPORTED_MODULE_2__["ellipseIcon"];
    }
    createObject(x, y) {
        return new _ellipseObject__WEBPACK_IMPORTED_MODULE_1__["EllipseObject"](x, y);
    }
    drawObject(object, x, y, shiftKey) {
        object.addItem(x, y, shiftKey);
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/ellipse/ellipseIcon.ts":
/*!******************************************************!*\
  !*** ./src/core/canvas/tools/ellipse/ellipseIcon.ts ***!
  \******************************************************/
/*! exports provided: ellipseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipseIcon", function() { return ellipseIcon; });
let ellipseIcon = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M256,51C117.03,51,0,140.526,0,256s117.035,205,256,205c138.97,0,256-89.526,256-205S394.965,51,256,51z M256,431
			c-124.617,0-226-78.505-226-175S131.383,81,256,81s226,78.505,226,175S380.617,431,256,431z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;


/***/ }),

/***/ "./src/core/canvas/tools/ellipse/ellipseObject.ts":
/*!********************************************************!*\
  !*** ./src/core/canvas/tools/ellipse/ellipseObject.ts ***!
  \********************************************************/
/*! exports provided: EllipseObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipseObject", function() { return EllipseObject; });
/* harmony import */ var _common_toolObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/toolObject */ "./src/core/canvas/common/toolObject.ts");

class EllipseObject extends _common_toolObject__WEBPACK_IMPORTED_MODULE_0__["ToolObject"] {
    constructor(x, y) {
        super(x, y);
        this.rotation = Math.PI / 2;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.draggable = true;
        this.xCenter = this.startX;
        this.yCenter = this.startY;
    }
    addItem(x, y, shiftKey) {
        this.radiusX = Math.abs((x - this.startX));
        if (!shiftKey) {
            this.radiusY = Math.abs(y - this.startY);
        }
        else {
            this.radiusY = this.radiusX;
        }
    }
    render(ctx) {
        super.render(ctx);
        ctx.beginPath();
        ctx.ellipse(this.xCenter, this.yCenter, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
        ctx.fill();
        ctx.stroke();
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/eraser/eraser.ts":
/*!************************************************!*\
  !*** ./src/core/canvas/tools/eraser/eraser.ts ***!
  \************************************************/
/*! exports provided: Eraser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eraser", function() { return Eraser; });
/* harmony import */ var _common_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/tool */ "./src/core/canvas/common/tool.ts");
/* harmony import */ var _eraserObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eraserObject */ "./src/core/canvas/tools/eraser/eraserObject.ts");
/* harmony import */ var _eraserIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eraserIcon */ "./src/core/canvas/tools/eraser/eraserIcon.ts");



class Eraser extends _common_tool__WEBPACK_IMPORTED_MODULE_0__["Tool"] {
    constructor() {
        super('eraser');
        this.icon = _eraserIcon__WEBPACK_IMPORTED_MODULE_2__["eraserIcon"];
    }
    createObject(x, y) {
        return new _eraserObject__WEBPACK_IMPORTED_MODULE_1__["EraserObject"](x, y);
    }
    drawObject(object, x, y) {
        object.addPoint(x, y);
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/eraser/eraserIcon.ts":
/*!****************************************************!*\
  !*** ./src/core/canvas/tools/eraser/eraserIcon.ts ***!
  \****************************************************/
/*! exports provided: eraserIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraserIcon", function() { return eraserIcon; });
let eraserIcon = `<svg viewBox="0 -25 512.00075 512" xmlns="http://www.w3.org/2000/svg"><path d="m379.203125 431.960938h-85.929687l-30.003907 30.003906h115.933594c8.285156 0 15.003906-6.71875 15.003906-15 0-8.285156-6.71875-15.003906-15.003906-15.003906zm0 0"/><path d="m345.253906 4.394531c-2.8125-2.8125-6.628906-4.394531-10.609375-4.394531-3.976562 0-7.792969 1.582031-10.605469 4.394531l-190.765624 190.765625c-5.855469 5.855469-5.855469 15.355469 0 21.214844l162.355468 162.351562c2.929688 2.929688 6.769532 4.394532 10.605469 4.394532 3.839844 0 7.679687-1.464844 10.609375-4.394532l190.761719-190.761718c5.859375-5.859375 5.859375-15.359375 0-21.214844zm0 0"/><path d="m278.691406 404.113281-53.457031 53.457031c-2.8125 2.8125-6.625 4.394532-10.605469 4.394532l-149.601562.011718c-3.980469 0-7.796875-1.578124-10.609375-4.394531l-32.566407-32.566406c-29.136718-29.132813-29.136718-76.535156 0-105.667969l86.035157-86.039062zm0 0"/></svg>`;


/***/ }),

/***/ "./src/core/canvas/tools/eraser/eraserObject.ts":
/*!******************************************************!*\
  !*** ./src/core/canvas/tools/eraser/eraserObject.ts ***!
  \******************************************************/
/*! exports provided: EraserObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserObject", function() { return EraserObject; });
/* harmony import */ var _line_lineObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/lineObject */ "./src/core/canvas/tools/line/lineObject.ts");

class EraserObject extends _line_lineObject__WEBPACK_IMPORTED_MODULE_0__["LineObject"] {
    constructor(x, y) {
        super(x, y);
        this.points = [];
        this.draggable = true;
        this.points.push([this.startX, this.startY]);
        this.style.strokeColor = '#fff';
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/filler/filler.ts":
/*!************************************************!*\
  !*** ./src/core/canvas/tools/filler/filler.ts ***!
  \************************************************/
/*! exports provided: Filler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filler", function() { return Filler; });
/* harmony import */ var _common_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/tool */ "./src/core/canvas/common/tool.ts");
/* harmony import */ var _fillerObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillerObject */ "./src/core/canvas/tools/filler/fillerObject.ts");
/* harmony import */ var _fillerIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillerIcon */ "./src/core/canvas/tools/filler/fillerIcon.ts");



class Filler extends _common_tool__WEBPACK_IMPORTED_MODULE_0__["Tool"] {
    constructor() {
        super('filler');
        this.icon = _fillerIcon__WEBPACK_IMPORTED_MODULE_2__["fillerIcon"];
    }
    createObject(x, y, ctx, canvas) {
        return new _fillerObject__WEBPACK_IMPORTED_MODULE_1__["FillerObject"](x, y, ctx, canvas);
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/filler/fillerIcon.ts":
/*!****************************************************!*\
  !*** ./src/core/canvas/tools/filler/fillerIcon.ts ***!
  \****************************************************/
/*! exports provided: fillerIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillerIcon", function() { return fillerIcon; });
let fillerIcon = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 383.344 383.345" style="enable-background:new 0 0 383.344 383.345;"
	 xml:space="preserve">
<g>
	<path d="M273.217,106.899c-27.181-44.864-57.413-83.693-73.016-102.846c-2.088-2.565-5.221-4.054-8.528-4.053
		c-3.308,0-6.44,1.489-8.529,4.054c-15.602,19.159-45.834,58.001-73.015,102.869c-35.028,57.823-52.789,105.63-52.789,142.09
		c0,74.071,60.261,134.332,134.332,134.332s134.332-60.261,134.332-134.332C326.005,212.529,308.246,164.715,273.217,106.899z
		 M210.106,333.868c-7.844,2.006-15.986,3.022-24.205,3.022c-50.186,0-91.015-37.929-91.015-84.55
		c0-11.255,2.97-24.405,8.825-39.083c0.989-2.48,3.807-3.895,6.585-3.295c2.776,0.598,4.64,3.018,4.354,5.65
		c-0.342,3.148-0.516,6.223-0.516,9.136c0,50.735,40.881,93.221,95.093,98.821c2.698,0.279,4.803,2.297,5.018,4.812
		C214.461,330.896,212.723,333.198,210.106,333.868z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;


/***/ }),

/***/ "./src/core/canvas/tools/filler/fillerObject.ts":
/*!******************************************************!*\
  !*** ./src/core/canvas/tools/filler/fillerObject.ts ***!
  \******************************************************/
/*! exports provided: FillerObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillerObject", function() { return FillerObject; });
/* harmony import */ var _common_toolObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/toolObject */ "./src/core/canvas/common/toolObject.ts");

class FillerObject extends _common_toolObject__WEBPACK_IMPORTED_MODULE_0__["ToolObject"] {
    constructor(x, y, ctx, canvas) {
        super(x, y);
        this.draggable = false;
        this.pixelStack = [[this.startX, this.startY]];
        this.fillColor = this.divideRgb(this.style.fillColor) || this.hexToRgb(this.style.fillColor);
        if (ctx && canvas) {
            this.colorLayer = this.changeColorLayer(ctx, canvas);
        }
    }
    hexToRgb(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    divideRgb(color) {
        let result = /^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i.exec(color);
        return result ? {
            r: parseInt(result[1]),
            g: parseInt(result[2]),
            b: parseInt(result[3])
        } : null;
    }
    render(ctx, canvas) {
        super.render(ctx);
        //let newColorLayer = this.changeColorLayer(ctx, canvas);
        ctx.putImageData(this.colorLayer, 0, 0);
        return ctx;
    }
    changeColorLayer(ctx, canvas) {
        let colorLayer = ctx.getImageData(0, 0, canvas.width, canvas.height), startPixelPosition = (this.startY * canvas.width + this.startX) * 4, startR = colorLayer.data[startPixelPosition], startG = colorLayer.data[startPixelPosition + 1], startB = colorLayer.data[startPixelPosition + 2];
        let pixelStack = this.pixelStack.slice(0), fillColor = this.fillColor;
        function matchStartColor(pixelPos) {
            let r = colorLayer.data[pixelPos];
            let g = colorLayer.data[pixelPos + 1];
            let b = colorLayer.data[pixelPos + 2];
            return (r == startR && g == startG && b == startB);
        }
        function colorPixel(pixelPos) {
            colorLayer.data[pixelPos] = fillColor.r;
            colorLayer.data[pixelPos + 1] = fillColor.g;
            colorLayer.data[pixelPos + 2] = fillColor.b;
            colorLayer.data[pixelPos + 3] = 255;
        }
        let newPos, x, y, pixelPos, reachLeft, reachRight;
        while (pixelStack.length) {
            newPos = pixelStack.pop();
            x = newPos[0];
            y = newPos[1];
            pixelPos = (y * canvas.width + x) * 4;
            while (y >= 0 && matchStartColor(pixelPos)) {
                pixelPos -= canvas.width * 4;
                y--;
            }
            pixelPos += canvas.width * 4;
            ++y;
            reachLeft = false;
            reachRight = false;
            while (y <= canvas.height - 1 && matchStartColor(pixelPos)) {
                colorPixel(pixelPos);
                if (x >= 1) {
                    if (matchStartColor(pixelPos - 4)) {
                        if (!reachLeft) {
                            pixelStack.push([x - 1, y]);
                            reachLeft = true;
                        }
                    }
                    else if (reachLeft) {
                        reachLeft = false;
                    }
                }
                if (x < canvas.width - 1) {
                    if (matchStartColor(pixelPos + 4)) {
                        if (!reachRight) {
                            pixelStack.push([x + 1, y]);
                            reachRight = true;
                        }
                    }
                    else if (reachRight) {
                        reachRight = false;
                    }
                }
                pixelPos += canvas.width * 4;
                y++;
            }
        }
        return colorLayer;
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/line/line.ts":
/*!********************************************!*\
  !*** ./src/core/canvas/tools/line/line.ts ***!
  \********************************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var _common_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/tool */ "./src/core/canvas/common/tool.ts");
/* harmony import */ var _lineObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineObject */ "./src/core/canvas/tools/line/lineObject.ts");
/* harmony import */ var _lineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineIcon */ "./src/core/canvas/tools/line/lineIcon.ts");



class Line extends _common_tool__WEBPACK_IMPORTED_MODULE_0__["Tool"] {
    constructor() {
        super('line');
        this.icon = _lineIcon__WEBPACK_IMPORTED_MODULE_2__["lineIcon"];
    }
    createObject(x, y) {
        return new _lineObject__WEBPACK_IMPORTED_MODULE_1__["LineObject"](x, y);
    }
    drawObject(object, x, y) {
        object.addPoint(x, y);
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/line/lineIcon.ts":
/*!************************************************!*\
  !*** ./src/core/canvas/tools/line/lineIcon.ts ***!
  \************************************************/
/*! exports provided: lineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineIcon", function() { return lineIcon; });
let lineIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M505.025,19.549c-14.688-14.686-44.146-6.307-92.708,26.377c-41.254,27.766-90.738,69.819-139.336,118.417
			c-72.047,72.046-126.823,142.784-145.061,186.458c-3.002-1.088-6.115-1.958-9.327-2.593c-18.872-3.733-39.369,1.04-56.238,13.086
			c-24.207,17.286-30.618,41.971-31.549,46.132c-5.096,19.032-14.747,37.191-27.921,52.529c-4.237,4.933-3.753,12.349,1.09,16.691
			c16.927,15.17,38.58,22.779,61.102,22.779c21.706,0,44.22-7.069,64.077-21.249c9.311-6.649,16.36-14.001,17.725-15.456
			c16.872-18.131,24.036-41.904,20.482-63.625c42.85-15.361,117.553-72.181,192.871-147.499
			c48.598-48.598,90.652-98.083,118.417-139.336C511.332,63.696,519.713,34.238,505.025,19.549z M129.392,446.415
			c-0.642,0.685-6.495,6.852-14.13,12.302c-27.732,19.8-61.684,22.09-86.345,6.845c11.549-15.834,20.132-33.683,25.063-52.254
			v-0.001c0.055-0.208,0.105-0.418,0.149-0.63c0.041-0.189,4.193-19.127,22.119-31.927c11.53-8.235,25.277-11.547,37.711-9.089
			c10.255,2.026,18.876,7.88,24.275,16.48C148.829,405.018,145.104,429.532,129.392,446.415z M159.217,376.663
			c-0.245-0.41-3.87-7.77-10.624-13.24c5.819-15.557,18.346-36.584,35.806-60.729l37.455,37.455
			C195.505,359.116,173.914,371.48,159.217,376.663z M241.198,325.685l-42.301-42.301c7.31-9.41,15.219-19.157,23.648-29.127
			l47.806,47.806C260.233,310.608,250.489,318.493,241.198,325.685z M455.159,104.266c-26.926,38.916-66.643,85.235-111.832,130.422
			c-18.973,18.973-37.367,36.232-54.844,51.694l-50.257-50.257c15.94-18.032,33.32-36.538,51.661-54.877
			c45.188-45.189,91.507-84.905,130.422-111.834c47.916-33.155,64.45-33.208,67.626-32.774
			C488.371,39.813,488.313,56.353,455.159,104.266z"/>
	</g>
</g>
<g>
	<g>
		<path d="M119.256,414.119c-5.783-3.183-13.052-1.076-16.236,4.708c-0.322,0.585-0.711,1.132-1.158,1.626
			c-0.894,0.93-3.832,3.77-6.884,5.951c-4.63,3.305-9.626,5.674-14.85,7.041c-6.387,1.671-10.209,8.203-8.538,14.59
			c1.406,5.372,6.25,8.93,11.555,8.93c1.002,0,2.019-0.127,3.034-0.391c8.049-2.106,15.684-5.71,22.693-10.714
			c4.499-3.213,10.471-9.095,10.512-9.14c1.777-1.927,3.319-4.069,4.583-6.366C127.149,424.57,125.04,417.301,119.256,414.119z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;


/***/ }),

/***/ "./src/core/canvas/tools/line/lineObject.ts":
/*!**************************************************!*\
  !*** ./src/core/canvas/tools/line/lineObject.ts ***!
  \**************************************************/
/*! exports provided: LineObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineObject", function() { return LineObject; });
/* harmony import */ var _common_toolObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/toolObject */ "./src/core/canvas/common/toolObject.ts");

class LineObject extends _common_toolObject__WEBPACK_IMPORTED_MODULE_0__["ToolObject"] {
    constructor(x, y) {
        super(x, y);
        this.points = [];
        this.draggable = true;
        this.points.push([this.startX, this.startY]);
    }
    addPoint(x, y) {
        this.points.push([x, y]);
    }
    render(ctx) {
        super.render(ctx);
        ctx.beginPath();
        for (let [index, [x, y]] of this.points.entries()) {
            if (index === 0) {
                ctx.moveTo(x, y);
            }
            else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/rect/rect.ts":
/*!********************************************!*\
  !*** ./src/core/canvas/tools/rect/rect.ts ***!
  \********************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony import */ var _common_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/tool */ "./src/core/canvas/common/tool.ts");
/* harmony import */ var _rectObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rectObject */ "./src/core/canvas/tools/rect/rectObject.ts");
/* harmony import */ var _rectIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rectIcon */ "./src/core/canvas/tools/rect/rectIcon.ts");



class Rect extends _common_tool__WEBPACK_IMPORTED_MODULE_0__["Tool"] {
    constructor() {
        super('rect');
        this.icon = _rectIcon__WEBPACK_IMPORTED_MODULE_2__["rectIcon"];
    }
    createObject(x, y) {
        return new _rectObject__WEBPACK_IMPORTED_MODULE_1__["RectObject"](x, y);
    }
    drawObject(object, x, y, shiftKey) {
        object.addItem(x, y, shiftKey);
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/rect/rectIcon.ts":
/*!************************************************!*\
  !*** ./src/core/canvas/tools/rect/rectIcon.ts ***!
  \************************************************/
/*! exports provided: rectIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectIcon", function() { return rectIcon; });
let rectIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M497,76H15C6.716,76,0,82.716,0,91v330c0,8.284,6.716,15,15,15h482c8.284,0,15-6.716,15-15V91
			C512,82.716,505.284,76,497,76z M482,406H30V106h452V406z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;


/***/ }),

/***/ "./src/core/canvas/tools/rect/rectObject.ts":
/*!**************************************************!*\
  !*** ./src/core/canvas/tools/rect/rectObject.ts ***!
  \**************************************************/
/*! exports provided: RectObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectObject", function() { return RectObject; });
/* harmony import */ var _common_toolObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/toolObject */ "./src/core/canvas/common/toolObject.ts");

class RectObject extends _common_toolObject__WEBPACK_IMPORTED_MODULE_0__["ToolObject"] {
    constructor(x, y) {
        super(x, y);
        this.width = 0;
        this.height = 0;
        this.draggable = true;
        this.x = this.startX;
        this.y = this.startY;
    }
    addItem(x, y, shiftKey) {
        this.x = Math.min(this.startX, x);
        this.y = Math.min(this.startY, y);
        this.width = Math.abs(this.startX - x);
        if (!shiftKey) {
            this.height = Math.abs(this.startY - y);
        }
        else {
            this.height = this.width;
        }
    }
    render(ctx) {
        super.render(ctx);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.stroke();
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/straight_line/straightLine.ts":
/*!*************************************************************!*\
  !*** ./src/core/canvas/tools/straight_line/straightLine.ts ***!
  \*************************************************************/
/*! exports provided: StraightLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StraightLine", function() { return StraightLine; });
/* harmony import */ var _common_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/tool */ "./src/core/canvas/common/tool.ts");
/* harmony import */ var _straightLineObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./straightLineObject */ "./src/core/canvas/tools/straight_line/straightLineObject.ts");
/* harmony import */ var _straightLineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./straightLineIcon */ "./src/core/canvas/tools/straight_line/straightLineIcon.ts");



class StraightLine extends _common_tool__WEBPACK_IMPORTED_MODULE_0__["Tool"] {
    constructor() {
        super('straightLine');
        this.icon = _straightLineIcon__WEBPACK_IMPORTED_MODULE_2__["straightLineIcon"];
    }
    createObject(x, y) {
        return new _straightLineObject__WEBPACK_IMPORTED_MODULE_1__["StraightLineObject"](x, y);
    }
    drawObject(object, x, y) {
        object.changeEndPoint(x, y);
    }
}


/***/ }),

/***/ "./src/core/canvas/tools/straight_line/straightLineIcon.ts":
/*!*****************************************************************!*\
  !*** ./src/core/canvas/tools/straight_line/straightLineIcon.ts ***!
  \*****************************************************************/
/*! exports provided: straightLineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "straightLineIcon", function() { return straightLineIcon; });
let straightLineIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
<g>
	<g>
		<path d="M457.637,134.681c-29.976,0-54.363,24.387-54.363,54.363c0,10.933,3.255,21.114,8.831,29.647l-58.733,58.733
			c-8.534-5.576-18.715-8.831-29.648-8.831c-11.329,0-21.858,3.488-30.576,9.441l-59.338-59.347
			c5.575-8.533,8.828-18.713,8.828-29.644c0-29.976-24.387-54.363-54.363-54.363c-29.976,0-54.363,24.387-54.363,54.363
			c0,10.931,3.254,21.108,8.827,29.641L84.004,277.42c-8.532-5.574-18.711-8.827-29.641-8.827C24.387,268.593,0,292.981,0,322.957
			s24.387,54.363,54.363,54.363c29.976,0,54.363-24.387,54.363-54.363c0-10.933-3.255-21.114-8.831-29.648l58.733-58.733
			c8.534,5.576,18.715,8.831,29.648,8.831c10.932,0,21.113-3.255,29.646-8.831l59.666,59.674
			c-5.206,8.338-8.226,18.174-8.226,28.706c0,29.976,24.387,54.363,54.363,54.363s54.363-24.387,54.363-54.363
			c0-10.931-3.254-21.109-8.827-29.641l58.736-58.736c8.533,5.574,18.712,8.827,29.641,8.827c29.976,0,54.363-24.387,54.363-54.363
			C512.001,159.066,487.613,134.681,457.637,134.681z M54.363,354.849c-17.586,0-31.893-14.307-31.893-31.892
			c0-17.586,14.307-31.893,31.893-31.893c17.585,0,31.893,14.307,31.893,31.893C86.256,340.542,71.949,354.849,54.363,354.849z
			 M188.276,220.936c-17.585,0-31.893-14.307-31.893-31.893c0-17.585,14.307-31.893,31.893-31.893
			c17.586,0,31.893,14.307,31.893,31.893C220.169,206.629,205.862,220.936,188.276,220.936z M323.724,354.849
			c-17.585,0-31.893-14.307-31.893-31.893s14.307-31.893,31.893-31.893c17.585,0,31.893,14.307,31.893,31.893
			C355.616,340.542,341.309,354.849,323.724,354.849z M457.637,220.936c-17.585,0-31.893-14.307-31.893-31.893
			c0-17.585,14.307-31.893,31.893-31.893c17.585,0,31.893,14.307,31.893,31.893C489.53,206.629,475.222,220.936,457.637,220.936z"/>
	</g>
</g>
<g>
	<g>
		<path d="M176.774,272.717c-4.388-4.387-11.501-4.387-15.889,0l-22.854,22.854c-4.387,4.387-4.387,11.501,0.001,15.889
			c2.194,2.194,5.069,3.291,7.944,3.291s5.751-1.098,7.944-3.291l22.854-22.854C181.163,284.219,181.163,277.104,176.774,272.717z"
			/>
	</g>
</g>
<g>
	<g>
		<path d="M373.962,200.939c-4.388-4.387-11.5-4.387-15.89,0.001l-22.854,22.854c-4.387,4.387-4.387,11.501,0,15.889
			c2.195,2.193,5.07,3.29,7.945,3.29c2.876,0,5.75-1.098,7.944-3.291l22.854-22.854C378.349,212.44,378.349,205.326,373.962,200.939
			z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;


/***/ }),

/***/ "./src/core/canvas/tools/straight_line/straightLineObject.ts":
/*!*******************************************************************!*\
  !*** ./src/core/canvas/tools/straight_line/straightLineObject.ts ***!
  \*******************************************************************/
/*! exports provided: StraightLineObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StraightLineObject", function() { return StraightLineObject; });
/* harmony import */ var _common_toolObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/toolObject */ "./src/core/canvas/common/toolObject.ts");

class StraightLineObject extends _common_toolObject__WEBPACK_IMPORTED_MODULE_0__["ToolObject"] {
    constructor(x, y) {
        super(x, y);
        this.draggable = true;
        this.startPoint = this.endPoint = [this.startX, this.startY];
    }
    changeEndPoint(x, y) {
        this.endPoint = [x, y];
    }
    render(ctx) {
        super.render(ctx);
        ctx.beginPath();
        // @ts-ignore
        ctx.moveTo(...this.startPoint);
        // @ts-ignore
        ctx.lineTo(...this.endPoint);
        ctx.stroke();
    }
}


/***/ }),

/***/ "./src/core/common_functions.ts":
/*!**************************************!*\
  !*** ./src/core/common_functions.ts ***!
  \**************************************/
/*! exports provided: createHeader, loadImage, createGallery, makeObjectsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGallery", function() { return createGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeObjectsMap", function() { return makeObjectsMap; });
function createHeader(name) {
    let pageName = name.split(''), counter = 1, newPageName = [];
    for (let letter of pageName) {
        if (counter > 7) {
            counter = 1;
        }
        if (letter === ' ') {
            letter = `<span class="space"></span>`;
        }
        else {
            letter = `<span class="letter-${counter++}">${letter.toUpperCase()} </span>`;
        }
        newPageName.push(letter);
    }
    return newPageName.join('');
}
function loadImage(alt, src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = err => reject(err);
        img.src = src;
        img.alt = alt;
    });
}
async function createGallery(srcArr) {
    return await srcArr.reduce(async (promise, [alt, src]) => {
        let counter = 1;
        return promise.then(async (fragment) => {
            let img = await loadImage(alt, src);
            let figure = document.createElement('figure');
            figure.tabIndex = counter++;
            let figcaption = document.createElement('figcaption');
            figcaption.innerHTML = alt;
            figure.append(img, figcaption);
            fragment.append(figure);
            return fragment;
        });
    }, Promise.resolve(document.createDocumentFragment()));
}
;
function makeObjectsMap(tools) {
    let map = new Map();
    for (let tool of tools) {
        let object = tool.createObject(0, 0);
        map.set(object.constructor.name, object.constructor);
    }
    return map;
}


/***/ }),

/***/ "./src/core/router/page.ts":
/*!*********************************!*\
  !*** ./src/core/router/page.ts ***!
  \*********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
class Page {
    constructor(params) {
        this.objectStoreName = this.constructor.name;
        this.pageParams = params;
    }
    async load() {
        this.resolvedData = await this.resolve();
    }
    async resolve() {
        return {
            template: await fetch(this.htmlAddress).then(res => res.text())
        };
    }
    beforeRender() { }
    ;
    afterRender() { }
    ;
    render() {
        return this.resolvedData.template;
    }
    destroy() {
        this.resolvedData = null;
    }
    ;
}


/***/ }),

/***/ "./src/core/router/router.ts":
/*!***********************************!*\
  !*** ./src/core/router/router.ts ***!
  \***********************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
class Router {
    constructor(routes, el) {
        this.container = el;
        this.routes = routes;
        this.currentPage = null;
    }
    async start() {
        window.addEventListener('popstate', this);
        await this.handleState(location.pathname);
    }
    stop() {
        window.removeEventListener('popstate', this);
    }
    async handleEvent(event) {
        let route = this.routes.find(route => route.path === event.state);
        if (route) {
            await this.startPage(route.page);
        }
    }
    async handleState(path) {
        let route = this.routes.find(route => route.path === path);
        if (route) {
            window.history.pushState(path, null, path);
            await this.startPage(route.page);
        }
    }
    async startPage(PageConstructor, params) {
        if (this.currentPage) {
            await this.currentPage.destroy();
        }
        // @ts-ignore
        this.currentPage = new PageConstructor();
        await this.currentPage.load();
        await this.currentPage.beforeRender();
        this.container.innerHTML = await this.currentPage.render();
        await this.currentPage.afterRender();
        this.arrangeATags();
    }
    arrangeATags() {
        let aTags = document.getElementsByTagName('a');
        for (let a of aTags) {
            a.onclick = async (e) => {
                e.preventDefault();
                await this.handleState(a.getAttribute('href'));
            };
        }
    }
}


/***/ }),

/***/ "./src/core/router/routes.ts":
/*!***********************************!*\
  !*** ./src/core/router/routes.ts ***!
  \***********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/home/home-page */ "./src/pages/home/home-page.ts");
/* harmony import */ var _pages_colouring_colouring_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/colouring/colouring-page */ "./src/pages/colouring/colouring-page.ts");
/* harmony import */ var _pages_my_paintings_my_paintings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/my-paintings/my_paintings-page */ "./src/pages/my-paintings/my_paintings-page.ts");
/* harmony import */ var _pages_painting_painting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/painting/painting-page */ "./src/pages/painting/painting-page.ts");
/* harmony import */ var _pages_choose_image_choose_image_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/choose-image/choose-image-page */ "./src/pages/choose-image/choose-image-page.ts");





const routes = [
    {
        path: '/',
        page: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_0__["HomePage"],
        needsDB: false
    },
    {
        path: '/home',
        page: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_0__["HomePage"],
        needsDB: false
    },
    {
        path: '/colouring',
        page: _pages_colouring_colouring_page__WEBPACK_IMPORTED_MODULE_1__["ColouringPage"],
        needsDB: true
    },
    {
        path: '/painting',
        page: _pages_painting_painting_page__WEBPACK_IMPORTED_MODULE_3__["PaintingPage"],
        needsDB: true
    },
    {
        path: '/my_paintings',
        page: _pages_my_paintings_my_paintings_page__WEBPACK_IMPORTED_MODULE_2__["MyPaintingsPage"],
        needsDB: true
    },
    {
        path: '/choose_image',
        page: _pages_choose_image_choose_image_page__WEBPACK_IMPORTED_MODULE_4__["ChooseImagePage"],
        needsDB: false
    }
];


/***/ }),

/***/ "./src/pages/choose-image/choose-image-page.html":
/*!*******************************************************!*\
  !*** ./src/pages/choose-image/choose-image-page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/choose-image-page.502f258b3b25810f3904f3ba84d2683a.html";

/***/ }),

/***/ "./src/pages/choose-image/choose-image-page.ts":
/*!*****************************************************!*\
  !*** ./src/pages/choose-image/choose-image-page.ts ***!
  \*****************************************************/
/*! exports provided: ChooseImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseImagePage", function() { return ChooseImagePage; });
/* harmony import */ var _core_router_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/router/page */ "./src/core/router/page.ts");
/* harmony import */ var _core_common_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/common_functions */ "./src/core/common_functions.ts");
/* harmony import */ var _colouring_colouring_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colouring/colouring-page */ "./src/pages/colouring/colouring-page.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _core_canvas_common_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/canvas/common/scene */ "./src/core/canvas/common/scene.ts");





class ChooseImagePage extends _core_router_page__WEBPACK_IMPORTED_MODULE_0__["Page"] {
    constructor() {
        super(...arguments);
        this.htmlAddress = __webpack_require__(/*! ./choose-image-page.html */ "./src/pages/choose-image/choose-image-page.html");
    }
    render() {
        return this.resolvedData.template;
    }
    afterRender() {
        document.getElementById('header').innerHTML = Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_1__["createHeader"])('Выбери рисунок');
        let chooseImageBtn = document.getElementById('chooseImageBtn'), addImageBtn = document.getElementById('addImageBtn');
        const SMALL_IMAGES_MAP = new Map([
            ['Самолет', __webpack_require__(/*! ../../assets/images/small/airplane.png */ "./src/assets/images/small/airplane.png")],
            ['Машинка', __webpack_require__(/*! ../../assets/images/small/car.png */ "./src/assets/images/small/car.png")],
            ['Кот', __webpack_require__(/*! ../../assets/images/small/cat.jpg */ "./src/assets/images/small/cat.jpg")],
            ['Ёжик', __webpack_require__(/*! ../../assets/images/small/ezhik.jpg */ "./src/assets/images/small/ezhik.jpg")],
            ['Рыбка', __webpack_require__(/*! ../../assets/images/small/fish.jpg */ "./src/assets/images/small/fish.jpg")],
            ['Птица', __webpack_require__(/*! ../../assets/images/small/bird.png */ "./src/assets/images/small/bird.png")],
            ['Корова', __webpack_require__(/*! ../../assets/images/small/cow.jpg */ "./src/assets/images/small/cow.jpg")],
            ['Попугай', __webpack_require__(/*! ../../assets/images/small/popugai.jpg */ "./src/assets/images/small/popugai.jpg")],
            ['Поезд', __webpack_require__(/*! ../../assets/images/small/train.jpg */ "./src/assets/images/small/train.jpg")]
        ]);
        const LARGE_IMAGES_MAP = new Map([
            ['Самолет', __webpack_require__(/*! ../../assets/images/large/airplane.png */ "./src/assets/images/large/airplane.png")],
            ['Машинка', __webpack_require__(/*! ../../assets/images/large/car.png */ "./src/assets/images/large/car.png")],
            ['Кот', __webpack_require__(/*! ../../assets/images/large/cat.jpg */ "./src/assets/images/large/cat.jpg")],
            ['Ёжик', __webpack_require__(/*! ../../assets/images/large/ezhik.jpg */ "./src/assets/images/large/ezhik.jpg")],
            ['Рыбка', __webpack_require__(/*! ../../assets/images/large/fish.jpg */ "./src/assets/images/large/fish.jpg")],
            ['Птица', __webpack_require__(/*! ../../assets/images/large/bird.png */ "./src/assets/images/large/bird.png")],
            ['Корова', __webpack_require__(/*! ../../assets/images/large/cow.jpg */ "./src/assets/images/large/cow.jpg")],
            ['Попугай', __webpack_require__(/*! ../../assets/images/large/popugai.jpg */ "./src/assets/images/large/popugai.jpg")],
            ['Поезд', __webpack_require__(/*! ../../assets/images/large/train.jpg */ "./src/assets/images/large/train.jpg")],
        ]);
        let galleryEl = document.querySelector('.gallery');
        Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_1__["createGallery"])([...SMALL_IMAGES_MAP.entries()])
            .then((fragment) => galleryEl.append(fragment));
        galleryEl.addEventListener('click', (event) => {
            //@ts-ignore
            let imageEl = event.target.closest('img');
            if (imageEl) {
                this.currentImage = imageEl;
            }
        });
        chooseImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                let imageAlt = this.currentImage.alt;
                _colouring_colouring_page__WEBPACK_IMPORTED_MODULE_2__["ColouringPage"].outlineImage = { alt: imageAlt, src: LARGE_IMAGES_MAP.get(imageAlt) };
                await _app__WEBPACK_IMPORTED_MODULE_3__["dataBase"].init('ColouringPage');
                await _app__WEBPACK_IMPORTED_MODULE_3__["dataBase"].put(new _core_canvas_common_scene__WEBPACK_IMPORTED_MODULE_4__["Scene"](_colouring_colouring_page__WEBPACK_IMPORTED_MODULE_2__["ColouringPage"].outlineImage), 'scene');
                let outerPage = '/colouring';
                history.pushState(outerPage, null, outerPage);
                history.pushState(outerPage, null, outerPage);
                history.back();
            }
        });
        /*addImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                this.currentImage.closest('figure').remove();

                await dataBase.delete(this.currentImage.src);
            }
        });*/
    }
}


/***/ }),

/***/ "./src/pages/colouring/colouring-page.html":
/*!*************************************************!*\
  !*** ./src/pages/colouring/colouring-page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/colouring-page.775efc248ee9276ae8c7a88956776f42.html";

/***/ }),

/***/ "./src/pages/colouring/colouring-page.ts":
/*!***********************************************!*\
  !*** ./src/pages/colouring/colouring-page.ts ***!
  \***********************************************/
/*! exports provided: ColouringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColouringPage", function() { return ColouringPage; });
/* harmony import */ var _core_common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common_functions */ "./src/core/common_functions.ts");
/* harmony import */ var _core_canvas_tools_line_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/canvas/tools/line/line */ "./src/core/canvas/tools/line/line.ts");
/* harmony import */ var _core_canvas_painter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/canvas/painter */ "./src/core/canvas/painter.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _painting_painting_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../painting/painting-page */ "./src/pages/painting/painting-page.ts");
/* harmony import */ var _core_canvas_tools_filler_filler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/canvas/tools/filler/filler */ "./src/core/canvas/tools/filler/filler.ts");
/* harmony import */ var _core_canvas_tools_eraser_eraser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/canvas/tools/eraser/eraser */ "./src/core/canvas/tools/eraser/eraser.ts");
/* harmony import */ var _core_canvas_tools_straight_line_straightLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/canvas/tools/straight_line/straightLine */ "./src/core/canvas/tools/straight_line/straightLine.ts");
/* harmony import */ var _core_canvas_currentState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/canvas/currentState */ "./src/core/canvas/currentState.ts");









class ColouringPage extends _painting_painting_page__WEBPACK_IMPORTED_MODULE_4__["PaintingPage"] {
    constructor() {
        super(...arguments);
        this.htmlAddress = __webpack_require__(/*! ./colouring-page.html */ "./src/pages/colouring/colouring-page.html");
    }
    async beforeRender() {
        await super.beforeRender();
        let curScene = await _app__WEBPACK_IMPORTED_MODULE_3__["dataBase"].get('scene');
        if (curScene) {
            if (!ColouringPage.outlineImage) {
                ColouringPage.outlineImage = curScene.outlineImage;
            }
            else {
                curScene.outlineImage = ColouringPage.outlineImage;
                curScene.hasChanges = true;
                await _app__WEBPACK_IMPORTED_MODULE_3__["dataBase"].put(curScene, 'scene');
            }
        }
    }
    async afterRender() {
        document.getElementById('header').innerHTML = Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_0__["createHeader"])('Раскраска');
        let canvas = document.getElementById('canvas'), chooseImageBtn = document.getElementById('chooseImageBtn'), currentStyleEl = document.getElementById('currentStyle'), toolbarEl = document.getElementById('toolbar'), strokeWidthEl = document.getElementById('strokeWidth');
        canvas.width = parseFloat(getComputedStyle(canvas).width);
        canvas.height = canvas.width * 0.7;
        let tools = [
            new _core_canvas_tools_line_line__WEBPACK_IMPORTED_MODULE_1__["Line"](),
            new _core_canvas_tools_straight_line_straightLine__WEBPACK_IMPORTED_MODULE_7__["StraightLine"](),
            new _core_canvas_tools_eraser_eraser__WEBPACK_IMPORTED_MODULE_6__["Eraser"](),
            new _core_canvas_tools_filler_filler__WEBPACK_IMPORTED_MODULE_5__["Filler"]()
        ];
        let painter = new _core_canvas_painter__WEBPACK_IMPORTED_MODULE_2__["Painter"](canvas, tools, ColouringPage.outlineImage);
        await super.arrangeCurrentStyleEl(currentStyleEl);
        await super.arrangeToolbar(toolbarEl, tools, painter);
        this.arrangeStrokeWidthEl(strokeWidthEl);
        super.arrangeColorBlocks();
        await super.setBtnListeners(canvas, painter);
    }
    ;
    arrangeStrokeWidthEl(strokeWidthEl) {
        let fragment = document.createDocumentFragment();
        let value = 5, step = 4, index = 9;
        for (let el = 0; el < 5; el++) {
            let div = document.createElement('div');
            div.classList.add('strokeWidthEl');
            div.dataset.value = value.toString();
            div.tabIndex = index++;
            div.innerHTML =
                `<svg width="90" height="90"  fill="#f8ae5d" stroke="#485263" stroke-width="3">` +
                    `<circle r=${value * 2} cx="45" cy="45">` +
                    `</svg>`;
            fragment.append(div);
            value += step;
        }
        strokeWidthEl.append(fragment);
        strokeWidthEl.addEventListener('click', async (event) => {
            let target = event.target.closest('div');
            if (target) {
                let fillColor = _core_canvas_currentState__WEBPACK_IMPORTED_MODULE_8__["currentStyle"].fillColor, strokeColor = _core_canvas_currentState__WEBPACK_IMPORTED_MODULE_8__["currentStyle"].strokeColor, strokeWidth = parseInt(target.dataset.value);
                await Object(_core_canvas_currentState__WEBPACK_IMPORTED_MODULE_8__["setCurrentStyle"])(fillColor, strokeColor, strokeWidth);
            }
        });
    }
}


/***/ }),

/***/ "./src/pages/home/home-page.html":
/*!***************************************!*\
  !*** ./src/pages/home/home-page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home-page.13d630f799bf04d8ae0a7a4518f49ca2.html";

/***/ }),

/***/ "./src/pages/home/home-page.ts":
/*!*************************************!*\
  !*** ./src/pages/home/home-page.ts ***!
  \*************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _core_router_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/router/page */ "./src/core/router/page.ts");
/* harmony import */ var _core_common_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/common_functions */ "./src/core/common_functions.ts");


class HomePage extends _core_router_page__WEBPACK_IMPORTED_MODULE_0__["Page"] {
    constructor() {
        super(...arguments);
        this.htmlAddress = __webpack_require__(/*! ./home-page.html */ "./src/pages/home/home-page.html");
    }
    render() {
        return this.resolvedData.template;
    }
    afterRender() {
        document.getElementById('header').innerHTML = Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_1__["createHeader"])('Выбери режим');
    }
}


/***/ }),

/***/ "./src/pages/my-paintings/my_paintings-page.html":
/*!*******************************************************!*\
  !*** ./src/pages/my-paintings/my_paintings-page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/my_paintings-page.0570fd38ea6309a567b41f0a4f8c7829.html";

/***/ }),

/***/ "./src/pages/my-paintings/my_paintings-page.ts":
/*!*****************************************************!*\
  !*** ./src/pages/my-paintings/my_paintings-page.ts ***!
  \*****************************************************/
/*! exports provided: MyPaintingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPaintingsPage", function() { return MyPaintingsPage; });
/* harmony import */ var _core_router_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/router/page */ "./src/core/router/page.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _core_common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/common_functions */ "./src/core/common_functions.ts");
/* harmony import */ var _colouring_colouring_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colouring/colouring-page */ "./src/pages/colouring/colouring-page.ts");




class MyPaintingsPage extends _core_router_page__WEBPACK_IMPORTED_MODULE_0__["Page"] {
    constructor() {
        super(...arguments);
        this.htmlAddress = __webpack_require__(/*! ./my_paintings-page.html */ "./src/pages/my-paintings/my_paintings-page.html");
    }
    async beforeRender() {
        await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].init(this.objectStoreName, _app__WEBPACK_IMPORTED_MODULE_1__["objectStores"])
            .catch((e) => {
            console.log(e);
        });
    }
    async afterRender() {
        document.getElementById('header').innerHTML = Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_2__["createHeader"])('Мои рисунки');
        let galleryEl = document.querySelector('.gallery');
        let chooseImageBtn = document.getElementById('chooseImageBtn'), saveImageBtn = document.getElementById('saveImageBtn'), deleteBtn = document.getElementById('deleteBtn');
        let images = await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].getAll();
        let imgArr = images.reduce((arr, map) => {
            let src = [...map.keys()][0], alt = map.get(src).name;
            arr.push([alt, src]);
            return arr;
        }, []);
        let galleryFragment = await Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_2__["createGallery"])(imgArr);
        galleryEl.append(galleryFragment);
        galleryEl.addEventListener('click', (event) => {
            //@ts-ignore
            let image = event.target.closest('img');
            if (image) {
                this.currentImage = image;
                image.style.borderBottomColor = "orange";
                let savedEl = images.find((map) => {
                    return map.has(this.currentImage.src);
                });
                this.currentScene = savedEl.get(this.currentImage.src).scene;
            }
        });
        chooseImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                let outerPage;
                if (this.currentScene.outlineImage) {
                    await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].init('ColouringPage');
                    _colouring_colouring_page__WEBPACK_IMPORTED_MODULE_3__["ColouringPage"].outlineImage = this.currentScene.outlineImage;
                    outerPage = '/colouring';
                }
                else {
                    await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].init('PaintingPage');
                    outerPage = '/painting';
                }
                await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].put(this.currentScene, 'scene');
                await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].init(this.objectStoreName, _app__WEBPACK_IMPORTED_MODULE_1__["objectStores"]);
                history.pushState(outerPage, null, outerPage);
                history.pushState(outerPage, null, outerPage);
                history.back();
            }
        });
        deleteBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                this.currentImage.closest('figure').remove();
                await _app__WEBPACK_IMPORTED_MODULE_1__["dataBase"].delete(this.currentImage.src);
            }
        });
        saveImageBtn.addEventListener('click', async () => {
            if (this.currentImage) {
                let a = document.createElement('a');
                a.href = this.currentImage.src;
                a.download = 'Безымянный 1.png';
                a.dispatchEvent(new MouseEvent('click'));
            }
        });
    }
    ;
}


/***/ }),

/***/ "./src/pages/painting/painting-page.html":
/*!***********************************************!*\
  !*** ./src/pages/painting/painting-page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/painting-page.08d02f43c986dc0304eb0253e0e09a84.html";

/***/ }),

/***/ "./src/pages/painting/painting-page.ts":
/*!*********************************************!*\
  !*** ./src/pages/painting/painting-page.ts ***!
  \*********************************************/
/*! exports provided: PaintingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingPage", function() { return PaintingPage; });
/* harmony import */ var _core_common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common_functions */ "./src/core/common_functions.ts");
/* harmony import */ var _core_router_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/router/page */ "./src/core/router/page.ts");
/* harmony import */ var _core_canvas_tools_line_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/canvas/tools/line/line */ "./src/core/canvas/tools/line/line.ts");
/* harmony import */ var _core_canvas_tools_rect_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/canvas/tools/rect/rect */ "./src/core/canvas/tools/rect/rect.ts");
/* harmony import */ var _core_canvas_painter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/canvas/painter */ "./src/core/canvas/painter.ts");
/* harmony import */ var _core_canvas_currentState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/canvas/currentState */ "./src/core/canvas/currentState.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _core_canvas_tools_filler_filler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/canvas/tools/filler/filler */ "./src/core/canvas/tools/filler/filler.ts");
/* harmony import */ var _core_canvas_tools_eraser_eraser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/canvas/tools/eraser/eraser */ "./src/core/canvas/tools/eraser/eraser.ts");
/* harmony import */ var _core_canvas_tools_ellipse_ellipse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/canvas/tools/ellipse/ellipse */ "./src/core/canvas/tools/ellipse/ellipse.ts");
/* harmony import */ var _core_canvas_tools_straight_line_straightLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/canvas/tools/straight_line/straightLine */ "./src/core/canvas/tools/straight_line/straightLine.ts");











class PaintingPage extends _core_router_page__WEBPACK_IMPORTED_MODULE_1__["Page"] {
    constructor() {
        super(...arguments);
        this.htmlAddress = __webpack_require__(/*! ./painting-page.html */ "./src/pages/painting/painting-page.html");
    }
    render() {
        return this.resolvedData.template;
    }
    async beforeRender() {
        await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].init(this.objectStoreName, _app__WEBPACK_IMPORTED_MODULE_6__["objectStores"])
            .catch((err) => console.log(err));
    }
    async afterRender() {
        document.getElementById('header').innerHTML = Object(_core_common_functions__WEBPACK_IMPORTED_MODULE_0__["createHeader"])('РИСОВАЛКА');
        let canvas = document.getElementById('canvas'), currentStyleEl = document.getElementById('currentStyle'), toolbarEl = document.getElementById('toolbar');
        canvas.width = parseFloat(getComputedStyle(canvas).width);
        canvas.height = canvas.width * 0.7;
        let tools = [
            new _core_canvas_tools_line_line__WEBPACK_IMPORTED_MODULE_2__["Line"](),
            new _core_canvas_tools_straight_line_straightLine__WEBPACK_IMPORTED_MODULE_10__["StraightLine"](),
            new _core_canvas_tools_rect_rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](),
            new _core_canvas_tools_ellipse_ellipse__WEBPACK_IMPORTED_MODULE_9__["Ellipse"](),
            new _core_canvas_tools_filler_filler__WEBPACK_IMPORTED_MODULE_7__["Filler"](),
            new _core_canvas_tools_eraser_eraser__WEBPACK_IMPORTED_MODULE_8__["Eraser"]()
        ];
        let painter = new _core_canvas_painter__WEBPACK_IMPORTED_MODULE_4__["Painter"](canvas, tools);
        await this.arrangeCurrentStyleEl(currentStyleEl);
        await this.arrangeToolbar(toolbarEl, tools, painter);
        this.arrangeColorBlocks();
        await this.setBtnListeners(canvas, painter);
    }
    ;
    async setBtnListeners(canvas, painter) {
        let downloadBtn = document.getElementById('downloadBtn'), saveBtn = document.getElementById('saveBtn'), clearBtn = document.getElementById('clearBtn'), undoBtn = document.getElementById('undoBtn'), returnBtn = document.getElementById('returnBtn'), inputColorBtn = document.getElementById('inputColor');
        downloadBtn.addEventListener('click', async () => {
            let blob = await painter.export();
            let url = URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'Безымянный 1.png';
            a.dispatchEvent(new MouseEvent('click'));
            URL.revokeObjectURL(url);
        });
        saveBtn.addEventListener('click', async () => {
            let img = canvas.toDataURL('image/png');
            let name = prompt('Как назовёшь рисунок?', 'Красота');
            let savedObject = new Map([
                [img, {
                        name,
                        scene: await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].get('scene')
                    }]
            ]);
            await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].init('MyPaintingsPage');
            await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].put(savedObject, img);
            await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].init(this.objectStoreName);
        });
        clearBtn.addEventListener('click', async () => {
            await painter.clear();
        });
        undoBtn.addEventListener('click', async () => {
            await painter.undo();
        });
        returnBtn.addEventListener('click', async () => {
            await painter.return();
        });
        inputColorBtn.addEventListener('input', (event) => {
            if (this.activeColorBlock) {
                //@ts-ignore
                this.activeColorBlock.style.backgroundColor = event.target.value;
            }
        });
    }
    async arrangeCurrentStyleEl(currentStyleEl) {
        let fillColor = document.getElementById('fillColor'), strokeColor = document.getElementById('strokeColor'), strokeWidth = document.getElementById('strokeWidth');
        let blocks = currentStyleEl.getElementsByClassName('color');
        let width = getComputedStyle(blocks[0]).width;
        for (let colorBlock of blocks) {
            colorBlock.style.height = width;
        }
        let index = 7;
        for (let el of currentStyleEl.children) {
            el.tabIndex = index++;
        }
        fillColor.style.backgroundColor = await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].get('fillColor') || '#595959';
        strokeColor.style.backgroundColor = await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].get('strokeColor') || '#7c7c7c';
        strokeWidth.value = await _app__WEBPACK_IMPORTED_MODULE_6__["dataBase"].get('strokeWidth') || 5;
        await Object(_core_canvas_currentState__WEBPACK_IMPORTED_MODULE_5__["setCurrentStyle"])(fillColor.style.backgroundColor, strokeColor.style.backgroundColor, strokeWidth.value);
        currentStyleEl.addEventListener('click', (event) => {
            let target = event.target.closest('.color');
            if (target) {
                this.activeCurColorEl = target;
            }
        });
        currentStyleEl.addEventListener('dblclick', async () => {
            await Object(_core_canvas_currentState__WEBPACK_IMPORTED_MODULE_5__["setCurrentStyle"])(fillColor.style.backgroundColor, strokeColor.style.backgroundColor, strokeWidth.value);
        }, true);
        currentStyleEl.addEventListener('change', async () => {
            await Object(_core_canvas_currentState__WEBPACK_IMPORTED_MODULE_5__["setCurrentStyle"])(fillColor.style.backgroundColor, strokeColor.style.backgroundColor, strokeWidth.value);
        });
    }
    arrangeColorBlocks() {
        let colorBlocksEl = document.getElementById('colorBlocks'), blocks = colorBlocksEl.getElementsByClassName('color');
        let width = getComputedStyle(blocks[0]).width;
        for (let colorBlock of blocks) {
            colorBlock.style.height = width;
        }
        let index = 15;
        for (let el of blocks) {
            el.tabIndex = index++;
        }
        colorBlocksEl.addEventListener('click', (event) => {
            //@ts-ignore
            let block = event.target.closest('.color');
            if (block) {
                if (this.activeCurColorEl) {
                    this.activeCurColorEl.style.backgroundColor = getComputedStyle(block).backgroundColor;
                    let event = new Event('dblclick');
                    this.activeCurColorEl.dispatchEvent(event);
                }
                this.activeColorBlock = block;
            }
        });
    }
    async arrangeToolbar(toolbarEl, tools, painter) {
        const TOOLS_MAP = new Map();
        let index = 3;
        toolbarEl.append(tools.reduce((fragment, tool) => {
            let div = document.createElement('div');
            div.innerHTML = tool.icon;
            div.tabIndex = index++;
            //btn.classList.add(tool.name);
            fragment.appendChild(div);
            TOOLS_MAP.set(div, tool);
            return fragment;
        }, document.createDocumentFragment()));
        toolbarEl.addEventListener('click', (event) => {
            //@ts-ignore
            let tool = TOOLS_MAP.get(event.target.closest('div'));
            if (tool) {
                painter.setTool(tool);
            }
        });
    }
}


/***/ })

/******/ });
//# sourceMappingURL=app.646562fd676190719a6f.js.map