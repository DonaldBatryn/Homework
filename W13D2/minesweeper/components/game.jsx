import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from './board'
import Tile from './tile'

export default class Game extends React.Component {
  constructor() {
    super();
    const newBoard = new Minesweeper.Board(5, 4);
    this.state = {
      board: newBoard
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, altKeyBool){
    if (altKeyBool === true){
      // flag
      tile.toggleFlag();
    } else {
      //explore
      tile.explore();
    }
    this.setState({board: this.state.board})
    
    if (this.state.board.won()){
      alert("You Rawk Dude")
    } else if (this.state.board.lost()){
      // map through all bombs and show them
        // let winLose = true;
      this.render()
      window.setTimeout(alert("Better Luck Next Time... ;)"), 1000)
    }
  }

  render() {
    // const board = this.state;
    // idk about Minesweeper.Board 
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}