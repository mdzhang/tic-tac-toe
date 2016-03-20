/**
 * @file Board class represents a tic tac toe board
 * @author Michelle D. Zhang <zhang.michelle.d@gmail.com>
 */

'use strict';

var Tile  = require('./tile');

/**
 * Board class represents a tic tac toe board
 *
 * @constructor
 */
var Board = module.exports = function(boardWidth) {
  this._boardWidth = boardWidth;
  this._grid = _buildGrid(boardWidth);
  this._rows = this._getRows();
  this._columns = this._getColumns();
};

/**
 * Build the underlying n x n grid/matrix that represents this board
 *
 * @private
 * @param  {Number} n - integer; the generated grid will have dimensions n x n
 * @return {Object} - dictionary representing matrix
 */
function _buildGrid(n) {
  var grid = {};
  var x;
  var y;

  for (x = 0; x < n; x++) {
    grid[x] = {};

    for (y = 0; y < n; y++) {
      grid[x][y] = new Tile();
    }
  }

  return grid;
}

Board.prototype._getRows = function() {
  var rows = [];
  var row;
  var x;
  var y;
  var n = this._boardWidth;

  for (x = 0; x < n; x++) {
    row = [];

    for (y = 0; y < n; y++) {
      row.push(this._grid[x][y])
    }

    rows.push(row);
  }

  return rows;
};

Board.prototype._getColumns = function() {
  var columns = [];
  var column;
  var x;
  var y;
  var n = this._boardWidth;

  for (y = 0; y < n; y++) {
    column = [];

    for (x = 0; x < n; x++) {
      column.push(this._grid[x][y])
    }

    columns.push(column);
  }

  return columns;
};

function _rowIsLine(row) {
  return Boolean(row.map(function(tile) {
    return tile.getMark();
  })
  .reduce(function(prev, curr) {
    return prev === curr ? prev : false;
  }));
}

/** See if a player has completed an n-in-a-row line */
Board.prototype.hasLine = function() {
  return this._columns.concat(this._rows).map(function(row) {
    return _rowIsLine(row);
  }).indexOf(true) > -1;
};

Board.prototype.mark = function(player, coordinates) {
  this._grid[coordinates[0]][coordinates[1]].mark(player.getMark());
};

Board.prototype.toString = function() {
  return this._rows
    .map(function(row) {
      return row.map(function(tile) {
        return tile.toString();
      }).join(' ');
    })
    .join('\n');
};