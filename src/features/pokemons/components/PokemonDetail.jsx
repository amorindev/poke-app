import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getPokemonByName } from "../api/get_pokemon_by_name";
import PokemonDetailSkeleton from "./PokemonDetailSkeleton";
import PokemonDetailCard from "./PokemonDetailCard";

function PokemonDetail() {
  const { name } = useParams();

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      return await getPokemonByName(name);
    },
  });

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <article className="w-full max-w-md flex flex-col justify-between rounded-md border border-slate-200 bg-white p-4 shadow-sm">
        {isLoading && <PokemonDetailSkeleton />}

        {isError && (
          <div className="rounded-md bg-red-100 p-2 text-sm text-red-700">
            {error.message}
          </div>
        )}

        {pokemon && <PokemonDetailCard pokemon={pokemon} />}
      </article>
    </div>
  );
}

export default PokemonDetail;
