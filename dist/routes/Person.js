"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _person = require("../controller/person.controller");

var router = (0, _express.Router)();
router.post('/', _person.createPerson);
router.get('/', _person.getPerson);
router.get('/:id', _person.getOnePerson);
router["delete"]('/:id', _person.deletePerson);
router.put('/:id', _person.updatePerson);
var _default = router;
exports["default"] = _default;