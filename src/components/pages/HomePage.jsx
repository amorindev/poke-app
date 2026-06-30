import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../features/pokeapi/get_all";
import Pokemon from "../pokemons/Pokemon";
import { getByType } from "../../features/pokeapi/get_by_type";

function HomePage() {
  const [filter, setFilter] = useState("all"); // fire

  const {
    isLoading,
    data: pokemons,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemons", filter],
    queryFn: async () => {
      if (filter === "all") {
        const data = await getAll();
        return data.results;
      }

      const data = await getByType(filter);

      return data.pokemon.slice(0, 20).map((p) => ({
        name: p.pokemon.name,
        url: p.pokemon.url,
      }));
    },
  });

  return (
    <section>
      <div className="mb-6 flex justify-end">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
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
            <Pokemon key={p.name} pokeUrl={p.url} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
