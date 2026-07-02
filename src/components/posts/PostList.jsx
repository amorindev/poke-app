import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../features/posts/local-storage/get_posts";

function PostList() {
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <section className="mt-8">
      {isLoading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {isError && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          {error?.message || "Error loading posts."}
        </div>
      )}

      {!isLoading && !isError && posts.length === 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
          No posts yet.
        </div>
      )}

      {!isLoading && !isError && posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-slate-800">{post.title}</h2>

              <p className="mt-2 text-slate-600">{post.body}</p>

              <p className="mt-4 text-sm font-medium text-slate-400">
                User #{post.userId}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;
