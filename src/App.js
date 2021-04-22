import React, { Component } from "react";
import "./App.css";
import Status from "./Components/Status";

class App extends Component {
  state = {
    board: Array(9).fill(null),
    player: null,
    winner: null,
  };

  checkWinner = () => {
    let winlines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],

      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],

      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    this.checkMatch(winlines);
  };

  checkMatch = (winlines) => {
    for (let index = 0; index < winlines.length; index++) {
      const [a, b, c] = winlines[index];
      let board = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        //alert("You Won");
        this.setState({
          winner: this.state.player,
        });
      }
    }
  };
  handleClick = (index) => {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;

      if (this.state.board[index] === null && !this.state.winner) {
        newBoard[index] = this.state.player;
        let newPlayer = this.state.player === "X" ? "O" : "X";
        this.setState({
          board: newBoard,
          player: newPlayer,
        });
      }

      this.checkWinner();
    }
  };
  setPlayer = (player) => {
    this.setState({
      player,
    });
  };

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  }
  reset = () => {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Status
          winner={this.state.winner}
          player={this.state.player}
          setPlayer={(e) => this.setPlayer(e)}
        />
        <div className="board">{this.renderBoxes()}</div>
        <button
          className="reset"
          disabled={!this.state.winner}
          onClick={() => this.reset()}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
