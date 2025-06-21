import { makeAutoObservable } from "mobx";

class GameStore {
  board = Array(9).fill(null);
  xIsNext = true;

  constructor() {
    makeAutoObservable(this);
  }

  get status() {
    const winner = this.calculateWinner();
    if (winner) return `Winner: ${winner}`;
    if (this.board.every(Boolean)) return "Draw!";
    return `Next player: ${this.xIsNext ? "X" : "O"}`;
  }

  makeMove(index) {
    if (this.board[index] || this.calculateWinner()) return;
    this.board[index] = this.xIsNext ? "X" : "O";
    this.xIsNext = !this.xIsNext;
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.xIsNext = true;
  }

  calculateWinner() {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a, b, c] of lines) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null;
  }
}

const gameStore = new GameStore();
export default gameStore;

