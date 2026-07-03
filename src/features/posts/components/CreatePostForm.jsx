import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSchema } from "../validations/validation";
import { createPost } from "../api/create";
import { updatePost } from "../api/update";
import CancelButton from "./CancelButton";
import { toast } from "sonner";

function CreatePostForm({ editingPost, setEditingPost, onClose }) {
  const queryClient = useQueryClient();

  const isEditMode = !!editingPost;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  useEffect(() => {
    if (editingPost) {
      setValue("title", editingPost.title);
      setValue("body", editingPost.body);
    }
  }, [editingPost, setValue]);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data) => {
      if (isEditMode) {
        return updatePost({
          ...editingPost,
          ...data,
        });
      }

      return createPost(data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });

      toast.success(
        isEditMode
          ? "Post successfully updated."
          : "Post successfully created."
      );

      setValue("title", "");
      setValue("body", "");

      setEditingPost(null);
      onClose?.();
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-xl rounded-xl  bg-white p-6  space-y-5"
    >
      <h2 className="text-2xl font-black text-slate-900 text-center">
        {isEditMode ? "Update Post" : "Create Post"}
      </h2>

      <div>
        <input
          {...register("title")}
          placeholder="Post title"
          className={`w-full rounded-lg border px-4 py-3 outline-none transition
          ${
            errors.title
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          }`}
        />

        {errors.title && (
          <p className="mt-1 text-sm font-medium text-red-500">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register("body")}
          rows={5}
          placeholder="Post description..."
          className={`w-full rounded-lg border px-4 py-3 outline-none transition resize-none
          ${
            errors.body
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          }`}
        />

        {errors.body && (
          <p className="mt-1 text-sm font-medium text-red-500">
            {errors.body.message}
          </p>
        )}
      </div>

      <button
        disabled={isPending}
        className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? isEditMode
            ? "Updating..."
            : "Creating..."
          : isEditMode
            ? "Update Post"
            : "Create Post"}
      </button>

      {editingPost && (
        <CancelButton
          cancelOnClick={() => {
            setEditingPost(null);
            setValue("title", "");
            setValue("body", "");
          }}
        />
      )}

      {isError && (
        <div className="rounded-lg bg-red-100 p-3 text-center font-medium text-red-600">
          Something went wrong.
        </div>
      )}
    </form>
  );
}

export default CreatePostForm;
