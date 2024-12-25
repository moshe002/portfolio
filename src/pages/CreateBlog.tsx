import { useState, useEffect } from "react";
import { logout } from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg';

export default function CreateBlog() {

  const navigate = useNavigate();

  const [editorValue, setEditorValue] = useState<string>('my <b>HTML</b>');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/blog-login');
    }
  });

  const submitBlog = async () => {
    console.log(editorValue);
  };

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result) {
        localStorage.removeItem('token');
        navigate('/blog-login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditorChange = (e) => {
    setEditorValue(e.target.value);
  };
    
  return (
    <div className='flex flex-col relative items-center justify-center h-screen'>
      <div className='flex justify-between items-center fixed top-0 w-full p-3 bg-green-400 shadow-2xl text-white font-bold'>
        <h1 className="text-xl">Create a blog here</h1>
        <button onClick={handleLogout} className="rounded-md p-2 font-semibold bg-red-400 text-white">
          Logout
        </button>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <Editor
          containerProps={{ style: { resize: 'vertical', height: '400px' } }} 
          value={editorValue} 
          onChange={(e) => handleEditorChange(e)} 
        />
        <button onClick={submitBlog} className="rounded-md p-2 font-semibold bg-green-400 text-white">
          Submit
        </button>
      </div>
    </div>
  )
}