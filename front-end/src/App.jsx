import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SelectPlayer from "./assets/components/SelectPlayer";
import Dashboard from "./assets/components/Dashboard";

function App() {
  const [players, setPlayers] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectPlayer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
