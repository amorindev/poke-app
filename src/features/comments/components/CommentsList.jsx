import { useQuery } from "@tanstack/react-query";
import { getByPostId } from "../api/get_by_post_id";

function CommentsList({ postId }) {
  const {
    data: comments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getByPostId(postId),
  });

  if (isLoading) {
    return <p className="mt-3 text-sm text-slate-500">Loading comments...</p>;
  }

  if (isError) {
    return <p className="mt-3 text-sm text-red-500">Error loading comments.</p>;
  }

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-bold text-slate-800">
        Comments ({comments.length})
      </h3>

      <div className="space-y-2">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-md border border-slate-200 bg-slate-50 p-3"
          >
            <p className="text-sm font-semibold text-slate-800">
              {comment.name}
            </p>

            <p className="text-xs text-slate-500">{comment.email}</p>

            <p className="mt-2 text-sm text-slate-600">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsList;