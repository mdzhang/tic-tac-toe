/**
 * @file Player class represents a single player in a tic tac toe game
 * @author Michelle D. Zhang <zhang.michelle.d@gmail.com>
 */

'use strict';

/**
 * Player class represents a single player in a tic tac toe game
 *
 * @constructor
 */
var Player = module.exports = function(name, mark) {
  this._name = name;
  this._mark = mark; // [-1, 1]
};

Player.MARKS = {
  X: -1,
  O: 1
};

Player.prototype.getMark = function() {
  return this._mark;
};