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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rect = exports.Vector2 = undefined;

var _Vector = __webpack_require__(9);

var _Vector2 = _interopRequireDefault(_Vector);

var _Rect = __webpack_require__(10);

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Vector2 = _Vector2.default;
exports.Rect = _Rect2.default;
exports.default = {
    Vector2: _Vector2.default,
    Rect: _Rect2.default
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(_ref) {
        var targetObject = _ref.targetObject;

        _classCallCheck(this, Component);

        this.targetObject = targetObject;
    }

    _createClass(Component, [{
        key: "awake",
        value: function awake() {}
    }, {
        key: "start",
        value: function start() {}
    }, {
        key: "preUpdate",
        value: function preUpdate() {}
    }, {
        key: "update",
        value: function update() {}
    }, {
        key: "lateUpdate",
        value: function lateUpdate() {}
    }, {
        key: "distroy",
        value: function distroy() {}
    }]);

    return Component;
}();

exports.default = Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tools = __webpack_require__(14);

var _GameObject2 = __webpack_require__(6);

var _GameObject3 = _interopRequireDefault(_GameObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Camera = function (_GameObject) {
    _inherits(Camera, _GameObject);

    function Camera(_ref) {
        var name = _ref.name,
            _ref$transform = _ref.transform,
            transform = _ref$transform === undefined ? undefined : _ref$transform,
            _ref$components = _ref.components,
            components = _ref$components === undefined ? [] : _ref$components,
            scene = _ref.scene;

        _classCallCheck(this, Camera);

        var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, {
            name: name,
            transform: transform,
            components: components
        }));

        _this.scene = scene;
        return _this;
    }

    // 获取当前相机可见的gameObject


    _createClass(Camera, [{
        key: 'getVisibleGameObjects',
        value: function getVisibleGameObjects() {
            var _this2 = this;

            var visibleGameObject = this.scene.gameObjects.reduce(function (prev, gameObject) {
                if (gameObject.active && (0, _tools.isCollsion)(_this2, gameObject)) {
                    prev.push(gameObject);
                } else {
                    return prev;
                }
                return prev;
            }, []);
            return visibleGameObject;
        }
    }, {
        key: 'isGameObjectVisible',
        value: function isGameObjectVisible(gameObject) {
            if (gameObject.active && (0, _tools.isCollsion)(this, gameObject)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'worldToScreen',
        value: function worldToScreen(_ref2) {
            var position = _ref2.position;

            var x1y1 = Vector2.minus(this.transform.position, this.transform.anchor);
            return Vector2.minus(position, x1y1);
        }
    }, {
        key: 'screenToWorld',
        value: function screenToWorld(_ref3) {
            var position = _ref3.position;

            var x1y1 = Vector2.minus(this.transform.position, this.transform.anchor);
            return Vector2.add(position, x1y1);
        }
    }]);

    return Camera;
}(_GameObject3.default);

exports.default = Camera;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Engine = __webpack_require__(4);

var _Engine2 = _interopRequireDefault(_Engine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createObject = _Engine2.default.createObject,
    Camera = _Engine2.default.Camera,
    Canvas = _Engine2.default.Canvas,
    Scene = _Engine2.default.Scene,
    _Engine$types = _Engine2.default.types,
    Vector2 = _Engine$types.Vector2,
    Rect = _Engine$types.Rect;

var canvas = document.getElementById("canvas");
var canvasObj = new Canvas({ canvas: canvas, width: 800, height: 400 });
// const a = new Image();
// a.src = "https://www.baidu.com/img/bd_logo1.png";
// a.onload = function () {
var scene = new Scene({ width: 2000, height: 2000 });
var camera = new Camera({
    name: "camera",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 800, height: 400 }),
        position: new Vector2({ x: 400, y: 200 }),
        anchor: new Vector2({ x: 400, y: 200 })
    },
    scene: scene
});
canvasObj.setCamera(camera);
var firstGameObject = createObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 30, height: 30 }),
        position: new Vector2({ x: 400, y: 200 }),
        anchor: new Vector2({ x: 200, y: 100 })
    }
});
console.log(firstGameObject);
firstGameObject.img.setRect({
    rect: new Rect({
        x: 0,
        y: 0,
        width: 250,
        height: 90
    })
});
firstGameObject.img.setUrl({ url: 'https://www.baidu.com/img/bd_logo1.png' });

scene.addGameObject(firstGameObject);

console.log(camera.transform);
console.log(firstGameObject.transform);

// }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(5);

var _store2 = _interopRequireDefault(_store);

var _GameObject = __webpack_require__(6);

var _GameObject2 = _interopRequireDefault(_GameObject);

var _Canvas = __webpack_require__(12);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Scene = __webpack_require__(13);

var _Scene2 = _interopRequireDefault(_Scene);

var _Camera = __webpack_require__(2);

var _Camera2 = _interopRequireDefault(_Camera);

var _types = __webpack_require__(0);

var _types2 = _interopRequireDefault(_types);

var _Component = __webpack_require__(1);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameObjectStore = (0, _store2.default)('gameObject');
exports.default = {
    createObject: function createObject(_ref) {
        var name = _ref.name,
            transform = _ref.transform,
            components = _ref.components;

        var gameObject = new _GameObject2.default({
            name: name,
            transform: transform,
            components: components
        });
        gameObjectStore.push(gameObject);
        return gameObject;
    },
    distroyObject: function distroyObject(gameObject) {
        gameObject.distroy();
        gameObjectStore.remove(gameObject);
    },
    find: function find(_ref2) {
        var name = _ref2.name;

        var gameObject = void 0;
        var all = _store2.default.findAll();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = all[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var obj = _step.value;

                if (obj.name == name) {
                    gameObject = obj;
                    break;
                } else {
                    gameObject = obj.find({
                        name: name
                    });
                    if (gameObject) {
                        break;
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return gameObject;
    },


    Canvas: _Canvas2.default,
    Scene: _Scene2.default,
    Camera: _Camera2.default,
    types: _types2.default,
    Component: _Component2.default
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = store;
var store = {};
function store(name) {
    if (!store[name]) {
        store[name] = [];
    }
    return {
        push: function push(obj) {
            store[name].push(obj);
        },
        remove: function remove(obj) {
            var index = store[name].findIndex(function (o) {
                return o == obj;
            });
            index !== -1 && store[name].splice(index, 1);
        },
        getAll: function getAll() {
            return store[name];
        }
    };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
    function GameObject(_ref) {
        var name = _ref.name,
            _ref$transform = _ref.transform,
            transform = _ref$transform === undefined ? undefined : _ref$transform,
            _ref$components = _ref.components,
            components = _ref$components === undefined ? [] : _ref$components;

        _classCallCheck(this, GameObject);

        this.name = name;
        this.childs = [];
        this.parent = undefined;
        this.components = [];
        this.active = true;
        this.scene = undefined;
        this.transform = this.addComponent(_components.Transform)(transform);
        this.img = this.addComponent(_components.Img)();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var component = _step.value;

                this.addComponent(component)();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    _createClass(GameObject, [{
        key: 'find',
        value: function find(_ref2) {
            var name = _ref2.name;

            var obj = this.childs.find(function (obj) {
                return obj.name == name;
            });
            if (!obj) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.childs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        obj = child.find({
                            name: name
                        });
                        if (obj) break;
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            return obj;
        }
    }, {
        key: 'addComponent',
        value: function addComponent(Component) {
            var _this = this;

            return function () {
                var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var arg = _extends({
                    targetObject: _this
                }, obj);
                var lengh = _this.components.push(new Component(arg));
                return _this.components[lengh - 1];
            };
        }
    }, {
        key: 'removeComponent',
        value: function removeComponent(Component) {
            var index = this.components.findIndex(function (c) {
                return c instanceof Component;
            });
            index !== -1 && this.component.splice(index, 1);
        }
    }, {
        key: 'getComponent',
        value: function getComponent(Component) {
            return this.components.find(function (c) {
                return c instanceof Component;
            });
        }
    }, {
        key: 'setActive',
        value: function setActive(flag) {
            this.active = flag;
        }
    }, {
        key: 'setScene',
        value: function setScene(scene) {
            this.scene = scene;
        }
    }, {
        key: 'distroy',
        value: function distroy() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.components[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var component = _step3.value;

                    component.distory();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.active = false;
        }
    }]);

    return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Transform = exports.Img = undefined;

var _Img = __webpack_require__(8);

var _Img2 = _interopRequireDefault(_Img);

var _Transform = __webpack_require__(11);

var _Transform2 = _interopRequireDefault(_Transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Img = _Img2.default;
exports.Transform = _Transform2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(0);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Img = function (_Component) {
    _inherits(Img, _Component);

    function Img(_ref) {
        var targetObject = _ref.targetObject;

        _classCallCheck(this, Img);

        var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, {
            targetObject: targetObject
        }));

        _this.rect = new _types.Rect();
        _this.image = new Image();
        return _this;
    }

    _createClass(Img, [{
        key: 'setRect',
        value: function setRect(_ref2) {
            var rect = _ref2.rect;

            this.rect = rect;
        }
    }, {
        key: 'setUrl',
        value: function setUrl(_ref3) {
            var url = _ref3.url;

            this.url = url;
            this.image = new Image();
            this.image.src = url;
        }
    }]);

    return Img;
}(_Component3.default);

exports.default = Img;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
    function Vector2(_ref) {
        var _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        _classCallCheck(this, Vector2);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector2, null, [{
        key: "minus",
        value: function minus() {
            for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
                objs[_key] = arguments[_key];
            }

            return objs.reduce(function (prev, curr) {
                return new Vector2({
                    x: prev.x - curr.x,
                    y: prev.y - curr.y
                });
            });
        }
    }, {
        key: "add",
        value: function add() {
            for (var _len2 = arguments.length, objs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                objs[_key2] = arguments[_key2];
            }

            return objs.reduce(function (prev, curr) {
                return new Vector2({
                    x: prev.x + curr.x,
                    y: prev.y + curr.y
                });
            }, new Vector2({ x: 0, y: 0 }));
        }
    }]);

    return Vector2;
}();

exports.default = Vector2;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function Rect() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 0 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 0 : _ref$height;

    _classCallCheck(this, Rect);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

exports.default = Rect;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(0);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transform = function (_Component) {
    _inherits(Transform, _Component);

    function Transform(_ref) {
        var targetObject = _ref.targetObject,
            _ref$rect = _ref.rect,
            rect = _ref$rect === undefined ? new _types.Rect() : _ref$rect,
            _ref$position = _ref.position,
            position = _ref$position === undefined ? new _types.Vector2() : _ref$position,
            _ref$anchor = _ref.anchor,
            anchor = _ref$anchor === undefined ? new _types.Vector2() : _ref$anchor;

        _classCallCheck(this, Transform);

        var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this, {
            targetObject: targetObject
        }));

        _this.rect = rect;
        _this.position = position;
        _this.anchor = anchor;
        return _this;
    }

    return Transform;
}(_Component3.default);

exports.default = Transform;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas(_ref) {
        var _this = this;

        var canvas = _ref.canvas,
            width = _ref.width,
            height = _ref.height,
            _ref$camera = _ref.camera,
            camera = _ref$camera === undefined ? undefined : _ref$camera;

        _classCallCheck(this, Canvas);

        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.context = canvas.getContext('2d');
        this.camera = camera;
        this.frame = requestAnimationFrame(function () {
            return _this.render();
        });
    }

    _createClass(Canvas, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.clearContext();
            var gameObjects = this.camera.getVisibleGameObjects();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = gameObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var gameObject = _step.value;

                    this.drawImg(gameObject);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.frame = requestAnimationFrame(function () {
                return _this2.render();
            });
        }
    }, {
        key: 'clearContext',
        value: function clearContext() {
            this.context.clearRect(0, 0, this.width, this.height);
        }
    }, {
        key: 'drawImg',
        value: function drawImg(gameObject) {
            var x1y1 = _types.Vector2.minus(gameObject.transform.position, gameObject.transform.anchor);
            var x2y2 = _types.Vector2.add(x1y1, new _types.Vector2({ x: gameObject.img.rect.x, y: gameObject.img.rect.y }));
            this.context.drawImage(gameObject.img.image, x2y2.x, x2y2.y, gameObject.img.rect.width, gameObject.img.rect.height);
        }
    }, {
        key: 'setCamera',
        value: function setCamera(camera) {
            this.camera = camera;
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Camera = __webpack_require__(2);

var _Camera2 = _interopRequireDefault(_Camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
    function Scene(_ref) {
        var width = _ref.width,
            height = _ref.height;

        _classCallCheck(this, Scene);

        this.width = width;
        this.height = height;
        this.camera = [];
        this.gameObjects = [];
    }

    _createClass(Scene, [{
        key: 'addGameObject',
        value: function addGameObject(gameObject) {
            gameObject instanceof _Camera2.default && this.camera.push(gameObject);
            gameObject.setScene(this);
            this.gameObjects.push(gameObject);
        }
    }]);

    return Scene;
}();

exports.default = Scene;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isCollsion = isCollsion;
exports.isPointCollsion = isPointCollsion;

var _types = __webpack_require__(0);

function isCollsion(gameObject1, gameObject2) {
    var transform1 = gameObject1.transform;
    var transform2 = gameObject2.transform;

    var w1 = transform1.rect.width;
    var w2 = transform2.rect.width;
    var h1 = transform1.rect.height;
    var h2 = transform2.rect.height;

    var x1y1 = _types.Vector2.minus(transform1.position, transform1.anchor);
    var x2y2 = _types.Vector2.minus(transform2.position, transform2.anchor);

    var x1 = x1y1.x;
    var x2 = x2y2.x;
    var y1 = x1y1.y;
    var y2 = x2y2.y;

    if (x1 >= x2 && x1 >= x2 + w2) {
        return false;
    } else if (x1 <= x2 && x1 + w1 <= x2) {
        return false;
    } else if (y1 >= y2 && y1 >= y2 + h2) {
        return false;
    } else if (y1 <= y2 && y1 + h1 <= y2) {
        return false;
    }
    return true;
}

function isPointCollsion(point, gameObject) {
    var x1 = point.x;
    var y1 = point.y;
    var x2 = gameObject.transform.position.x;
    var y2 = gameObject.transform.position.y;
    var w = gameObject.rect.width;
    var h = gameObject.rect.height;

    if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
        return true;
    }
    return false;
}

/***/ })
/******/ ]);