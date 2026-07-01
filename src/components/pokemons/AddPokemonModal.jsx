import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../features/pokemons/validations/validation";
import { useMutation } from "@tanstack/react-query";
import { create } from "../../features/pokemons/api/create";

function AddPokemonModal({ open, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const createPokemonMutation = useMutation({
    mutationFn: create,
    onSuccess: () => {
      reset();
      onClose();
    },
  });

  const onSubmit = (data) => {
    createPokemonMutation.mutate(data);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
      <div className="w-full max-w-md rounded-md border border-slate-200 bg-white p-6 shadow-lg">
        <div className="mb-6">
          <p className="text-xs font-black uppercase text-slate-400">
            New Pokémon
          </p>

          <h2 className="mt-1 text-2xl font-black text-slate-950">
            Add Pokémon
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {createPokemonMutation.isError && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
              {createPokemonMutation.error?.message ??
                "An unexpected error occurred."}
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-black uppercase text-slate-700">
              Name
            </label>

            <input
              {...register("name")}
              disabled={createPokemonMutation.isPending}
              placeholder="pikachu"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-slate-400"
            />

            {errors.name && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-black uppercase text-slate-700">
              URL
            </label>

            <input
              {...register("url")}
              disabled={createPokemonMutation.isPending}
              placeholder="https://pokeapi.co/api/v2/pokemon/25"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-slate-400"
            />

            {errors.url && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {errors.url.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={createPokemonMutation.isPending}
              className="rounded-md border border-slate-200 bg-slate-100 px-4 py-2 font-black text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={createPokemonMutation.isPending}
              className="flex min-w-28 items-center justify-center rounded-md bg-slate-900 px-4 py-2 font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {createPokemonMutation.isPending ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      fill="currentColor"
                      className="opacity-75"
                      d="M22 12a10 10 0 00-10-10v4a6 6 0 016 6h4z"
                    />
                  </svg>
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPokemonModal;
