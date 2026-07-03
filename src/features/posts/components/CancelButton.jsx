function CancelButton({ cancelOnClick }) {
  return (
    <>
      <button
        type="button"
        onClick={cancelOnClick}
        className="w-full rounded-lg border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Cancel
      </button>
    </>
  );
}

export default CancelButton;
