import "./TicTacToe.css";
import Player from "../components/componenttictac/Player";

const TicTacToe = () => {
  return (
    <>
      <header>
        <img src="game-logo.png" alt="tic tac toa image " />
        <h2> react tic-tac-toe</h2>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="player1" symbol="X" />
            <Player name="player2" symbol="O" />
          </ol>
          game board
        </div>
        log
      </main>
    </>
  );
};

export default TicTacToe;
