import { useState, useEffect } from "react";
import { logout } from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { createBlog, retrieveBlogs, updateBlog } from "../services/blogs.service";
import Editor, { ContentEditableEvent } from 'react-simple-wysiwyg';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import DeleteModal from "../components/DeleteModal";
import { toast } from "react-toastify";

type UpdateContent = {
  id: number;
  content: string;
}

export default function CreateBlog() {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [editorValue, setEditorValue] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [updateContent, setUpdateContent] = useState<UpdateContent>({ id: 0, content: '' });
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/blog-login');
    }
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await retrieveBlogs();
    if (Array.isArray(response)) {
      setBlogs(response);
    } else {
      toast('Failed to fetch blogs', { type: 'error' });
      console.error('Failed to fetch blogs:', response);
    }
  }

  const submitBlog = async () => {
    try {
      const response = update ? await updateBlog(updateContent.id, updateContent.content) : await createBlog(editorValue);

      if (response) {
        toast(`Blog ${update ? 'updated': 'created'} successfully.`, { type: 'success' });
      }

    } catch (error) {
      toast("Blog creation failed.", { type: 'error' });
      console.error(error);
    } finally {
      setUpdate(false);  
      setEditorValue('');
      setUpdateContent({ id: 0, content: '' });
      fetchBlogs();
    }
  };

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result) {
        toast("Logged out successfully.", { type: 'success' });
        localStorage.removeItem('token');
        navigate('/blog-login');
      }
    } catch (error) {
      toast("Error logging out.", { type: 'error' });
      console.error(error);
    }
  };

  const handleEditorChange = (e: ContentEditableEvent) => {
    if (update) {
      setUpdateContent({ ...updateContent, content: e.target.value });
    } else {
      setEditorValue(e.target.value);
    }
  };

  const handleUpdate = (blogId: number, blogContent: string) => {
    setEditorValue(blogContent);
    setUpdateContent({ id: blogId, content: blogContent });
    setUpdate(true);
  };

  const cancelUpdate = () => {
    setUpdate(false);
    setEditorValue('');
    setUpdateContent({ id: 0, content: '' });
  };

  const confirmDelete = (id: number) => {
    setIdToDelete(id);
    setShowDeleteModal(true)
  };
    
  return (
    <>
      {
        showDeleteModal && 
        <DeleteModal 
          setShowDeleteModal={setShowDeleteModal} 
          idToDelete={idToDelete}
          fetchBlogs={fetchBlogs} 
        />
      }
      <div className='flex flex-col items-center justify-center min-h-screen overflow-auto'>
        <div className='flex justify-between items-center w-full p-3 bg-green-400 z-50 shadow-2xl text-white font-bold'>
          <h1 className="text-xl">Create a blog here</h1>
          <button onClick={handleLogout} className="rounded-md p-2 font-semibold bg-red-500 text-white">
            Logout
          </button>
        </div>
        <div>
          <div className="flex flex-col items-center gap-5 p-5 mt-10">
            <Editor
              placeholder="Write your blog here..."
              containerProps={{ style: { resize: 'vertical', height: '400px', width: '80vw' } }} 
              value={update ? updateContent.content : editorValue} 
              onChange={(e) => handleEditorChange(e)} 
            />
            {
              update && <button onClick={cancelUpdate} className="w-20 rounded-md p-2 font-semibold bg-red-500 text-white">Cancel</button>
            }
            <button
              disabled={editorValue.length === 0} 
              onClick={submitBlog} 
              className={`w-20 rounded-md p-2 font-semibold bg-green-400 text-white ${editorValue.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {update ? 'Update' : 'Submit'}
            </button>
          </div>
          <div className="flex flex-col gap-5 w-screen mt-10">
            <h1 className="text-center font-bold text-2xl">My Blogs</h1>
            <div className="flex flex-wrap justify-center gap-5 p-5 bg-gray-300 rounded-md">
            {
              blogs.map((blog) => (
                <div key={blog.id} className="flex flex-col gap-5 p-5 w-52 h-48 bg-zinc-100 rounded-md">
                  <div className="flex justify-around items-center">
                  <button onClick={() => handleUpdate(blog.id, blog.blog_content)} className="p-2 text-xl bg-purple-500 rounded-md">
                    <MdOutlineModeEdit />
                  </button>
                  
                  <button onClick={() => confirmDelete(blog.id)} className="p-2 text-xl bg-red-500 rounded-md">
                    <MdDeleteOutline />
                  </button>
                  </div>
                  <div 
                    className="overflow-hidden text-ellipsis" 
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} 
                    dangerouslySetInnerHTML={{ __html: blog.blog_content }} 
                  />
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}