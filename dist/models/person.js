"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Person = _database.sequelize.define('personas', {
  fullname: {
    type: _sequelize["default"].STRING
  },
  birth: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

var _default = Person;
exports["default"] = _default;