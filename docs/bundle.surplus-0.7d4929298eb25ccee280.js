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
/******/ 	return __webpack_require__(__webpack_require__.s = 198);
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_surplus__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_s_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microapps_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microapps_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microapps_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_name__ = __webpack_require__(13);






const nameService = __WEBPACK_IMPORTED_MODULE_3__services_name__["default"](localStorage)

const MicroappSelector = (props, children) => {
  return (function () {
          var __, __dt1, __dd2, __dd2_a1, __insert3;
          __ = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('dl');
          __dt1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('dt');
          __dt1.innerText = 'Choose Microapp:'
          __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __dt1);
          __dd2 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('dd');
          __dd2_a1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('a');
          __dd2_a1.href = "..";
          __dd2_a1.innerText = 'Root'
          __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__dd2, __dd2_a1);
          __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __dd2);
          __insert3 = __WEBPACK_IMPORTED_MODULE_0_surplus__["d" /* createTextNode */]('');
          __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __insert3);
          __WEBPACK_IMPORTED_MODULE_0_surplus__["a" /* S */](function (range) { return __WEBPACK_IMPORTED_MODULE_0_surplus__["e" /* insert */](range, Object.keys(__WEBPACK_IMPORTED_MODULE_2__microapps_json___default.a).map((slug) => {
      const name = __WEBPACK_IMPORTED_MODULE_2__microapps_json___default.a[slug]
      return slug === 'surplus-0'
        ? (function () {
                var __, __strong1, __strong1_insert1;
                __ = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('dd');
                __strong1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('strong');
                __strong1_insert1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["d" /* createTextNode */]('');
                __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__strong1, __strong1_insert1);
                __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __strong1);
                __WEBPACK_IMPORTED_MODULE_0_surplus__["e" /* insert */]({ start: __strong1_insert1, end: __strong1_insert1 }, name);
                return __;
            })()
        : (function () {
                var __, __a1, __a1_insert1;
                __ = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('dd');
                __a1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('a');
                __a1_insert1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["d" /* createTextNode */]('');
                __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__a1, __a1_insert1);
                __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __a1);
                __WEBPACK_IMPORTED_MODULE_0_surplus__["e" /* insert */]({ start: __a1_insert1, end: __a1_insert1 }, name);
                __a1.href = `../${slug}`;
                return __;
            })()
    })); }, { start: __insert3, end: __insert3 });
          return __;
      })()
}

const Name = (props) => {
  const {name, onchange} = props
  return (function () {
          var __;
          __ = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('input');
          __.type = "text";
          __WEBPACK_IMPORTED_MODULE_0_surplus__["a" /* S */](function () { __.value = name(); });
          __.onkeyup = onchange;
          return __;
      })()
}

const name = __WEBPACK_IMPORTED_MODULE_1_s_js__["a" /* default */].data(nameService.get() || '')

function changeName(e) {
  const {target: {value}} = e
  console.log(e)
  nameService.save(value)
  name(value)
}

const root = __WEBPACK_IMPORTED_MODULE_1_s_js__["a" /* default */].root(() => (function () {
        var __, __MicroappSelector1, __p2, __p2_a2, __p3, __p3_Name2;
        __ = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('div');
        __MicroappSelector1 = __WEBPACK_IMPORTED_MODULE_0_surplus__["d" /* createTextNode */]('');
        __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __MicroappSelector1);
        __p2 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('p');
        __p2.innerText = 'This is a '
        __p2_a2 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('a');
        __p2_a2.href = "https://github.com/adamhaile/surplus";
        __p2_a2.innerText = 'Surplus'
        __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__p2, __p2_a2);
        __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__p2, __WEBPACK_IMPORTED_MODULE_0_surplus__["d" /* createTextNode */](' 0 Microapp.'));
        __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __p2);
        __p3 = __WEBPACK_IMPORTED_MODULE_0_surplus__["c" /* createElement */]('p');
        __p3.innerText = 'Tell me your name and I\'ll remember it between Microapps: '
        __p3_Name2 = __WEBPACK_IMPORTED_MODULE_0_surplus__["d" /* createTextNode */]('');
        __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__p3, __p3_Name2);
        __WEBPACK_IMPORTED_MODULE_0_surplus__["b" /* appendChild */](__, __p3);
        __WEBPACK_IMPORTED_MODULE_0_surplus__["a" /* S */](function (range) { return __WEBPACK_IMPORTED_MODULE_0_surplus__["e" /* insert */](range, MicroappSelector({
    
    children: [
        
    ]})); }, { start: __MicroappSelector1, end: __MicroappSelector1 });
        __WEBPACK_IMPORTED_MODULE_0_surplus__["a" /* S */](function (range) { return __WEBPACK_IMPORTED_MODULE_0_surplus__["e" /* insert */](range, Name({
    name: name,
    onchange: changeName,
    children: [
        
    ]})); }, { start: __p3_Name2, end: __p3_Name2 });
        return __;
    })())
document.getElementById('surplus-entry').appendChild(root)


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = insert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Surplus__ = __webpack_require__(86);

var DOCUMENT_FRAGMENT_NODE = 11, TEXT_NODE = 3;
function insert(range, value) {
    var parent = range.start.parentNode, test = range.start, good = null, t = typeof value;
    //if (parent === null) {
    //    throw new Error("Surplus.insert() can only be used on a node that has a parent node. \n"
    //        + "Node ``" + range.start + "'' is currently unattached to a parent.");
    //}
    //if (range.end.parentNode !== parent) {
    //    throw new Error("Surplus.insert() requires that the inserted nodes remain sibilings \n"
    //        + "of the original node.  The DOM has been modified such that this is \n"
    //        + "no longer the case.");
    //}
    if (t === 'string' || t === 'number' || t === 'boolean') {
        value = value.toString();
        if (test.nodeType === TEXT_NODE) {
            test.data = value;
            good = test;
        }
        else {
            value = document.createTextNode(value);
            parent.replaceChild(value, test);
            if (range.end === test)
                range.end = value;
            range.start = good = value;
        }
    }
    else if (value instanceof Node) {
        if (test !== value) {
            parent.replaceChild(value, test);
            if (range.end === test)
                range.end = value;
            range.start = value;
        }
        good = value;
    }
    else if (value instanceof Array) {
        insertArray(value);
    }
    else if (value instanceof Function) {
        __WEBPACK_IMPORTED_MODULE_0__Surplus__["a" /* S */](function () {
            insert(range, value());
        });
        good = range.end;
    }
    else if (value !== null && value !== undefined) {
        value = value.toString();
        if (test.nodeType === TEXT_NODE) {
            test.data = value;
            good = test;
        }
        else {
            value = document.createTextNode(value);
            parent.replaceChild(value, test);
            if (range.end === test)
                range.end = value;
            range.start = good = value;
        }
    }
    if (good === null) {
        if (range.start === parent.firstChild && range.end === parent.lastChild && range.start !== range.end) {
            // fast delete entire contents
            parent.textContent = "";
            value = document.createTextNode("");
            parent.appendChild(value);
            good = range.start = range.end = value;
        }
        else if (test.nodeType === TEXT_NODE) {
            test.data = "";
            good = test;
        }
        else {
            value = document.createTextNode("");
            parent.replaceChild(value, test);
            if (range.end === test)
                range.end = value;
            range.start = good = value;
        }
    }
    // remove anything left after the good cursor from the insert range
    while (good !== range.end) {
        test = range.end;
        range.end = test.previousSibling;
        parent.removeChild(test);
    }
    return range;
    function insertArray(array) {
        for (var i = 0, len = array.length; i < len; i++) {
            var value = array[i];
            if (good === range.end) {
                if (value instanceof Node) {
                    good = range.end = (good.nextSibling ? parent.insertBefore(value, good.nextSibling) : parent.appendChild(value));
                }
                else if (value instanceof Array) {
                    insertArray(value);
                }
                else if (value !== null && value !== undefined) {
                    value = document.createTextNode(value.toString());
                    good = range.end = (good.nextSibling ? parent.insertBefore(value, good.nextSibling) : parent.appendChild(value));
                }
            }
            else {
                if (value instanceof Node) {
                    if (test !== value) {
                        if (good === null) {
                            if (range.end === value)
                                range.end = value.previousSibling;
                            parent.replaceChild(value, test);
                            range.start = value;
                            if (range.end === test)
                                range.end = value;
                            test = value.nextSibling;
                        }
                        else {
                            if (test.nextSibling === value && test !== value.nextSibling && test !== range.end) {
                                parent.removeChild(test);
                                test = value.nextSibling;
                            }
                            else {
                                if (range.end === value)
                                    range.end = value.previousSibling;
                                parent.insertBefore(value, test);
                            }
                        }
                    }
                    else {
                        test = test.nextSibling;
                    }
                    good = value;
                }
                else if (value instanceof Array) {
                    insertArray(value);
                }
                else if (value !== null && value !== undefined) {
                    value = value.toString();
                    if (test.nodeType === TEXT_NODE) {
                        test.data = value;
                        if (good === null)
                            range.start = test;
                        good = test, test = good.nextSibling;
                    }
                    else {
                        value = document.createTextNode(value);
                        parent.insertBefore(value, test);
                        if (good === null)
                            range.start = value;
                        good = value;
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createElement;
/* unused harmony export createComment */
/* harmony export (immutable) */ __webpack_exports__["c"] = createTextNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = appendChild;
function createElement(tag) {
    return document.createElement(tag);
}
function createComment(text) {
    return document.createComment(text);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function appendChild(parent, child) {
    parent.appendChild(child);
}


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__insert__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__insert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_s_js__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2_s_js__["a"]; });





/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Public interface
var S = function S(fn, value) {
    var owner = Owner, running = RunningNode;
    if (owner === null)
        console.warn("computations created without a root or parent will never be disposed");
    var node = new ComputationNode(fn, value);
    Owner = RunningNode = node;
    if (RunningClock === null) {
        toplevelComputation(node);
    }
    else {
        node.value = node.fn(node.value);
    }
    if (owner && owner !== UNOWNED) {
        if (owner.owned === null)
            owner.owned = [node];
        else
            owner.owned.push(node);
    }
    Owner = owner;
    RunningNode = running;
    return function computation() {
        if (RunningNode !== null) {
            if (node.age === RootClock.time) {
                if (node.state === RUNNING)
                    throw new Error("circular dependency");
                else
                    updateNode(node); // checks for state === STALE internally, so don't need to check here
            }
            logComputationRead(node, RunningNode);
        }
        return node.value;
    };
};
// compatibility with commonjs systems that expect default export to be at require('s.js').default rather than just require('s-js')
Object.defineProperty(S, 'default', { value: S });
/* harmony default export */ __webpack_exports__["a"] = (S);
S.root = function root(fn) {
    var owner = Owner, root = fn.length === 0 ? UNOWNED : new ComputationNode(null, null), result = undefined, disposer = fn.length === 0 ? null : function _dispose() {
        if (RunningClock !== null) {
            RootClock.disposes.add(root);
        }
        else {
            dispose(root);
        }
    };
    Owner = root;
    if (RunningClock === null) {
        result = topLevelRoot(fn, disposer, owner);
    }
    else {
        result = disposer === null ? fn() : fn(disposer);
        Owner = owner;
    }
    return result;
};
function topLevelRoot(fn, disposer, owner) {
    try {
        return disposer === null ? fn() : fn(disposer);
    }
    finally {
        Owner = owner;
    }
}
S.on = function on(ev, fn, seed, onchanges) {
    if (Array.isArray(ev))
        ev = callAll(ev);
    onchanges = !!onchanges;
    return S(on, seed);
    function on(value) {
        var running = RunningNode;
        ev();
        if (onchanges)
            onchanges = false;
        else {
            RunningNode = null;
            value = fn(value);
            RunningNode = running;
        }
        return value;
    }
};
function callAll(ss) {
    return function all() {
        for (var i = 0; i < ss.length; i++)
            ss[i]();
    };
}
S.data = function data(value) {
    var node = new DataNode(value);
    return function data(value) {
        if (arguments.length > 0) {
            if (RunningClock !== null) {
                if (node.pending !== NOTPENDING) {
                    if (value !== node.pending) {
                        throw new Error("conflicting changes: " + value + " !== " + node.pending);
                    }
                }
                else {
                    node.pending = value;
                    RootClock.changes.add(node);
                }
            }
            else {
                if (node.log !== null) {
                    node.pending = value;
                    RootClock.changes.add(node);
                    event();
                }
                else {
                    node.value = value;
                }
            }
            return value;
        }
        else {
            if (RunningNode !== null) {
                logDataRead(node, RunningNode);
            }
            return node.value;
        }
    };
};
S.value = function value(current, eq) {
    var data = S.data(current), age = 0;
    return function value(update) {
        if (arguments.length === 0) {
            return data();
        }
        else {
            var same = eq ? eq(current, update) : current === update;
            if (!same) {
                var time = RootClock.time;
                if (age === time)
                    throw new Error("conflicting values: " + update + " is not the same as " + current);
                age = time;
                current = update;
                data(update);
            }
            return update;
        }
    };
};
S.freeze = function freeze(fn) {
    var result = undefined;
    if (RunningClock !== null) {
        result = fn();
    }
    else {
        RunningClock = RootClock;
        RunningClock.changes.reset();
        try {
            result = fn();
            event();
        }
        finally {
            RunningClock = null;
        }
    }
    return result;
};
S.sample = function sample(fn) {
    var result, running = RunningNode;
    if (running !== null) {
        RunningNode = null;
        result = fn();
        RunningNode = running;
    }
    else {
        result = fn();
    }
    return result;
};
S.cleanup = function cleanup(fn) {
    if (Owner !== null) {
        if (Owner.cleanups === null)
            Owner.cleanups = [fn];
        else
            Owner.cleanups.push(fn);
    }
    else {
        console.warn("cleanups created without a root or parent will never be run");
    }
};
// Internal implementation
/// Graph classes and operations
var Clock = (function () {
    function Clock() {
        this.time = 0;
        this.changes = new Queue(); // batched changes to data nodes
        this.updates = new Queue(); // computations to update
        this.disposes = new Queue(); // disposals to run after current batch of updates finishes
    }
    return Clock;
}());
var DataNode = (function () {
    function DataNode(value) {
        this.value = value;
        this.pending = NOTPENDING;
        this.log = null;
    }
    return DataNode;
}());
var ComputationNode = (function () {
    function ComputationNode(fn, value) {
        this.fn = fn;
        this.value = value;
        this.state = CURRENT;
        this.source1 = null;
        this.source1slot = 0;
        this.count = 0;
        this.sources = null;
        this.sourceslots = null;
        this.log = null;
        this.owned = null;
        this.cleanups = null;
        this.age = RootClock.time;
    }
    return ComputationNode;
}());
var Log = (function () {
    function Log() {
        this.node1 = null;
        this.node1slot = 0;
        this.count = 0;
        this.nodes = null;
        this.nodeslots = null;
        this.freecount = 0;
        this.freeslots = null;
    }
    return Log;
}());
var Queue = (function () {
    function Queue() {
        this.items = [];
        this.count = 0;
    }
    Queue.prototype.reset = function () {
        this.count = 0;
    };
    Queue.prototype.add = function (item) {
        this.items[this.count++] = item;
    };
    Queue.prototype.run = function (fn) {
        var items = this.items;
        for (var i = 0; i < this.count; i++) {
            fn(items[i]);
            items[i] = null;
        }
        this.count = 0;
    };
    return Queue;
}());
// Constants
var NOTPENDING = {}, CURRENT = 0, STALE = 1, RUNNING = 2;
// "Globals" used to keep track of current system state
var RootClock = new Clock(), RunningClock = null, // currently running clock 
RunningNode = null, // currently running computation
Owner = null, // owner for new computations
UNOWNED = new ComputationNode(null, null);
// Functions
function logRead(from, to) {
    var fromslot, toslot = to.source1 === null ? -1 : to.count++;
    if (from.node1 === null) {
        from.node1 = to;
        from.node1slot = toslot;
        fromslot = -1;
    }
    else if (from.nodes === null) {
        from.nodes = [to];
        from.nodeslots = [toslot];
        from.count = 1;
        fromslot = 0;
    }
    else {
        fromslot = from.freecount !== 0 ? from.freeslots[--from.freecount] : from.count++,
            from.nodes[fromslot] = to;
        from.nodeslots[fromslot] = toslot;
    }
    if (to.source1 === null) {
        to.source1 = from;
        to.source1slot = fromslot;
    }
    else if (to.sources === null) {
        to.sources = [from];
        to.sourceslots = [fromslot];
        to.count = 1;
    }
    else {
        to.sources[toslot] = from;
        to.sourceslots[toslot] = fromslot;
    }
}
function logDataRead(data, to) {
    if (data.log === null)
        data.log = new Log();
    logRead(data.log, to);
}
function logComputationRead(node, to) {
    if (node.log === null)
        node.log = new Log();
    logRead(node.log, to);
}
function event() {
    // b/c we might be under a top level S.root(), have to preserve current root
    var owner = Owner;
    RootClock.updates.reset();
    RootClock.time++;
    try {
        run(RootClock);
    }
    finally {
        RunningClock = RunningNode = null;
        Owner = owner;
    }
}
function toplevelComputation(node) {
    RunningClock = RootClock;
    RootClock.changes.reset();
    RootClock.updates.reset();
    try {
        node.value = node.fn(node.value);
        if (RootClock.changes.count > 0 || RootClock.updates.count > 0) {
            RootClock.time++;
            run(RootClock);
        }
    }
    finally {
        RunningClock = Owner = RunningNode = null;
    }
}
function run(clock) {
    var running = RunningClock, count = 0;
    RunningClock = clock;
    clock.disposes.reset();
    // for each batch ...
    while (clock.changes.count !== 0 || clock.updates.count !== 0 || clock.disposes.count !== 0) {
        if (count > 0)
            clock.time++;
        clock.changes.run(applyDataChange);
        clock.updates.run(updateNode);
        clock.disposes.run(dispose);
        // if there are still changes after excessive batches, assume runaway            
        if (count++ > 1e5) {
            throw new Error("Runaway clock detected");
        }
    }
    RunningClock = running;
}
function applyDataChange(data) {
    data.value = data.pending;
    data.pending = NOTPENDING;
    if (data.log)
        markComputationsStale(data.log);
}
function markComputationsStale(log) {
    var node1 = log.node1, nodes = log.nodes, nodeslots = log.nodeslots, dead = 0, slot, nodeslot, node;
    // mark all downstream nodes stale which haven't been already
    if (node1 !== null)
        markNodeStale(node1);
    for (var i = 0; i < log.count; i++) {
        // compact log.nodes as we iterate through it
        node = nodes[i];
        if (node) {
            markNodeStale(node);
            if (dead) {
                slot = i - dead;
                nodeslot = nodeslots[i];
                nodes[i] = null;
                nodes[slot] = node;
                nodeslots[slot] = nodeslot;
                if (nodeslot === -1) {
                    node.source1slot = slot;
                }
                else {
                    node.sourceslots[nodeslot] = slot;
                }
            }
        }
        else {
            dead++;
        }
    }
    log.count -= dead;
    log.freecount = 0;
}
function markNodeStale(node) {
    var time = RootClock.time;
    if (node.age < time) {
        node.age = time;
        node.state = STALE;
        RootClock.updates.add(node);
        if (node.owned !== null)
            markOwnedNodesForDisposal(node.owned);
        if (node.log !== null)
            markComputationsStale(node.log);
    }
}
function markOwnedNodesForDisposal(owned) {
    for (var i = 0; i < owned.length; i++) {
        var child = owned[i];
        child.age = RootClock.time;
        child.state = CURRENT;
        if (child.owned !== null)
            markOwnedNodesForDisposal(child.owned);
    }
}
function updateNode(node) {
    if (node.state === STALE) {
        var owner = Owner, running = RunningNode;
        Owner = RunningNode = node;
        node.state = RUNNING;
        cleanup(node, false);
        node.value = node.fn(node.value);
        node.state = CURRENT;
        Owner = owner;
        RunningNode = running;
    }
}
function cleanup(node, final) {
    var source1 = node.source1, sources = node.sources, sourceslots = node.sourceslots, cleanups = node.cleanups, owned = node.owned, i;
    if (cleanups !== null) {
        for (i = 0; i < cleanups.length; i++) {
            cleanups[i](final);
        }
        node.cleanups = null;
    }
    if (owned !== null) {
        for (i = 0; i < owned.length; i++) {
            dispose(owned[i]);
        }
        node.owned = null;
    }
    if (source1 !== null) {
        cleanupSource(source1, node.source1slot);
        node.source1 = null;
    }
    for (i = 0; i < node.count; i++) {
        cleanupSource(sources[i], sourceslots[i]);
        sources[i] = null;
    }
    node.count = 0;
}
function cleanupSource(source, slot) {
    if (slot === -1) {
        source.node1 = null;
    }
    else {
        source.nodes[slot] = null;
        if (slot === source.count - 1) {
            source.count--;
        }
        else if (source.freeslots === null) {
            source.freeslots = [slot];
            source.freecount = 1;
        }
        else {
            source.freeslots[source.freecount++] = slot;
        }
    }
}
function dispose(node) {
    node.fn = null;
    node.log = null;
    cleanup(node, true);
}


/***/ })

/******/ });