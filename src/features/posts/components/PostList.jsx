import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/delete";
import { getAllPosts } from "../api/get_all";
import PostCard from "./PostCard";
import CommentsList from "../../comments/components/CommentsList";
import { toast } from "sonner";

function PostList({ onEdit }) {
  const queryClient = useQueryClient();

  const [selectedPost, setSelectedPost] = useState(null);

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
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
    <>
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
          <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onEdit={onEdit}
                deleteMutation={deleteMutation}
                onOpenComments={setSelectedPost}
              />
            ))}
          </div>
        )}
      </section>

      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-xl font-bold">Post</h2>

              <button
                onClick={() => setSelectedPost(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedPost.title}
              </h3>

              <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
                {selectedPost.body}
              </p>

              <div className="my-6 border-b" />

              <CommentsList postId={selectedPost.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostList;
