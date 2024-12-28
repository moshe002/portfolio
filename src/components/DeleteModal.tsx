import React from 'react';
import { deleteBlog } from "../services/blogs.service";
import { toast } from "react-toastify";

type DeleteModalProps = {
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    idToDelete: number;
    fetchBlogs: () => void;
}

export default function DeleteModal({ setShowDeleteModal, idToDelete, fetchBlogs }: DeleteModalProps) {

    const cancelDelete = () => setShowDeleteModal(false);

    const handleDelete = async () => {
        try {
            const response = await deleteBlog(idToDelete);

            if (response) {
                toast('Blog deleted successfully.', { type: 'success' });
            }
        } catch (error) {
            toast('Deleting blog failed.', { type: 'error' });
            console.error(error);
        } finally {
            setShowDeleteModal(false);
            fetchBlogs();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                <p className="mb-6">Are you sure you want to delete this blog?</p>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md duration-150 hover:bg-gray-400"
                        onClick={cancelDelete}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-md duration-150 hover:bg-red-700"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
