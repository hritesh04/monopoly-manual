import axios from "axios";
import { Navigate } from "react-router-dom";
const handleAddPlayer = async (players, navigate) => {
  await axios.put(
    "http://localhost:3000/",
    {},
    {
      headers: {
        players,
      },
    }
  );
  navigate("/dashboard");
};

export default handleAddPlayer;
