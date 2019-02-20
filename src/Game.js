import React, { Component } from 'react';
import Board from './Board.js';

class Game extends Component {

  constructor(props){
    super(props);
    this.winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
    this.state = {
      board:  ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'x'
    }

    this.playMove = this.playMove.bind(this);
  }

  playMove(index) {
    const newBoard = [...this.state.board];

    if(newBoard[index] === ''){
        newBoard[index] = this.state.currentPlayer;
        var newPlayer;

        if(this.state.currentPlayer === 'x'){
          newPlayer = 'o';
        }else{
          newPlayer = 'x';
        }

        this.setState( {
          board: newBoard,
          currentPlayer: newPlayer
        })

        this.winChecker();

    }
  }

  winChecker() {
    // Compare this.state.board
    // with this.winningCombos
  }

  render(){
    return (
      <div>
        <h1>Naughts & Crosses</h1>
        <Board stateOfPlay={this.state.board} playMove={this.playMove}/>
      </div>
      )
  }
}

export default Game;
