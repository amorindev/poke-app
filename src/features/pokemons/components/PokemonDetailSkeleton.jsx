function PokemonDetailSkeleton() {
  return (
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
  );
}

export default PokemonDetailSkeleton;
