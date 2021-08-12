"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPerson = createPerson;
exports.getPerson = getPerson;
exports.getOnePerson = getOnePerson;
exports.deletePerson = deletePerson;
exports.updatePerson = updatePerson;

var _express = require("express");

var _person = _interopRequireDefault(require("../models/person"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createPerson(_x, _x2) {
  return _createPerson.apply(this, arguments);
}

function _createPerson() {
  _createPerson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, fullname, birth, newPerson;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, fullname = _req$body.fullname, birth = _req$body.birth;
            _context.prev = 1;
            _context.next = 4;
            return _person["default"].create({
              fullname: fullname,
              birth: birth
            });

          case 4:
            newPerson = _context.sent;

            if (newPerson) {
              res.json({
                message: 'persona creada con exito',
                data: newPerson
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'error interno del servidor',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createPerson.apply(this, arguments);
}

function getPerson(_x3, _x4) {
  return _getPerson.apply(this, arguments);
}

function _getPerson() {
  _getPerson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var person;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _person["default"].findAll();

          case 3:
            person = _context2.sent;
            res.json({
              data: person
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: 'error interno del servidor',
              data: {}
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getPerson.apply(this, arguments);
}

function getOnePerson(_x5, _x6) {
  return _getOnePerson.apply(this, arguments);
}

function _getOnePerson() {
  _getOnePerson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, person;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _person["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            person = _context3.sent;
            res.json({
              data: person
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: 'error interno del servidor',
              data: {}
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOnePerson.apply(this, arguments);
}

function deletePerson(_x7, _x8) {
  return _deletePerson.apply(this, arguments);
}

function _deletePerson() {
  _deletePerson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, personDelete;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _person["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            personDelete = _context4.sent;
            res.json({
              message: 'datos eliminados correctamente',
              data: personDelete
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: 'error interno del servidor',
              data: {}
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deletePerson.apply(this, arguments);
}

function updatePerson(_x9, _x10) {
  return _updatePerson.apply(this, arguments);
}

function _updatePerson() {
  _updatePerson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, upPerson;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _person["default"].update(req.body, {
              where: {
                id: id
              }
            });

          case 4:
            upPerson = _context5.sent;
            res.json({
              message: 'datos actualizados correctamente',
              data: upPerson
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: 'error interno del servidor',
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _updatePerson.apply(this, arguments);
}