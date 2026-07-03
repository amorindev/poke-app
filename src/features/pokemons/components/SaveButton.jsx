
function SaveButton({createPokemonMutation}) {
  return (
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
  );
}

export default SaveButton;
