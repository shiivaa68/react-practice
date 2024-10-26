const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner}!</p>}
      {!winner && <p> It is draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
