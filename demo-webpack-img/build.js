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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_vue_bower_components_vue_dist_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_vue_bower_components_vue_dist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__demo_vue_bower_components_vue_dist_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_css__);




new __WEBPACK_IMPORTED_MODULE_0__demo_vue_bower_components_vue_dist_vue___default.a({
  el: '#app',
  components: {
    app: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]
  },
  template: '<app />'
})

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, (function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : typeof val === 'object'
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    return childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'can only contain alphanumeric characters and the hyphen, ' +
        'and must start with a letter.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both microtasks and (macro) tasks.
  // In < 2.4 we used microtasks everywhere, but there are some scenarios where
  // microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using (macro) tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use microtask by default, but expose a way to force (macro) task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    macroTimerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (
    isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]'
  )) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function () {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine microtask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    microTimerFunc = function () {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a (macro) task instead of a microtask.
   */
  function withMacroTask (fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      try {
        return fn.apply(null, arguments)
      } finally {
        useMacroTask = false;    
      }
    })
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments)
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor,
    context
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }

        if (renderCompleted) {
          contexts.length = 0;
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$off(event[i], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break
          }
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, ("event handler for \"" + event + "\""));
          }
        }
      }
      return vm
    };
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    var slots = {};
    if (!children) {
      return slots
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  function resolveScopedSlots (
    fns, // see flow/vnode
    res
  ) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      parentVnode.data.scopedSlots || // has new scoped slots
      vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, (hook + " hook"));
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$1 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$1; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          if (!(key in hash) && !(camelizedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + camelizedKey)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () { return resolveSlots(children, parent); };

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified
  }

  function dedupe (latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res
    } else {
      return latest
    }
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.5.21';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */

  function baseWarn (msg) {
    console.error(("[Vue compiler]: " + msg));
  }

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
    el.plain = false;
  }

  function addAttr (el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    modifiers
  ) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
    el.plain = false;
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.'
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (name === 'click') {
      if (modifiers.right) {
        name = 'contextmenu';
        delete modifiers.right;
      } else if (modifiers.middle) {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = {
      value: value.trim()
    };
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead."
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.'
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally'
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  function add$1 (
    event,
    handler,
    capture,
    passive
  ) {
    handler = withMacroTask(handler);
    target$1.addEventListener(
      event,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    event,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      event,
      handler._withTask || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.lazy) {
        // inputs with lazy should only be updated when not in focus
        return false
      }
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else if (
          isChrome
        ) {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.'
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.'
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag.")
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;



  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function closeElement (element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start (tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.'
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints (el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce(
                "Cannot use <" + (el.tag) + "> as component root element because it may " +
                'contain multiple nodes.'
              );
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce(
                'Cannot use v-for on stateful component root element because ' +
                'it renders multiple elements.'
              );
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce(
              "Component template should contain exactly one root element. " +
              "If you are using v-if on multiple elements, " +
              "use v-else-if to chain them instead."
            );
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) { // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end () {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        closeElement(element);
      },

      chars: function chars (text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.'
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored.")
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        text = inPre || text.trim()
          ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
          // only preserve whitespace if its not right after a starting tag
          : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var res;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment (text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.");
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys."
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp)
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if."
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored."
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead."
        );
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if (slotScope) {
          warn$2(
            "the \"scope\" attribute for scoped slots have been deprecated and " +
            "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
            "can also be used on plain elements in addition to <template> to " +
            "denote scoped slots.",
            true
          );
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
        /* istanbul ignore if */
        if (el.attrsMap['v-for']) {
          warn$2(
            "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
            "(v-for takes higher priority). Use a wrapper <template> for the " +
            "scoped slot to make it clearer.",
            true
          );
        }
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                genAssignmentCode(value, "$event")
              );
            }
          }
          if (isProp || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.'
            );
          }
        }
        addAttr(el, name, JSON.stringify(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead."
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
    }
    return res.slice(0, -1) + '}'
  }

  function genHandler (
    name,
    handler
  ) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. "
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + (genProps(el.attrs)) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + (genProps(el.props)) + "},";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    slots,
    state
  ) {
    return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
        return genScopedSlot(key, slots[key], state)
      }).join(',')) + "])")
  }

  function genScopedSlot (
    key,
    el,
    state
  ) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state)
    }
    var fn = "function(" + (String(el.slotScope)) + "){" +
      "return " + (el.tag === 'template'
        ? el.if
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    return ("{key:" + key + ",fn:" + fn + "}")
  }

  function genForScopedSlot (
    key,
    el,
    state
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + (genScopedSlot(key, el, state)) +
      '})'
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      /* istanbul ignore if */
      {
        res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
      }
    }
    return res.slice(0, -1)
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors
  }

  function checkNode (node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), errors);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), errors);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent (exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    }
    checkExpression(exp, text, errors);
  }

  function checkFor (node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    errors
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
      }
    }
  }

  function checkExpression (exp, text, errors) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
        );
      } else {
        errors.push(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n"
        );
      }
    }
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_png__);


/* harmony default export */ __webpack_exports__["a"] = ({
  template: `<div>
    <img :src="imgSrc" />
  </div>`,
  data() {
    return {
      imgSrc: __WEBPACK_IMPORTED_MODULE_0__img_png___default.a
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAEvCAIAAAASCIWjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMEUzNTRBNzA4QUUxMUU5OURBMzlEODI2REEwMTI2MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMEUzNTRBODA4QUUxMUU5OURBMzlEODI2REEwMTI2MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwRTM1NEE1MDhBRTExRTk5REEzOUQ4MjZEQTAxMjYxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMwRTM1NEE2MDhBRTExRTk5REEzOUQ4MjZEQTAxMjYxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D25JvgAFanNJREFUeNrsvGeQLFl2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"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!./node_modules/css-loader/dist/cjs.js!./main.css", function() {
		var newContent = require("!!./node_modules/css-loader/dist/cjs.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, "body {\r\n  background: red;\r\n  color: #fff;\r\n}\r\ndiv {\r\n  background: green;\r\n  color: yellowgreen;\r\n}", ""]);



/***/ }),
/* 10 */
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
      } else {
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
        } else if (mediaQuery) {
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
/* 11 */
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

var	fixUrls = __webpack_require__(12);

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
	if (false) {
		return null;
	}

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
/* 12 */
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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);