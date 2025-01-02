import { useState, useEffect } from "react"; 
import { useTheme } from "../context/themeContext";
import { retrieveBlogs } from "../services/blogs.service";
import { toast } from "react-toastify";
import moment from "moment";

export default function Blog() {
  const { darkMode } = useTheme();
  
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await retrieveBlogs();
    if (Array.isArray(response)) {
      setBlogs(response.reverse());
    } else {
      toast('Failed to fetch blogs', { type: 'error' });
      console.error('Failed to fetch blogs:', response);
    }
  }

  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-600 text-white' : 'bg-zinc-100 text-black'} rounded-md`}>
      <div className='flex flex-col gap-5'>
        {
          blogs.map((blog) => {
            const formattedDate = moment(blog.created_at).format("MMMM Do YYYY, h:mm");
            return (
                <div key={blog.id} className={`flex flex-col gap-2`}>
                <h1 className="text-lg font-semibold">{formattedDate}</h1>
                <div className={`border-2 ${darkMode ? 'bg-gray-500' : 'bg-white'} p-5 rounded-md`}>
                  <div dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}