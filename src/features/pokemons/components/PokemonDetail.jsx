import { useParams, Link, useLocation, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { getPokemonByName } from "../api/get_pokemon_by_name";
import PokemonDetailSkeleton from "./PokemonDetailSkeleton";

function PokemonDetail() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const pokemonParam = location.state?.pokemon;

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonByName(name),
    enabled: !pokemonParam,
  });

  const data = pokemonParam ?? pokemon;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <PokemonDetailSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center text-red-600">
        {error.message}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-10 py-8">
      <div className="mb-8">
        <Link
          onClick={() => navigate(-1)}
          className="text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          ← Back
        </Link>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs font-black uppercase text-slate-400">
              #{data.id}
            </p>

            <h1 className="text-5xl font-black capitalize text-slate-900">
              {data.name}
            </h1>

            <p className="mt-2 text-slate-500 font-semibold">
              XP {data.base_experience ?? 0}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {data.types.map(({ type }) => (
              <span
                key={type.name}
                className="text-sm font-black uppercase text-slate-700"
              >
                {type.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 text-slate-700">
            <div>
              <p className="text-xs text-slate-500">Height</p>
              <p className="text-2xl font-black">{data.height}</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Weight</p>
              <p className="text-2xl font-black">{data.weight}</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">XP</p>
              <p className="text-2xl font-black">{data.base_experience}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase text-slate-400 mb-2">
              Abilities
            </p>

            <div className="flex flex-wrap gap-3">
              {data.abilities.map(({ ability }) => (
                <span
                  key={ability.name}
                  className="text-sm font-semibold text-slate-700"
                >
                  {ability.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase text-slate-400 mb-2">
              Moves
            </p>

            <div className="flex flex-wrap gap-2 max-h-40 overflow-auto pr-2">
              {data.moves.slice(0, 20).map(({ move }) => (
                <span
                  key={move.name}
                  className="text-xs font-medium text-slate-600"
                >
                  {move.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <motion.img
            layoutId={`pokemon-image-${data.name}`}
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            className="w-105 h-105 object-contain drop-shadow-xl"
            style={{
              viewTransitionName: `pokemon-${data.name}`,
            }}
          />
        </div>
      </section>
    </main>
  );
}

export default PokemonDetail;
