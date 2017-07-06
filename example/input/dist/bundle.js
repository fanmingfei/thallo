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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

var _Vector = __webpack_require__(12);

var _Vector2 = _interopRequireDefault(_Vector);

var _Rect = __webpack_require__(13);

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

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(_ref) {
        var targetObject = _ref.targetObject;

        _classCallCheck(this, Component);

        this.targetObject = targetObject;
        this.active = true;
    }

    _createClass(Component, [{
        key: 'start',
        value: function start() {}
    }, {
        key: 'preUpdate',
        value: function preUpdate() {}
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'lateUpdate',
        value: function lateUpdate() {}
    }, {
        key: 'setActive',
        value: function setActive(flag) {
            this.active = flag;
        }
    }, {
        key: 'distroy',
        value: function distroy() {
            (0, _store2.default)(targetObject.scene)('component').remove(this);
        }
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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = store;
var cache = new Map();
function store(id) {
    if (!cache.has(id)) {
        cache.set(id, new Map());
    }
    return function (name) {
        if (!cache.get(id).has(name)) {
            cache.get(id).set(name, []);
        }
        var store = cache.get(id).get(name);
        return {
            push: function push() {
                store.push.apply(store, arguments);
            },
            remove: function remove() {
                for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
                    objs[_key] = arguments[_key];
                }

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        obj = _step.value;

                        var index = store.findIndex(function (o) {
                            return o == obj;
                        });
                        index !== -1 && store.splice(index, 1);
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
            },
            getAll: function getAll() {
                return store;
            },
            clear: function clear() {
                store.clear();
            }
        };
    };
};

var findGameObject = exports.findGameObject = function findGameObject(_ref) {
    var name = _ref.name;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = cache[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref2 = _step2.value;

            var _ref3 = _slicedToArray(_ref2, 2);

            var key = _ref3[0];
            var value = _ref3[1];

            return value.get('gameObject').find(function (go) {
                return go.name == name;
            });
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
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(5);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _Touch = __webpack_require__(7);

var _Touch2 = _interopRequireDefault(_Touch);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
        this.renderer = this.addComponent(_components.Renderer)();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var component = _step.value;

                this.addComponent(component.component)(component.arguments);
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
                var component = new Component(arg);
                if (component instanceof _Input2.default) {
                    _this.input = component;
                }
                if (component instanceof _Touch2.default) {
                    _this.touch = component;
                }
                if (_this.componentsStore) {
                    _this.componentsStore.push(component);
                }
                _this.components.push(component);
                component.start();
                return component;
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
        value: function setScene(_ref3) {
            var _componentsStore;

            var scene = _ref3.scene;

            this.scene = scene;
            this.componentsStore = (0, _store2.default)(scene)('component');
            (_componentsStore = this.componentsStore).push.apply(_componentsStore, _toConsumableArray(this.components));
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findGameObject = exports.Touch = exports.keyCode = exports.Input = exports.components = exports.Component = exports.types = exports.Camera = exports.Scene = exports.Canvas = exports.GameObject = undefined;

var _Input2 = __webpack_require__(10);

Object.defineProperty(exports, 'keyCode', {
  enumerable: true,
  get: function get() {
    return _Input2.keyCode;
  }
});

var _store = __webpack_require__(2);

Object.defineProperty(exports, 'findGameObject', {
  enumerable: true,
  get: function get() {
    return _store.findGameObject;
  }
});

var _GameObject2 = __webpack_require__(3);

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _Canvas2 = __webpack_require__(17);

var _Canvas3 = _interopRequireDefault(_Canvas2);

var _Scene2 = __webpack_require__(18);

var _Scene3 = _interopRequireDefault(_Scene2);

var _Camera2 = __webpack_require__(8);

var _Camera3 = _interopRequireDefault(_Camera2);

var _types2 = __webpack_require__(0);

var _types3 = _interopRequireDefault(_types2);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _components2 = __webpack_require__(5);

var _components3 = _interopRequireDefault(_components2);

var _Input3 = _interopRequireDefault(_Input2);

var _Touch2 = __webpack_require__(21);

var _Touch3 = _interopRequireDefault(_Touch2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GameObject = _GameObject3.default;
exports.Canvas = _Canvas3.default;
exports.Scene = _Scene3.default;
exports.Camera = _Camera3.default;
exports.types = _types3.default;
exports.Component = _Component3.default;
exports.components = _components3.default;
// export input, {keyCode} from './base/Input';

exports.Input = _Input3.default;
exports.Touch = _Touch3.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = exports.Renderer = exports.Transform = exports.Img = undefined;

var _Img = __webpack_require__(11);

var _Img2 = _interopRequireDefault(_Img);

var _Transform = __webpack_require__(14);

var _Transform2 = _interopRequireDefault(_Transform);

var _Renderer = __webpack_require__(15);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _Text = __webpack_require__(16);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Img = _Img2.default;
exports.Transform = _Transform2.default;
exports.Renderer = _Renderer2.default;
exports.Text = _Text2.default;
exports.default = {
    Img: _Img2.default,
    Transform: _Transform2.default,
    Renderer: _Renderer2.default,
    Text: _Text2.default
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(_ref) {
        var targetObject = _ref.targetObject,
            canvas = _ref.canvas;

        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, { targetObject: targetObject }));

        _this.canvas = canvas;
        _this.currentKeyList = [];
        _this.currentFrameDown = [];
        _this.currentFrameUp = [];
        _this.addEventListener();
        return _this;
    }

    _createClass(Input, [{
        key: 'getKeyDown',
        value: function getKeyDown(keyCode) {
            if (this.currentFrameDown.indexOf(keyCode) != -1) {
                return true;
            }
            return false;
        }
    }, {
        key: 'getKeyUp',
        value: function getKeyUp(keyCode) {
            if (this.currentFrameUp.indexOf(keyCode) != -1) {
                return true;
            }
            return false;
        }
    }, {
        key: 'getKey',
        value: function getKey(keyCode) {
            keyCode = +keyCode;
            if (this.currentKeyList.indexOf(keyCode) != -1 && this.currentFrameDown.indexOf(keyCode) == -1 && this.currentFrameUp.indexOf(keyCode) == -1) {
                return true;
            }
            return false;
        }
    }, {
        key: 'setKeyDown',
        value: function setKeyDown(keyCode) {
            if (this.currentKeyList.indexOf(keyCode) != -1) {
                return;
            }
            this.currentKeyList.push(keyCode);
            this.currentFrameDown.push(keyCode);
        }
    }, {
        key: 'setKeyUp',
        value: function setKeyUp(keyCode) {
            var index = this.currentKeyList.findIndex(function (c) {
                return c == keyCode;
            });
            if (index != -1) {
                this.currentKeyList.splice(index, 1);
            }
            this.currentFrameUp.push(keyCode);
        }
    }, {
        key: 'lateUpdate',
        value: function lateUpdate() {
            this.clearInput();
        }
    }, {
        key: 'clearInput',
        value: function clearInput() {
            this.currentFrameDown = [];
            this.currentFrameUp = [];
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener() {
            var _this2 = this;

            document.addEventListener('keydown', function (e) {
                _this2.setKeyDown(e.keyCode);
            });
            document.addEventListener('keyup', function (e) {
                _this2.setKeyUp(e.keyCode);
            });
        }
    }]);

    return Input;
}(_Component3.default);

exports.default = Input;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(0);

var _tools = __webpack_require__(19);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Touch = function (_Component) {
    _inherits(Touch, _Component);

    function Touch(_ref) {
        var targetObject = _ref.targetObject,
            canvas = _ref.canvas;

        _classCallCheck(this, Touch);

        var _this = _possibleConstructorReturn(this, (Touch.__proto__ || Object.getPrototypeOf(Touch)).call(this, { targetObject: targetObject }));

        _this.canvas = canvas;
        _this.touchStartList = new Map();
        _this.touchList = new Map();
        _this.touchEndList = new Map();
        _this.addEventListener();
        return _this;
    }

    _createClass(Touch, [{
        key: 'getTouchStart',
        value: function getTouchStart(gameObject) {
            if (!gameObject) {
                return this.touchStartList.size > 0;
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.touchStartList.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var touch = _step.value;

                    var coll = (0, _tools.isPointCollsion)(new _types.Vector2({
                        x: touch.pageX - this.canvas.canvas.offsetLeft,
                        y: touch.pageY - this.canvas.canvas.offsetTop
                    }), gameObject);
                    if (coll) {
                        return true;
                    };
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

            return false;
        }
    }, {
        key: 'getTouchEnd',
        value: function getTouchEnd(gameObject) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.touchEndList.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var touch = _step2.value;

                    var coll = (0, _tools.isPointCollsion)(new _types.Vector2({
                        x: touch.pageX - this.canvas.canvas.offsetLeft,
                        y: touch.pageY - this.canvas.canvas.offsetTop
                    }), gameObject);
                    if (coll) {
                        return true;
                    };
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

            return false;
        }
    }, {
        key: 'setTouchStart',
        value: function setTouchStart(touches) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = touches[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var touch = _step3.value;


                    this.touchList.set(touch.identifier, touch);
                    this.touchStartList.set(touch.identifier, touch);
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
        }
    }, {
        key: 'setTouchEnd',
        value: function setTouchEnd(touches) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = touches[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var touch = _step4.value;

                    this.touchList.delete(touch.identifier);
                    this.touchEndList.set(touch.identifier, touch);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: 'lateUpdate',
        value: function lateUpdate() {
            this.clearTouch();
        }
    }, {
        key: 'clearTouch',
        value: function clearTouch() {
            this.touchStartList.clear();
            this.touchEndList.clear();
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener() {
            var _this2 = this;

            this.canvas.canvas.addEventListener('touchstart', function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this2.setTouchStart(e.touches);
            });
            this.canvas.canvas.addEventListener('touchend', function (e) {
                _this2.setTouchEnd(e.changedTouches);
            });
            this.canvas.canvas.addEventListener('touchcancel', function (e) {
                _this2.setTouchEnd(e.touches);
            });
        }
    }]);

    return Touch;
}(_Component3.default);

exports.default = Touch;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tools = __webpack_require__(19);

var _GameObject2 = __webpack_require__(3);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Engine = __webpack_require__(4);

var _InputManager = __webpack_require__(22);

var _InputManager2 = _interopRequireDefault(_InputManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = _Engine.components.Img;
var Vector2 = _Engine.types.Vector2,
    Rect = _Engine.types.Rect;


var canvas = document.getElementById("canvas");

// 创建一个场景
// Create a scene
var scene = new _Engine.Scene({ width: 400, height: 800 });

// 创建一个 相机
// Create a camera
var camera = new _Engine.Camera({
    name: "camera",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 400, height: 800 }),
        position: new Vector2({ x: 200, y: 400 })
        // anchor: new Vector2({ x: 400, y: 200 }) // !!! default is the middle of rect, 默认锚点在相机的中心点
    },
    scene: scene // need a scene to show, 需要一个场景，相机将会显示这个场景的内容
});

// 创建将相机设置给 canvas, canvas将显示这个相机的内容
// Create canvas and set camera to the canvas, canvas will display the camera view.
var canvasObj = new _Engine.Canvas({ canvas: canvas, width: 400, height: 800, camera: camera });

// 创建第一个游戏对象
// create the first game object
var firstGameObject = new _Engine.GameObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 100, height: 100 }),
        position: new Vector2({ x: 180, y: 200 })
        // rotation: 45
    },
    components: [{
        component: Img,
        arguments: {
            rect: new Rect({
                x: 0,
                y: 0,
                width: 100,
                height: 100
            }),
            url: 'https://fanmingfei.github.io/thallo/example/first/a.png'
        }
    }, {
        component: _InputManager2.default,
        arguments: {
            dir: -1,
            speed: 50
        }
    }]
});

var input = new _Engine.Input({ canvas: canvasObj });

scene.addGameObjects(input, firstGameObject);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keyCode = undefined;

var _GameObject2 = __webpack_require__(3);

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputObject = function (_GameObject) {
    _inherits(InputObject, _GameObject);

    function InputObject(_ref) {
        var canvas = _ref.canvas;

        _classCallCheck(this, InputObject);

        return _possibleConstructorReturn(this, (InputObject.__proto__ || Object.getPrototypeOf(InputObject)).call(this, {
            name: 'input',
            components: [{
                component: _Input2.default,
                arguments: { canvas: canvas }
            }]
        }));
    }

    return InputObject;
}(_GameObject3.default);

exports.default = InputObject;


var keyCode = {
    BackSpace: 8,
    Tab: 9,
    Clear: 12,
    Enter: 13,
    Shift_L: 16,
    Control_L: 17,
    Alt_L: 18,
    Pause: 19,
    Caps_Lock: 20,
    Escape: 27,
    Space: 32,
    Prior: 33,
    Next: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Select: 41,
    Print: 42,
    Execute: 43,
    Insert: 45,
    Delete: 46,
    Help: 47,
    Alpha_0: 48,
    Alpha_1: 49,
    Alpha_2: 50,
    Alpha_3: 51,
    Alpha_4: 52,
    Alpha_5: 53,
    Alpha_6: 54,
    Alpha_7: 55,
    Alpha_8: 56,
    Alpha_9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    KP_0: 96,
    KP_1: 97,
    KP_2: 98,
    KP_3: 99,
    KP_4: 100,
    KP_5: 101,
    KP_6: 102,
    KP_7: 103,
    KP_8: 104,
    KP_9: 105,
    KP_Multiply: 106,
    KP_Add: 107,
    KP_Separator: 108,
    KP_Subtract: 109,
    KP_Decimal: 110,
    KP_Divide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    F16: 127,
    F17: 128,
    F18: 129,
    F19: 130,
    F20: 131,
    F21: 132,
    F22: 133,
    F23: 134,
    F24: 135,
    Num_Lock: 136,
    Scroll_Lock: 137
};

exports.keyCode = keyCode;

/***/ }),
/* 11 */
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
        var targetObject = _ref.targetObject,
            _ref$rect = _ref.rect,
            rect = _ref$rect === undefined ? new _types.Rect() : _ref$rect,
            _ref$url = _ref.url,
            url = _ref$url === undefined ? '' : _ref$url,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === undefined ? 0 : _ref$rotation;

        _classCallCheck(this, Img);

        var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, {
            targetObject: targetObject
        }));

        var rect;
        var image;
        Object.defineProperties(_this, {
            rect: {
                set: function set(value) {
                    rect = value;
                    this.image.rect = rect;
                },
                get: function get() {
                    return rect;
                }
            },
            image: {
                set: function set(value) {
                    image = value;
                },
                get: function get() {
                    return image;
                }
            }
        });
        _this.setUrl({ url: url });
        _this.rect = rect;
        return _this;
    }

    _createClass(Img, [{
        key: 'setUrl',
        value: function setUrl(_ref2) {
            var url = _ref2.url;

            this.url = url;
            this.image = new Image();
            this.image.src = url;
        }
    }, {
        key: 'update',
        value: function update() {
            this.targetObject.renderer.pushImages({
                image: this.image,
                rect: this.rect
            });
        }
    }]);

    return Img;
}(_Component3.default);

exports.default = Img;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
    function Vector2() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
            _ref$x = _ref.x,
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function Rect() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0, width: 0, height: 0 },
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
/* 14 */
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
            anchor = _ref$anchor === undefined ? new _types.Vector2({ x: rect.width / 2, y: rect.height / 2 }) : _ref$anchor,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === undefined ? 0 : _ref$rotation;

        _classCallCheck(this, Transform);

        var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this, {
            targetObject: targetObject
        }));

        _this.rect = rect;
        _this.position = position;
        _this.anchor = anchor;
        _this.rotation = rotation;
        return _this;
    }

    return Transform;
}(_Component3.default);

exports.default = Transform;

/***/ }),
/* 15 */
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

var Renderer = function (_Component) {
    _inherits(Renderer, _Component);

    function Renderer(_ref) {
        var targetObject = _ref.targetObject;

        _classCallCheck(this, Renderer);

        var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, {
            targetObject: targetObject
        }));

        _this.images = [];
        return _this;
    }

    _createClass(Renderer, [{
        key: 'pushImages',
        value: function pushImages() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var img = _step.value;

                    img.crossOrigin = 'anonymous';
                    this.images.push(img);
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
    }]);

    return Renderer;
}(_Component3.default);

exports.default = Renderer;

/***/ }),
/* 16 */
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

var Text = function (_Component) {
    _inherits(Text, _Component);

    function Text(_ref) {
        var targetObject = _ref.targetObject,
            _ref$text = _ref.text,
            text = _ref$text === undefined ? 'text' : _ref$text,
            _ref$font = _ref.font,
            font = _ref$font === undefined ? '12px sans-serif' : _ref$font,
            _ref$color = _ref.color,
            color = _ref$color === undefined ? '#000' : _ref$color,
            _ref$textAlign = _ref.textAlign,
            textAlign = _ref$textAlign === undefined ? 'start' : _ref$textAlign,
            _ref$textBaseline = _ref.textBaseline,
            textBaseline = _ref$textBaseline === undefined ? 'hanging' : _ref$textBaseline,
            _ref$position = _ref.position,
            position = _ref$position === undefined ? new _types.Vector2() : _ref$position,
            _ref$rect = _ref.rect,
            rect = _ref$rect === undefined ? targetObject.transform.rect : _ref$rect;

        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, {
            targetObject: targetObject
        }));

        var store = {
            color: color,
            font: font,
            text: text,
            textAlign: textAlign,
            textBaseline: textBaseline,
            position: position,
            rect: rect
        };

        _this.needRender = false;

        var _loop = function _loop(name) {
            Object.defineProperty(_this, name, {
                get: function get() {
                    return store[name];
                },
                set: function set(value) {
                    store[name] = value;
                    this.needRender = true;
                }
            });
        };

        for (var name in store) {
            _loop(name);
        }

        _this.canvas = document.createElement('canvas');
        _this.ctx = _this.canvas.getContext('2d');
        _this.updateText();
        return _this;
    }

    _createClass(Text, [{
        key: 'update',
        value: function update() {
            if (this.needRender) {
                this.updateText();
            } else {
                this.targetObject.renderer.pushImages(this.renderImg);
            }
        }
    }, {
        key: 'updateText',
        value: function updateText() {
            this.canvas.width = this.rect.width;
            this.canvas.height = this.rect.height;
            this.ctx.fillStyle = this.color;
            this.ctx.font = this.font;
            this.ctx.textAlign = this.textAlign;
            this.ctx.textBaseline = this.textBaseline;
            this.ctx.fillText(this.text, this.position.x, this.position.y);
            var base64 = this.canvas.toDataURL('image/png');
            var img = new Image();
            img.src = base64;
            this.renderImg = {
                image: img,
                rect: new _types.Rect({ x: 0, y: 0, width: this.canvas.width, height: this.canvas.height })
            };
            this.targetObject.renderer.pushImages(this.renderImg);
            this.needRender = false;
        }
    }]);

    return Text;
}(_Component3.default);

exports.default = Text;

/***/ }),
/* 17 */
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
        this.framer = requestAnimationFrame(function () {
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

            this.framer = requestAnimationFrame(function () {
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
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = gameObject.renderer.images[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var img = _step2.value;

                    var x1y1 = _types.Vector2.minus(gameObject.transform.position, gameObject.transform.anchor);
                    var x2y2 = _types.Vector2.add(x1y1, new _types.Vector2({ x: img.rect.x, y: img.rect.y }));
                    this.context.save();
                    this.context.translate(gameObject.transform.position.x, gameObject.transform.position.y);
                    this.context.rotate(gameObject.transform.rotation * Math.PI / 180);
                    this.context.drawImage(img.image, -gameObject.transform.anchor.x, -gameObject.transform.anchor.y, img.rect.width, img.rect.height);
                    this.context.restore();
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Camera = __webpack_require__(8);

var _Camera2 = _interopRequireDefault(_Camera);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _Frame = __webpack_require__(20);

var _Frame2 = _interopRequireDefault(_Frame);

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
        this.frame = new _Frame2.default({ scene: this });
        this.gameObjectStore = (0, _store2.default)(this)('gameObject');
    }

    _createClass(Scene, [{
        key: 'addGameObjects',
        value: function addGameObjects() {
            for (var _len = arguments.length, gameObjects = Array(_len), _key = 0; _key < _len; _key++) {
                gameObjects[_key] = arguments[_key];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = gameObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var gameObject = _step.value;

                    gameObject instanceof _Camera2.default && this.camera.push(gameObject);
                    gameObject.setScene({ scene: this });
                    this.gameObjects.push(gameObject);
                    this.gameObjectStore.push(gameObject);
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
    }]);

    return Scene;
}();

exports.default = Scene;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isCollsion = isCollsion;
exports.isPointCollsion = isPointCollsion;
exports.isPointRectCollsion = isPointRectCollsion;

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

    var x2y2 = _types.Vector2.minus(gameObject.transform.position, gameObject.transform.anchor);
    var x2 = x2y2.x;
    var y2 = x2y2.y;
    var w = gameObject.transform.rect.width;
    var h = gameObject.transform.rect.height;

    if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
        return true;
    }
    return false;
}

function isPointRectCollsion(point, rect) {
    var x1 = point.x;
    var y1 = point.y;
    var x2 = rect.x;
    var y2 = rect.y;
    var w = rect.width;
    var h = rect.height;

    if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
        return true;
    }
    return false;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frame = function () {
    function Frame(_ref) {
        var _this = this;

        var scene = _ref.scene;

        _classCallCheck(this, Frame);

        this.scene = scene;
        this.componentStore = (0, _store2.default)(scene)('component');
        this.gameObjectStore = (0, _store2.default)(scene)('gameObject');
        this.sceneStartTime = performance.now();
        this.lastFrameTime = performance.now();
        this.frameCount = 0;
        requestAnimationFrame(function () {
            return _this.frame();
        });
    }

    _createClass(Frame, [{
        key: 'frame',
        value: function frame() {
            var _this2 = this;

            var components = this.componentStore.getAll();
            var gameObjects = this.gameObjectStore.getAll();
            var currentTime = performance.now();
            var e = {
                deltaTime: (currentTime - this.lastFrameTime) / 1000,
                frameCount: this.frameCount,
                time: (currentTime - this.sceneStartTime) / 1000
            };

            this.lastFrameTime = performance.now();
            this.frameCount++;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = gameObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var gameObject = _step.value;

                    gameObject.renderer.images = [];
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

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var component = _step2.value;

                    if (component.targetObject && component.active == true) {
                        component.preUpdate && component.preUpdate(e);
                    }
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

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = components[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _component = _step3.value;

                    if (_component.targetObject && _component.active == true) {
                        _component.update && _component.update(e);
                    }
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

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = components[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _component2 = _step4.value;

                    if (_component2.targetObject && _component2.active == true) {
                        _component2.lateUpdate && _component2.lateUpdate(e);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            requestAnimationFrame(function () {
                return _this2.frame();
            });
        }
    }]);

    return Frame;
}();

exports.default = Frame;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GameObject2 = __webpack_require__(3);

var _GameObject3 = _interopRequireDefault(_GameObject2);

var _Touch = __webpack_require__(7);

var _Touch2 = _interopRequireDefault(_Touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchObject = function (_GameObject) {
    _inherits(TouchObject, _GameObject);

    function TouchObject(_ref) {
        var canvas = _ref.canvas;

        _classCallCheck(this, TouchObject);

        return _possibleConstructorReturn(this, (TouchObject.__proto__ || Object.getPrototypeOf(TouchObject)).call(this, {
            name: 'touch',
            components: [{
                component: _Touch2.default,
                arguments: { canvas: canvas }
            }]
        }));
    }

    return TouchObject;
}(_GameObject3.default);

exports.default = TouchObject;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Engine = __webpack_require__(4);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 取出自己想要的类
// fetch needing class.
// const { Component, types: { Vector2 } } = Engine;
var Vector2 = _Engine.types.Vector2;

// 继承 Component 并且 export 
// extend Component and export it

var InputManager = function (_Component) {
    _inherits(InputManager, _Component);

    function InputManager(_ref) {
        var targetObject = _ref.targetObject,
            dir = _ref.dir,
            speed = _ref.speed;

        _classCallCheck(this, InputManager);

        var _this = _possibleConstructorReturn(this, (InputManager.__proto__ || Object.getPrototypeOf(InputManager)).call(this, {
            targetObject: targetObject
        }));

        _this.speed = 50;
        return _this;
    }

    _createClass(InputManager, [{
        key: 'update',
        value: function update(e) {
            var _conditions;

            this.input = (0, _Engine.findGameObject)({ name: 'input' }).input;
            var conditions = (_conditions = {}, _defineProperty(_conditions, _Engine.keyCode.W, new Vector2({ x: 0, y: -this.speed * e.deltaTime })), _defineProperty(_conditions, _Engine.keyCode.S, new Vector2({ x: 0, y: this.speed * e.deltaTime })), _defineProperty(_conditions, _Engine.keyCode.A, new Vector2({ x: -this.speed * e.deltaTime, y: 0 })), _defineProperty(_conditions, _Engine.keyCode.D, new Vector2({ x: this.speed * e.deltaTime, y: 0 })), _conditions);
            for (var condition in conditions) {
                if (this.input.getKey(condition)) {
                    this.move(conditions[condition]);
                }
            }

            if (this.input.getKeyDown(_Engine.keyCode.J)) {
                this.targetObject.transform.rotation = 45 + this.targetObject.transform.rotation;
            }
            if (this.input.getKeyUp(_Engine.keyCode.J)) {
                this.targetObject.transform.rotation = 45 + this.targetObject.transform.rotation;
            }
        }
    }, {
        key: 'move',
        value: function move(direction) {
            var position = this.targetObject.transform.position;
            this.targetObject.transform.position = Vector2.add(position, direction);
        }
    }]);

    return InputManager;
}(_Engine.Component);

exports.default = InputManager;

/***/ })
/******/ ]);