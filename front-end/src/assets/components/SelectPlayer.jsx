import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleAddPlayer from "../controller/handleAddPlayer";

export default function SelectPlayers() {
  const [players, setPlayers] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <input
        type="text"
        placeholder="number of players"
        onChange={(event) => setPlayers(event.target.value)}
      />
      <button onClick={() => handleAddPlayer(players, navigate)}>
        Continue
      </button>
    </>
  );
}
