import { useState } from "react";

export default function Player({ initialPlayerName, playerSymbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(playerSymbol, playerName)
    }
  }

  function handleChange(event) {
    console.log(event.target);
    setPlayerName(event.target.value);
  }

  let playerNameTag = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerNameTag = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="Player">
        {playerNameTag}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
