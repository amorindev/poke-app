function PokemonDetailCard({ pokemon }) {
  return (
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
  );
}

export default PokemonDetailCard;
