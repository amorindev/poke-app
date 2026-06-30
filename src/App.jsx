import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/sections/Navbar";
import Placeholder from "./components/pages/Placeholder";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 ">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/placeholder" element={<Placeholder />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
