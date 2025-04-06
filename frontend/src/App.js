import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Starting from "./components/Starting/Starting";
import { useEffect, useState } from "react";
import Musics from "./pages/Musics/Musics";
import Player from "./pages/Musics/Player";

function App() {
  const [starting, setStarting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStarting(false);
    }, 4000);
  }, [starting]);

  return (
    <div className="Container">
      {starting && <Starting />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/musics/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
