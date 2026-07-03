import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pokemon from "../../features/pokemons/components/Pokemon";
import { getByType } from "../../features/pokemons/api/get_by_type";
import { Link } from "react-router";
import AddPokemonModal from "../../features/pokemons/components/AddPokemonModal";
import { getAllPaginated } from "../../features/pokemons/api/get_all_paginated";

function HomePage() {
  const [filter, setFilter] = useState("all"); // fire
  const [openModal, setOpenModal] = useState(false);
  const [offset, setOffset] = useState(0); // 0
  const LIMIT = 12;
  const [enableNext, setEnableNext] = useState(false);

  const {
    isLoading,
    data: pokemons,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemons", filter, offset],
    queryFn: async () => {
      if (filter === "all") {
        const data = await getAllPaginated(LIMIT, offset);
        setEnableNext(data.count > offset + LIMIT ? true : false);
        return data.results;
      } else {
        const data = await getByType(filter);

        const start = offset;
        const end = offset + LIMIT;

        const filtered = data.pokemon.slice(start, end).map((p) => ({
          name: p.pokemon.name,
          url: p.pokemon.url,
        }));

        setEnableNext(data.pokemon.length > offset + LIMIT ? true : false);

        return filtered;
      }
    },
  });

  const nextPage = () => {
    setOffset((prev) => prev + LIMIT);
  };

  const prevPage = () => {
    setOffset((prev) => Math.max(prev - LIMIT, 0));
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-end gap-3 pt-6">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setOffset(0);
            setEnableNext(false);
          }}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-slate-500"
        >
          <option value="all">All</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
        </select>

      </div>

      {isLoading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {isError && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">{error}</div>
      )}

      {pokemons && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pokemons.map((p) => (
            <Link key={p.name} to={`/pokemon/${p.name}`}>
              <Pokemon pokeUrl={p.url} />
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={offset === 0}
          className="rounded-lg border border-slate-300 bg-white px-5 py-2 font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-100 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
        >
          Prev
        </button>

        <span className="text-sm font-semibold text-slate-600">
          Page: {offset / LIMIT + 1}
        </span>

        <button
          onClick={nextPage}
          disabled={!enableNext}
          className="rounded-lg bg-slate-900 px-5 py-2 font-medium text-white shadow-sm transition-all hover:bg-slate-800 disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      <AddPokemonModal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}

export default HomePage;
