import { Outlet } from "react-router";
import Navbar from "../sections/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;