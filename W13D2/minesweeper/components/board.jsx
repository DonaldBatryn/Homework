// import * as Minesweeper from '../minesweeper.js';
import Tile from './tile';
import React from 'react';

class Board extends React.Component {
  constructor (props){
    super(props);
    this.props = props
    this.board = this.props.board
  
  }

  render() {
 
    const mappedGrid = this.props.board.grid.map(row => row = `<div>${row}</div>`)
    return (
      <div>
        <h1>M I N E S W E E P E R</h1>
       {
        this.props.board.grid.map((renderedRow, rowIdx) => {
          return ( 
            <div className='row' key={rowIdx} >
            {renderedRow.map((tile, tileIdx) => {
              return (
                <Tile key={tileIdx} tile={tile} updateGame={this.props.updateGame} board={this.props.board} /> 
                    )
              })
            } 
            </div>
                )
          })
        }
      </div>
    )
  }
}

export default Board;

