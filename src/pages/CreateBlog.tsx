import { useState, useEffect } from "react";
import { logout } from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { 
  createBlog, 
  retrieveBlogs, 
  updateBlog } from "../services/blogs.service";
import { retrieveStorageData } from "../services/storage.services";  
import Editor, { ContentEditableEvent } from 'react-simple-wysiwyg';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import DeleteModal from "../components/DeleteModal";
import { toast } from "react-toastify";
import moment from "moment";

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
    retrieveStorageData();
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

  const handleSubmitContent = () => {
    console.log("Content submitted");
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
          <div className="flex flex-row items-center gap-1 p-5 mt-10 border-2 border-red-500">
            {/* section for uploading blogs and text contents */}
            <section className="flex flex-col items-center gap-5">
              <Editor
                placeholder="Write your blog here..."
                containerProps={{ style: { resize: 'vertical', height: '400px', width: '50vw', overflow: 'auto' } }} 
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
            </section>
            {/* section for uploading content (images) */}
            <section className="flex flex-col justify-between h-[70vh] w-full border-2 border-blue-400 p-3">
              <form className="flex flex-col items-center gap-5" onSubmit={handleSubmitContent}>
                <div className="">
                  <label className="" htmlFor="content-image">Picture here:</label>
                  <input 
                    type="file" 
                    accept=".png,.jpg,.jpeg,.gif,.mp4,.mov,.avi,.webm,.mkv,image/*,video/*" 
                    name="content-image" 
                    id="content-image" 
                  />
                </div>
                <button className="w-32 rounded-md p-2 font-semibold bg-green-400 text-white" type="submit">Upload picture</button>
              </form>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-400 opacity-50">Image preview here</p>
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-5 w-screen mt-10">
            <h1 className="text-center font-bold text-2xl">My Blogs</h1>
            <div className="flex flex-wrap justify-center gap-5 p-5 bg-gray-300 rounded-md">
            {
              blogs.map((blog) => {
                const formattedDate = moment(blog.created_at).format("dddd, MMMM Do YYYY, h:mm:ss A");
                return (
                  <div key={blog.id} className="flex flex-col gap-5 p-5 w-[40%] h-[50%] bg-zinc-100 rounded-md">
                    <div className="flex justify-evenly items-center">
                      <button onClick={() => handleUpdate(blog.id, blog.blog_content)} className="p-2 text-xl bg-purple-500 rounded-md">
                        <MdOutlineModeEdit />
                      </button>
                      
                      <button onClick={() => confirmDelete(blog.id)} className="p-2 text-xl bg-red-500 rounded-md">
                        <MdDeleteOutline />
                      </button>
                    </div>
                    <p className="text-sm">Created at: {formattedDate}</p>
                    <div 
                      className="overflow-hidden text-ellipsis text-sm" 
                      style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} 
                      dangerouslySetInnerHTML={{ __html: blog.blog_content }} 
                    />
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}