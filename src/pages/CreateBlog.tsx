import { useEffect } from "react";
import { logout } from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/blog-login');
    }
  });

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
    
  return (
    <div>
      CreateBlog
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}