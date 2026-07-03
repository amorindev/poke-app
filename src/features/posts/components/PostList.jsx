import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../local-storage/get_posts";
import { deletePost } from "../api/delete";
import PostCard from "./PostCard";
import { toast } from "sonner";

function PostList({ onEdit }) {
  const queryClient = useQueryClient();

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("Post successfully deleted.");
    },
  });

  return (
    <section className="mt-10">
      {isLoading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {isError && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          {error?.message}
        </div>
      )}

      {!isLoading && !isError && posts.length === 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
          No posts yet.
        </div>
      )}

      {!isLoading && !isError && posts.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onEdit={onEdit}
              deleteMutation={deleteMutation}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;
