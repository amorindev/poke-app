import CommentsList from "../../comments/components/CommentsList";

function PostCard({ post, onEdit, deleteMutation }) {
  return (
    <article className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="line-clamp-1 text-xl font-black text-slate-900">
        {post.title}
      </h2>

      <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
        {post.body}
      </p>

      <CommentsList postId={post.id} />

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
          User #{post.userId}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(post)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Update
          </button>

          <button
            onClick={() => deleteMutation.mutate(post.id)}
            disabled={deleteMutation.isPending}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
