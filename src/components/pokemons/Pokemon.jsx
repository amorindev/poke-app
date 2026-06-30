import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../../features/pokeapi/get_pokemon";

function Pokemon({ pokeUrl }) {
  const {
    isLoading,
    data: pokemon,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemon", pokeUrl],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return await getPokemon(pokeUrl);
    },
  });

  return (
    <article className="flex min-h-64 flex-col justify-between rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      {isLoading && (
        <>
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2">
              <div className="skeleton bg-gray-200 h-3 w-10 rounded"></div>
              <div className="skeleton bg-gray-200 h-6 w-28 rounded"></div>
            </div>

            <div className="skeleton bg-gray-200 h-7 w-12 rounded-md"></div>
          </div>

          <div className="flex flex-1 items-center justify-center py-4">
            <div className="skeleton bg-gray-200 h-28 w-28 rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="skeleton bg-gray-200 h-7 w-16 rounded-md"></div>
            <div className="skeleton bg-gray-200 h-7 w-20 rounded-md"></div>
          </div>
        </>
      )}

      {isError && (
        <div className="rounded-md bg-red-100 p-2 text-sm text-red-700">
          {error.message}
        </div>
      )}

      {pokemon && (
        <>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase text-slate-400">
                #{pokemon.id}
              </p>
              <h2 className="mt-1 text-xl font-black capitalize text-slate-950">
                {pokemon.name}
              </h2>
            </div>
            <div className="rounded-md bg-amber-100 px-2 py-1 text-xs font-black text-amber-700">
              {pokemon.base_experience ?? 0}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center py-4">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map(({ type }) => (
              <span
                key={type.name}
                className="rounded-md bg-slate-100 px-2 py-1 text-sm font-black uppercase text-slate-700"
              >
                {type.name}
              </span>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

export default Pokemon;
