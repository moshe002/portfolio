import { useState, useEffect } from "react"; 
import { useTheme } from "../context/themeContext";
import { retrieveBlogs } from "../services/blogs.service";

export default function Blog() {
  const { darkMode } = useTheme();
  
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await retrieveBlogs();
    if (Array.isArray(response)) {
      setBlogs(response);
    } else {
      console.error('Failed to fetch blogs:', response);
    }
  }

  console.log(blogs);

  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} rounded-md`}>
      <div>
        Blog
      </div>
    </div>
  )
}