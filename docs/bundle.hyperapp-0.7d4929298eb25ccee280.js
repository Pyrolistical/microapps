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
/******/ 	__webpack_require__.p = "https://pyrolistical.github.io/microapps/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = {
	"angular-1": "Angular 1",
	"hyperapp-0": "Hyperapp 0",
	"react-15": "React 15",
	"surplus-0": "Surplus 0",
	"vue-2": "Vue 2"
};

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ((localStorage) => {
  const self = {
    save(name) {
      localStorage.setItem('name', name)
    },

    get() {
      return localStorage.getItem('name')
    }
  }

  return self
});


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h;
var i
var stack = []

function h(tag, props) {
  var node
  var children = []

  for (i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }

  while (stack.length) {
    if (Array.isArray((node = stack.pop()))) {
      for (i = node.length; i--; ) {
        stack.push(node[i])
      }
    } else if (node != null && node !== true && node !== false) {
      children.push(typeof node === "number" ? (node = node + "") : node)
    }
  }

  return typeof tag === "string"
    ? {
        tag: tag,
        props: props || {},
        children: children
      }
    : tag(props, children)
}


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(94);

var _microapps = __webpack_require__(12);

var _microapps2 = _interopRequireDefault(_microapps);

var _name = __webpack_require__(13);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nameService = (0, _name2.default)(localStorage);

var MicroappSelector = function MicroappSelector(props, children) {
  return (0, _hyperapp.h)(
    'dl',
    null,
    (0, _hyperapp.h)(
      'dt',
      null,
      'Choose Microapp:'
    ),
    (0, _hyperapp.h)(
      'dd',
      null,
      (0, _hyperapp.h)(
        'a',
        { href: '..' },
        'Root'
      )
    ),
    Object.keys(_microapps2.default).map(function (slug) {
      var name = _microapps2.default[slug];
      return slug === 'hyperapp-0' ? (0, _hyperapp.h)(
        'dd',
        null,
        (0, _hyperapp.h)(
          'strong',
          null,
          name
        )
      ) : (0, _hyperapp.h)(
        'dd',
        null,
        (0, _hyperapp.h)(
          'a',
          { href: '../' + slug },
          name
        )
      );
    })
  );
};

var Name = function Name(_ref, children) {
  var name = _ref.name,
      onChange = _ref.onChange;

  return (0, _hyperapp.h)('input', { type: 'text', value: name, onkeyup: onChange });
};

(0, _hyperapp.app)({
  state: {
    name: nameService.get() || ''
  },

  actions: {
    changeName: function changeName(state, actions, _ref2) {
      var name = _ref2.target.value;

      nameService.save(name);
      return {
        name: name
      };
    }
  },

  view: function view(state, actions) {
    return (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(MicroappSelector, null),
      (0, _hyperapp.h)(
        'p',
        null,
        'This is a ',
        (0, _hyperapp.h)(
          'a',
          { href: 'https://github.com/hyperapp/hyperapp' },
          'Hyperapp'
        ),
        ' 0 Microapp.'
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        'Tell me your name and I\'ll remember it between Microapps: ',
        (0, _hyperapp.h)(Name, { name: state.name, onChange: actions.changeName })
      )
    );
  },


  root: document.getElementById('hyperapp-entry')
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__h__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_1__app__["a"]; });




/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = app;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(51);


var lifecycleCallbackStack = []

function app(props) {
  var skipRender
  var appView = props.view
  var appState = props.state
  var appActions = {}
  var appRoot = props.root || document.body
  var element = appRoot.children[0]
  var node = hydrate(element, [].map)

  if (typeof props === "function") {
    return props(app)
  }

  requestRender(createActions(appActions, props.actions, []))

  return appActions

  function requestRender() {
    if (appView && !skipRender) {
      requestAnimationFrame(render, (skipRender = !skipRender))
    }
  }

  function render(cb) {
    element = patch(
      appRoot,
      element,
      node,
      (node = appView(appState, appActions)),
      (skipRender = !skipRender)
    )
    while ((cb = lifecycleCallbackStack.pop())) cb()
  }

  function hydrate(element, map) {
    return (
      element &&
      __WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */](
        element.tagName.toLowerCase(),
        {},
        map.call(element.childNodes, function(element) {
          return element.nodeType === 3
            ? element.nodeValue
            : hydrate(element, map)
        })
      )
    )
  }

  function createActions(actions, withActions, lastPath) {
    Object.keys(withActions || {}).map(function(name) {
      return typeof withActions[name] === "function"
        ? (actions[name] = function(data) {
            return typeof (data = withActions[name](
              getPath(lastPath, appState),
              getPath(lastPath, appActions),
              data
            )) === "function"
              ? data(update)
              : update(data)
          })
        : createActions(
            actions[name] || (actions[name] = {}),
            withActions[name],
            lastPath.concat(name)
          )
    })

    function update(withState) {
      if (typeof withState === "function") {
        return update(withState(getPath(lastPath, appState)))
      }
      if (
        withState &&
        (withState = setPath(
          lastPath,
          merge(getPath(lastPath, appState), withState),
          appState
        ))
      ) {
        requestRender((appState = withState))
      }
      return appState
    }
  }

  function set(prop, value, source) {
    var target = merge(source)
    target[prop] = value
    return target
  }

  function getPath(paths, source) {
    return paths.length === 0
      ? source
      : source && getPath(paths.slice(1), source[paths[0]])
  }

  function setPath(paths, value, source) {
    var name = paths[0]
    return paths.length === 0
      ? value
      : set(
          name,
          paths.length > 1
            ? setPath(
                paths.slice(1),
                value,
                source && name in source ? source[name] : {}
              )
            : value,
          source
        )
  }

  function merge(target, source) {
    var result = {}
    for (var i in target) {
      result[i] = target[i]
    }
    for (var i in source) {
      result[i] = source[i]
    }
    return result
  }

  function createElement(node, isSVG) {
    if (typeof node === "string") {
      var element = document.createTextNode(node)
    } else {
      var element = (isSVG = isSVG || node.tag === "svg")
        ? document.createElementNS("http://www.w3.org/2000/svg", node.tag)
        : document.createElement(node.tag)

      if (node.props && node.props.oncreate) {
        lifecycleCallbackStack.push(function() {
          node.props.oncreate(element)
        })
      }

      for (var i = 0; i < node.children.length; ) {
        element.appendChild(createElement(node.children[i++], isSVG))
      }

      for (var i in node.props) {
        setProp(element, i, node.props[i])
      }
    }
    return element
  }

  function setProp(element, name, value, oldValue) {
    if (name === "key") {
    } else if (name === "style") {
      for (var name in merge(oldValue, (value = value || {}))) {
        element.style[name] = value[name] || ""
      }
    } else {
      try {
        element[name] = value
      } catch (_) {}

      if (typeof value !== "function") {
        if (value) {
          element.setAttribute(name, value)
        } else {
          element.removeAttribute(name)
        }
      }
    }
  }

  function updateElement(element, oldProps, props) {
    for (var name in merge(oldProps, props)) {
      var value = props[name]
      var oldValue =
        name === "value" || name === "checked" ? element[name] : oldProps[name]

      if (value !== oldValue) {
        setProp(element, name, value, oldValue)
      }
    }

    if (props && props.onupdate) {
      lifecycleCallbackStack.push(function() {
        props.onupdate(element, oldProps)
      })
    }
  }

  function removeElement(parent, element, props) {
    if (
      props &&
      props.onremove &&
      typeof (props = props.onremove(element)) === "function"
    ) {
      props(remove)
    } else {
      remove()
    }

    function remove() {
      parent.removeChild(element)
    }
  }

  function getKey(node) {
    return node && (node = node.props) && node.key
  }

  function patch(parent, element, oldNode, node, isSVG, nextSibling) {
    if (oldNode == null) {
      element = parent.insertBefore(createElement(node, isSVG), element)
    } else if (node.tag != null && node.tag === oldNode.tag) {
      updateElement(element, oldNode.props, node.props)

      isSVG = isSVG || node.tag === "svg"

      var len = node.children.length
      var oldLen = oldNode.children.length
      var oldKeyed = {}
      var oldElements = []
      var keyed = {}

      for (var i = 0; i < oldLen; i++) {
        var oldElement = (oldElements[i] = element.childNodes[i])
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)

        if (null != oldKey) {
          oldKeyed[oldKey] = [oldElement, oldChild]
        }
      }

      var i = 0
      var j = 0

      while (j < len) {
        var oldElement = oldElements[i]
        var oldChild = oldNode.children[i]
        var newChild = node.children[j]

        var oldKey = getKey(oldChild)
        if (keyed[oldKey]) {
          i++
          continue
        }

        var newKey = getKey(newChild)

        var keyedNode = oldKeyed[newKey] || []

        if (null == newKey) {
          if (null == oldKey) {
            patch(element, oldElement, oldChild, newChild, isSVG)
            j++
          }
          i++
        } else {
          if (oldKey === newKey) {
            patch(element, keyedNode[0], keyedNode[1], newChild, isSVG)
            i++
          } else if (keyedNode[0]) {
            element.insertBefore(keyedNode[0], oldElement)
            patch(element, keyedNode[0], keyedNode[1], newChild, isSVG)
          } else {
            patch(element, oldElement, null, newChild, isSVG)
          }

          j++
          keyed[newKey] = newChild
        }
      }

      while (i < oldLen) {
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)
        if (null == oldKey) {
          removeElement(element, oldElements[i], oldChild.props)
        }
        i++
      }

      for (var i in oldKeyed) {
        var keyedNode = oldKeyed[i]
        var reusableNode = keyedNode[1]
        if (!keyed[reusableNode.props.key]) {
          removeElement(element, keyedNode[0], reusableNode.props)
        }
      }
    } else if (element && node !== element.nodeValue) {
      if (typeof node === "string" && typeof oldNode === "string") {
        element.nodeValue = node
      } else {
        element = parent.insertBefore(
          createElement(node, isSVG),
          (nextSibling = element)
        )
        removeElement(parent, nextSibling, oldNode.props)
      }
    }
    return element
  }
}


/***/ })

/******/ });