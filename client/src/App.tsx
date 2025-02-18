import Navbar from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
