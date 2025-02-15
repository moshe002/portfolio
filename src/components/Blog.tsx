import { useState, useEffect } from "react"; 
import { useTheme } from "../context/themeContext";
import { retrieveBlogs } from "../services/blogs.service";
import { toast } from "react-toastify";
import moment from "moment";

export default function Blog() {
  const { darkMode } = useTheme();
  
  const [blogs, setBlogs] = useState<any[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('asc');

  useEffect(() => {
    fetchBlogs();
  }, [sort]);

  const fetchBlogs = async () => {
    const response = await retrieveBlogs();
    if (Array.isArray(response)) {
      const sortedBlogs = sort == 'asc' ? response.reverse() : response;
      setBlogs(sortedBlogs);
    } else {
      setHasError(true);
      toast('Failed to fetch blogs', { type: 'error' });
      console.error('Failed to fetch blogs:', response);
    }
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-600 text-white' : 'bg-zinc-100 text-black'} rounded-md`}>
      <div className="flex items-center justify-end mb-4">
        <label htmlFor="filter" className="mr-2 text-sm text-center">Sort by:</label>
        <select onChange={(e) => handleSort(e)} name="sort" id="sort" className="p-2 border rounded-md">
          <option value="asc">Newest</option>
          <option value="desc">Oldest</option>
        </select>
      </div>
      <div className='flex flex-col gap-5'>
        {
          blogs.length == 0 &&
          <div className='flex flex-col gap-2'>
            <h1 className="text-lg font-semibold text-center">
              {hasError ? 'Error fetching blogs.' : 'No blogs to display.'}
            </h1>
          </div>
        }
        {
          blogs.map((blog) => {
            const formattedDate = moment(blog.created_at).format("MMMM Do YYYY, h:mma");
            return (
                <div key={blog.id} className='flex flex-col gap-2'>
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