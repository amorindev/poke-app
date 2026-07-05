import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pokemon from "../../features/pokemons/components/Pokemon";
import { getByType } from "../../features/pokemons/api/get_by_type";
import { Link, useSearchParams } from "react-router";
import AddPokemonModal from "../../features/pokemons/components/AddPokemonModal";
import { getAllPaginated } from "../../features/pokemons/api/get_all_paginated";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "all";
  const page = Number(searchParams.get("page")) || 1;
  const safePage = page < 1 ? 1 : page;
  const LIMIT = 12;
  const offset = (safePage - 1) * LIMIT;
  const [openModal, setOpenModal] = useState(false);

  const {
    isLoading,
    data: queryData,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemons", filter, offset],
    queryFn: async () => {
      if (filter === "all") {
        const data = await getAllPaginated(LIMIT, offset);
        return {
          results: data.results,
          hasNext: data.count > offset + LIMIT,
        };
      }

      const data = await getByType(filter);
      const start = offset;
      const end = offset + LIMIT;

      const filtered = data.pokemon.slice(start, end).map((p) => ({
        name: p.pokemon.name,
        url: p.pokemon.url,
      }));

      return {
        results: filtered,
        hasNext: data.pokemon.length > offset + LIMIT,
      };
    },
    keepPreviousData: true,
  });

  const pokemons = queryData?.results;
  const hasNext = queryData?.hasNext ?? false;

  const nextPage = () => {
    setSearchParams({ filter, page: String(safePage + 1) });
  };

  const prevPage = () => {
    setSearchParams({ filter, page: String(Math.max(safePage - 1, 1)) });
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-end gap-3 pt-6">
        <select
          value={filter}
          onChange={(e) => {
            setSearchParams({ filter: e.target.value, page: "1" });
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
          disabled={safePage === 1}
          className="rounded-lg border border-slate-300 bg-white px-5 py-2 font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-100 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
        >
          Prev
        </button>

        <span className="text-sm font-semibold text-slate-600">
          Page: {safePage}
        </span>

        <button
          onClick={nextPage}
          disabled={!hasNext}
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
