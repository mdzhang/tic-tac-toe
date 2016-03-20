/**
 * @file Tile class represents a single tile on the tic tac toe board
 * @author Michelle D. Zhang <zhang.michelle.d@gmail.com>
 */

'use strict';

/**
 * Tile class represents a single tile on the tic tac toe board
 *
 * @constructor
 */
var Tile = module.exports = function() {
  this._mark = 0; // [-1, 0, 1]
};

Tile.prototype.mark = function(mark) {
  this._mark = mark;
};

Tile.prototype.getMark = function() {
  return this._mark;
};

Tile.prototype.toString = function() {
  return String(this._mark);
};