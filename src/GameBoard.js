import React from "react";
import { observer } from "mobx-react-lite";

const GameBoard = observer(({ store }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{store.status}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px", justifyContent: "center" }}>
        {store.board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => store.makeMove(idx)}
            style={{ width: "100px", height: "100px", fontSize: "2em" }}
          >
            {cell}
          </button>
        ))}
      </div>
      <br />
      <button onClick={() => store.resetGame()}>Reset</button>
    </div>
  );
});

export default GameBoard;

