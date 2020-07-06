/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: lastPageYOffset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastPageYOffset", function() { return lastPageYOffset; });
var vars = {};
var lastPageYOffset = null;
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.$siteContainer = $('.site-container');
vars.$preloader = $('.preloader');
vars.$header = $('.header');

vars.isMobile = function () {
  return innerWidth <= 1024;
};

vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};

vars.winWidth = window.innerWidth;
var debounced = [];

var cancelFunc = function cancelFunc(timeout) {
  return function () {
    clearTimeout(timeout);
  };
};

vars.debounce = function (fn, wait) {
  var d = debounced.find(function (_ref) {
    var funcString = _ref.funcString;
    return funcString === fn.toString();
  });

  if (d) {
    d.cancel();
  } else {
    d = {};
    debounced.push(d);
  }

  d.func = fn;
  d.funcString = fn.toString();

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  d.timeout = setTimeout.apply(void 0, [fn, wait].concat(args));
  d.cancel = cancelFunc(d.timeout);
};

vars.saveScrollPosition = function () {
  vars.$html.css('scroll-behavior', 'initial');
  lastPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
};

vars.restoreScrollPosition = function () {
  if (lastPageYOffset !== null) {
    window.scrollTo(window.pageXOffset, lastPageYOffset);
    lastPageYOffset = null;
    vars.$html.css('scroll-behavior', '');
  }
}; // smooth scrolling


vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').animate({
    scrollTop: "".concat($container.offset().top + offset)
  }, time);
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, time + 100);
};

var scrollDiv;

vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.clientWidth;

  if (width) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

function hasHoverSupport() {
  var hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}

function resize() {
  vars.debounce(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _modules_bg_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bg/_background */ "./src/js/modules/bg/_background.js");
/* harmony import */ var _modules_textScrumble_textScrumble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/textScrumble/_textScrumble */ "./src/js/modules/textScrumble/_textScrumble.js");
/* harmony import */ var _modules_about_aboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about/_aboutMe */ "./src/js/modules/about/_aboutMe.js");
/* harmony import */ var _modules_works_works__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/works/_works */ "./src/js/modules/works/_works.js");






window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_bg_background__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_textScrumble_textScrumble__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_about_aboutMe__WEBPACK_IMPORTED_MODULE_4__["default"])('.header__items', '.helloText', '.about', '.works', '.sertify', '.contact');
  Object(_modules_works_works__WEBPACK_IMPORTED_MODULE_5__["default"])('.works__img');
});

/***/ }),

/***/ "./src/js/modules/about/_aboutMe.js":
/*!******************************************!*\
  !*** ./src/js/modules/about/_aboutMe.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textScrumble_textScrumble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../textScrumble/_textScrumble */ "./src/js/modules/textScrumble/_textScrumble.js");


function about(triggerBtn, mainScreen, sectionAbout, sectionWorks, sectionSertify, sectionContact) {
  var btn = document.querySelectorAll(triggerBtn);
  var main = document.querySelector(mainScreen);
  var about = document.querySelector(sectionAbout);
  var works = document.querySelector(sectionWorks);
  var setr = document.querySelector(sectionSertify);
  var contact = document.querySelector(sectionContact);
  toggleDisplay(about, 'none');
  toggleDisplay(works, 'none');
  toggleDisplay(setr, 'none');
  toggleDisplay(contact, 'none');

  function toggleDisplay(selector, display) {
    selector.style.display = display;
  }

  function showElemet(attr) {
    toggleDisplay(main, 'none');

    if (attr == 'about') {
      toggleDisplay(about, '');
      toggleDisplay(works, 'none');
      toggleDisplay(setr, 'none');
      toggleDisplay(contact, 'none');
    } else if (attr == 'works') {
      toggleDisplay(works, '');
      toggleDisplay(about, 'none');
      toggleDisplay(setr, 'none');
      toggleDisplay(contact, 'none');
    } else if (attr == 'setrify') {
      toggleDisplay(setr, '');
      toggleDisplay(works, 'none');
      toggleDisplay(about, 'none');
      toggleDisplay(contact, 'none');
    } else if (attr == 'contacts') {
      toggleDisplay(contact, '');
      toggleDisplay(setr, 'none');
      toggleDisplay(works, 'none');
      toggleDisplay(about, 'none');
    } else if (attr == 'main') {
      toggleDisplay(main, '');
      toggleDisplay(works, 'none');
      toggleDisplay(about, 'none');
      toggleDisplay(setr, 'none');
      toggleDisplay(contact, 'none');
    }
  }

  btn.forEach(function (i) {
    i.addEventListener('click', function (e) {
      if (e.target.getAttribute('id') != 'main') {
        Object(_textScrumble_textScrumble__WEBPACK_IMPORTED_MODULE_0__["plusIndex"])(1);
        showElemet(e.target.getAttribute('id'));
      } else {
        Object(_textScrumble_textScrumble__WEBPACK_IMPORTED_MODULE_0__["plusIndex"])(0);
        showElemet(e.target.getAttribute('id'));
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/js/modules/bg/_background.js":
/*!******************************************!*\
  !*** ./src/js/modules/bg/_background.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var background = function background() {
  VANTA.TOPOLOGY({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1,
    scaleMobile: 1.00
  });
};

/* harmony default export */ __webpack_exports__["default"] = (background);

/***/ }),

/***/ "./src/js/modules/textScrumble/_textScrumble.js":
/*!******************************************************!*\
  !*** ./src/js/modules/textScrumble/_textScrumble.js ***!
  \******************************************************/
/*! exports provided: plusIndex, showIndex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plusIndex", function() { return plusIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showIndex", function() { return showIndex; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var TextScramble = /*#__PURE__*/function () {
  function TextScramble(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TextScramble);

    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TextScramble, [{
    key: "setText",
    value: function setText(newText) {
      var _this = this;

      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) {
        return _this.resolve = resolve;
      });
      this.queue = [];

      for (var i = 0; i < length; i++) {
        var from = oldText[i] || '';
        var to = newText[i] || '';
        var start = Math.floor(Math.random() * 40);
        var end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from: from,
          to: to,
          start: start,
          end: end
        });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  }, {
    key: "update",
    value: function update() {
      var output = '';
      var complete = 0;

      for (var i = 0, n = this.queue.length; i < n; i++) {
        var _this$queue$i = this.queue[i],
            from = _this$queue$i.from,
            to = _this$queue$i.to,
            start = _this$queue$i.start,
            end = _this$queue$i.end,
            _char = _this$queue$i["char"];

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!_char || Math.random() < 0.28) {
            _char = this.randomChar();
            this.queue[i]["char"] = _char;
          }

          output += "<span class=\"dud\">".concat(_char, "</span>");
        } else {
          output += from;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }, {
    key: "randomChar",
    value: function randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }]);

  return TextScramble;
}();

var phrases = ['HELLO, wellcome to my site!', 'I am Sergey Mykhailychenko'];
var el = document.querySelector('.helloText__text');
var fx = new TextScramble(el);
var counter = 0;
var showIndex = 0;

function plusIndex(i) {
  showIndex = i;
  next();
}

function next() {
  if (showIndex === 0) {
    fx.setText(phrases[counter]).then(function () {
      setTimeout(next, 3000);
    });
    counter = (counter + 1) % phrases.length;
  } else {
    return false;
  }
}

function init() {
  next();
  plusIndex(0);
}


/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./src/js/modules/works/_works.js":
/*!****************************************!*\
  !*** ./src/js/modules/works/_works.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var works = function works(images) {
  var img = document.querySelectorAll(images);

  function eventClickNewElem(before, after, i) {
    before.addEventListener('click', function () {
      var shadowWrapper = document.createElement('div');
      var zoomImg = document.createElement('img');
      var srcImg = i.firstChild.firstChild;
      document.querySelector('#background').appendChild(shadowWrapper);
      shadowWrapper.style.cssText = "\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tbackground-color: rgba(0, 0, 0, .7);\n\t\t\t\tposition: absolute;\t\n\t\t\t\ttop: 0px;\n\t\t\t\tz-index: 100;\t\n\t\t\t";
      shadowWrapper.classList.add('animate__animated', 'animate__fadeIn');
      shadowWrapper.appendChild(zoomImg);
      zoomImg.classList.add('animate__animated', 'animate__fadeIn');
      zoomImg.setAttribute("src", srcImg.getAttribute('src'));

      if (window.matchMedia("max-width: 768px)")) {
        zoomImg.style.cssText = "\n\t\t\t\tmax-width: 100%;\n\t\t\t\tmax-height: 80%;\n\t\t\t";
      } else {
        zoomImg.style.cssText = "\n\t\t\t\twidth: 70vw;\n\t\t\t\theight: 90vh;\n\t\t\t";
      }

      shadowWrapper.addEventListener('click', function () {
        shadowWrapper.remove();
        zoomImg.remove();
      });
    });
    after.addEventListener('click', function () {
      var urlSite = i.firstChild;

      if (urlSite.getAttribute('href') == "#") {
        var siteModalWrapper = document.createElement('div');
        var siteModal = document.querySelector('.works__modal');
        document.querySelector('.container').insertBefore(siteModalWrapper, siteModal);
        siteModalWrapper.style.cssText = "\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100vh;\n\t\t\t\t\tbackground-color: rgba(0, 0, 0, .7);\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0px;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\tz-index: 1;\t\n\t\t\t\t\t";
        siteModal.style.display = 'flex';
        siteModalWrapper.classList.add('animate__animated', 'animate__fadeIn');
        siteModal.classList.add('animate__animated', 'animate__fadeIn');
        siteModalWrapper.addEventListener('click', function () {
          siteModalWrapper.remove();
          siteModal.style.display = 'none';
          siteModal.classList.remove('animate__fadeIn');
        });
      } else {
        urlSite.click();
      }
    });
  }

  function showNewElements(selector) {
    selector.addEventListener('mouseover', function () {
      selector.style.opacity = '1';
    });
    selector.addEventListener('mouseout', function () {
      selector.style.opacity = '0';
    });
  }

  function createNewElemets() {
    img.forEach(function (i) {
      var before = document.createElement('div');
      before.classList.add('works__img_before');
      var after = document.createElement('div');
      after.classList.add('works__img_after');
      i.appendChild(before);
      i.appendChild(after);
      showNewElements(before);
      showNewElements(after);
      eventClickNewElem(before, after, i);
    });
  }

  createNewElemets();
};

/* harmony default export */ __webpack_exports__["default"] = (works);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map