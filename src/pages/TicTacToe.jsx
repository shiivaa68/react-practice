import { useState } from "react";
import "./TicTacToe.css";
import Player from "../components/componenttictac/Player";
import GameBoard from "../components/componenttictac/GameBoard";
import Log from "../components/componenttictac/Log";
import GameOver from "../components/componenttictac/GameOver";
import { WINNING_COMBINATIONS } from "../winner-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const TicTacToe = () => {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectsquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePLayer) =>
    //   currentActivePLayer === "X" ? "O" : "X"
    // );
    setGameTurns((preTurns) => {
      const currentPlayer = deriveActivePlayer(preTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <header>
        <img src="game-logo.png" alt="tic tac toa image " />
        <h2> react tic-tac-toe</h2>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="payer1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="player2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} />}
          <GameBoard
            onsSlectedSquare={handleSelectsquare}
            board={gameBoard}
            // activePlayerS mbol={activePlayer}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
};

export default TicTacToe;
