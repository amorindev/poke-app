import { useEffect, useState } from "react";
import CreatePostForm from "../../features/posts/components/CreatePostForm";
import PostList from "../../features/posts/components/PostList";
import CreatePostToaster from "../../features/posts/components/CreatePostToaster";

function Placeholder() {
  const [open, setOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleOpenCreate = () => {
    setEditingPost(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    console.log(post);
    setEditingPost(post);
    setOpen(true);
  };

  useEffect(() => {}, [open]);

  return (
    <>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleOpenCreate}
          className="rounded-md bg-slate-900 px-4 py-2 text-white font-bold"
        >
          + Create Post
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-full max-w-md bg-white rounded-lg p-4 relative">
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 font-bold"
            >
              ✕
            </button>

            <CreatePostForm
              editingPost={editingPost}
              setEditingPost={setEditingPost}
              onClose={handleClose}
            />
          </div>
        </div>
      )}

      <PostList onEdit={handleEdit} />
      <CreatePostToaster />
    </>
  );
}

export default Placeholder;
