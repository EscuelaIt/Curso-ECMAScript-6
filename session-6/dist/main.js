/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _card = __webpack_require__(1);

	var _card2 = _interopRequireDefault(_card);

	var _domain = __webpack_require__(2);

	var _domain2 = _interopRequireDefault(_domain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// TODO: Make a domain with use case mappings
	// Create a factory for use case, repository and PokemonEntity
	// Create Pokemon Entity
	// Create use case
	// Create Repository
	// Accesss pokemon api using promises
	// Map results into Pokemon Entities
	// Map Pokemon Entity Array to Card components
	var p = new _card2.default();

	document.body.appendChild(p.render());

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Card = function () {
	  function Card() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var title = _ref.title;
	    var description = _ref.description;
	    var imageUrl = _ref.imageUrl;

	    _classCallCheck(this, Card);

	    this._title = title;
	    this._description = description;
	    this._imageUrl = imageUrl;
	  }

	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      var div = document.createElement('div');
	      div.class = 'Card';
	      div.textContent = this._text;
	      return div;
	    }
	  }]);

	  return Card;
	}();

	;

	exports.default = Card;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pokemon = __webpack_require__(3);

	var _pokemon2 = _interopRequireDefault(_pokemon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pokedex = function () {
	  function Pokedex() {
	    _classCallCheck(this, Pokedex);

	    this._deps = new Map();

	    this._deps.set('pokemons_list_use_case', _pokemon2.default.pokemonsListUseCase());
	  }

	  _createClass(Pokedex, [{
	    key: 'get',
	    value: function get(key) {
	      if (this._deps.has(key)) return this._deps.get(key);
	      console.warn('Service ' + key + ' is not implemented in the current version of the domain');
	    }
	  }]);

	  return Pokedex;
	}();

	exports.default = new Pokedex();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PokemonFactory = function () {
	  function PokemonFactory() {
	    _classCallCheck(this, PokemonFactory);
	  }

	  _createClass(PokemonFactory, null, [{
	    key: "pokemonListUseCase",
	    value: function pokemonListUseCase() {
	      return new PokemonListUseCase(PokemonFactory.apiPokemonRepository());
	    }
	  }, {
	    key: "apiPokemonRepository",
	    value: function apiPokemonRepository() {
	      return new ApiPokemonRepository();
	    }
	  }]);

	  return PokemonFactory;
	}();

	exports.default = PokemonFactory;

/***/ }
/******/ ]);