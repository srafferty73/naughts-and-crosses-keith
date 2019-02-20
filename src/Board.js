import React, { Component } from 'react';
import Square from './Square.js';

const Board = ({stateOfPlay, playMove}) => {

  // stateOfPlay

  return (
    <div className="board">
      <Square value={stateOfPlay[0]} index={0} playMove={playMove}/>
      <Square value={stateOfPlay[1]} index={1} playMove={playMove}/>
      <Square value={stateOfPlay[2]} index={2} playMove={playMove}/>

      <Square value={stateOfPlay[3]} index={3} playMove={playMove}/>
      <Square value={stateOfPlay[4]} index={4} playMove={playMove}/>
      <Square value={stateOfPlay[5]} index={5} playMove={playMove}/>
      
      <Square value={stateOfPlay[6]} index={6} playMove={playMove}/>
      <Square value={stateOfPlay[7]} index={7} playMove={playMove}/>
      <Square value={stateOfPlay[8]} index={8} playMove={playMove}/>
    </div>
  )

}

export default Board;