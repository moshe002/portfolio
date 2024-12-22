import { useTheme } from "../context/themeContext";

export default function Blog() {
  const { darkMode } = useTheme();

  const mockData = {
    "title": "Mock Title",
    "description": ""
  };
  
  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} rounded-md`}>
      <div>
        Blog
      </div>
    </div>
  )
}