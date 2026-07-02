import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSchema } from "../../features/posts/validations/validation";
import { createPost } from "../../features/posts/api/create";

function CreatePostForm() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      body: "",
      userId: 1,
    },
  });

  const createPostMutation = useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      reset();

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const onSubmit = (data) => {
    createPostMutation.mutate(data);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-lg">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-wide text-slate-400">
            JSONPlaceholder
          </p>

          <h2 className="mt-1 text-xl font-black text-slate-900">
            Create Post
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-black uppercase tracking-wide text-slate-700">
              Title
            </label>

            <input
              {...register("title")}
              disabled={createPostMutation.isPending}
              placeholder="Post title"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100"
            />

            {errors.title && (
              <p className="mt-1 text-xs font-semibold text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-black uppercase tracking-wide text-slate-700">
              Body
            </label>

            <textarea
              {...register("body")}
              rows={2}
              disabled={createPostMutation.isPending}
              placeholder="Write your post..."
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100"
            />

            {errors.body && (
              <p className="mt-1 text-xs font-semibold text-red-600">
                {errors.body.message}
              </p>
            )}
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={createPostMutation.isPending}
              className="flex min-w-28 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {createPostMutation.isPending ? (
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
                  Creating...
                </>
              ) : (
                "Create Post"
              )}
            </button>
          </div>

          {createPostMutation.isError && (
            <p className="text-xs font-semibold text-red-600">
              Error creating the post.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;
