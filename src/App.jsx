import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "./components/pages/HomePage";
import Placeholder from "./components/pages/Placeholder";
import PokemonDetail from "./features/pokemons/components/PokemonDetail";
import MainLayout from "./components/layout/MainLayout";
import { AnimatePresence } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/placeholder" element={<Placeholder />} />
        </Route>
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
