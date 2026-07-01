import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import Placeholder from "./components/pages/Placeholder";
import PokemonDetail from "./components/pokemons/PokemonDetail";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/placeholder" element={<Placeholder />} />
      </Route>

      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
