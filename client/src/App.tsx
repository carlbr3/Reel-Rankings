import Navbar from "./components/Nav";
import Profile from "./components/Profile";
import Genres from "./pages/Genres";
import MyReelRanks from "./pages/MyReelRanks";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/genres/*" element={<Genres />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/reelranks/*" element={<MyReelRanks />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
