import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getPokemonByName } from "../../features/pokemons/api/get_pokemon_by_name";

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
        {isLoading && (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-2">
                <div className="skeleton h-3 w-10 rounded"></div>
                <div className="skeleton h-6 w-28 rounded"></div>
              </div>

              <div className="skeleton h-7 w-14 rounded-md"></div>
            </div>

            <div className="flex justify-center py-6">
              <div className="skeleton h-32 w-32 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="rounded-md bg-slate-50 p-2">
                <div className="skeleton h-3 w-12 mb-2 rounded"></div>
                <div className="skeleton h-5 w-10 rounded"></div>
              </div>

              <div className="rounded-md bg-slate-50 p-2">
                <div className="skeleton h-3 w-12 mb-2 rounded"></div>
                <div className="skeleton h-5 w-10 rounded"></div>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="skeleton h-7 w-16 rounded-md"></div>
              <div className="skeleton h-7 w-20 rounded-md"></div>
            </div>

            <div>
              <div className="skeleton h-3 w-20 mb-3 rounded"></div>

              <div className="flex flex-wrap gap-2">
                <div className="skeleton h-7 w-20 rounded-md"></div>
                <div className="skeleton h-7 w-24 rounded-md"></div>
                <div className="skeleton h-7 w-16 rounded-md"></div>
              </div>
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
                XP {pokemon.base_experience ?? 0}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center py-6">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="h-32 w-32"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="rounded-md bg-slate-50 p-2 text-center">
                <p className="text-xs font-bold text-slate-500">Height</p>
                <p className="font-black text-slate-900">{pokemon.height}</p>
              </div>

              <div className="rounded-md bg-slate-50 p-2 text-center">
                <p className="text-xs font-bold text-slate-500">Weight</p>
                <p className="font-black text-slate-900">{pokemon.weight}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {pokemon.types.map(({ type }) => (
                <span
                  key={type.name}
                  className="rounded-md bg-slate-100 px-2 py-1 text-sm font-black uppercase text-slate-700"
                >
                  {type.name}
                </span>
              ))}
            </div>

            <div>
              <p className="text-xs font-black uppercase text-slate-400 mb-2">
                Abilities
              </p>

              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map(({ ability }) => (
                  <span
                    key={ability.name}
                    className="rounded-md bg-blue-50 px-2 py-1 text-sm font-black uppercase text-blue-700"
                  >
                    {ability.name}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}

export default PokemonDetail;
