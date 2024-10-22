import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditting] = useState(false);

  function handleEditClick() {
    setIsEditting((editing) => !editing);
    // setIsEditting(!isEditing);
  }
 

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = 'Edit'

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // btnCaption="Save"
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit "}</button>
    </li>
  );
};

export default Player;
