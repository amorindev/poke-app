import { NavLink } from "react-router";

const linkBase =
  "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl gap-4 px-4 py-4 flex-col sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-black leading-tight">React Demo</p>
          <p className="text-xs font-medium text-slate-500">
            PokeAPI and JSONPlaceholder
          </p>
        </div>
        <div className="flex gap-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`
            }
          >
            PokeApi
          </NavLink>
          <NavLink
            to={"/placeholder"}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`
            }
          >
            JSONPlaceholder
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
