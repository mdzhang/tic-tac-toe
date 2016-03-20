/**
 * @file Game class represents a game of tic tac toe
 * @author Michelle D. Zhang <zhang.michelle.d@gmail.com>
 */

'use strict';

var Player  = require('./player'),
    Board   = require('./board');

/**
 * Game class represents a game of tic tac toe
 *
 * @constructor
 */
var Game = module.exports = function(boardWidth) {
  this._board = new Board(boardWidth);
  this._players = [
    new Player('Player 1', Player.MARKS.X),
    new Player('Player 2', Player.MARKS.O)
  ];
  this._currentPlayerIndex = 0;
  this._gameEnded = false;
};

/** Get the player whose turn it currently is. */
Game.prototype._getCurrentPlayer = function() {
  return this._players[this._currentPlayerIndex];
};

/** Check whether the game has been one i.e. if a user has completed a line. */
Game.prototype._checkGameOver = function() {
  return this._board.hasLine();
};

/** Switch the current player to be the next player. */
Game.prototype._nextPlayer = function() {
  var nextPlayerIndex = this._currentPlayerIndex + 1;

  if (nextPlayerIndex === this._players.length) {
    nextPlayerIndex = 0;
  }

  this._currentPlayerIndex = nextPlayerIndex;
};

/** End this game. */
Game.prototype._endGame = function() {
  this._gameEnded = true;
};

/**
 * Mark the tile at the given coordinates for the current player.
 *
 * @param  {Array} coordinates - 2-element array corresponding to [x,y] location to mark on board
 */
Game.prototype.takeTurn = function(coordinates) {
  var player = this._getCurrentPlayer();
  this._board.mark(player, coordinates);
  if (this._checkGameOver()) {
    this._endGame();
  } else {
    this._nextPlayer();
  }
};

Game.prototype.printBoard = function() {
  console.log(this._board.toString());
}