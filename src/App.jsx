import "../src/assets/css/App.css";
import Favorites from "../src/assets/Pages/Favourites";
import Home from "../src/assets/Pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "../src/assets/contexts/MovieContext";
import NavBar from "../src/assets/components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;