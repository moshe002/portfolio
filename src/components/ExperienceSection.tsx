import { useTheme } from "../context/themeContext"

function ExperienceSection() {
  
  const { darkMode } = useTheme()
  
  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-full ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col items-center">
        <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-2xl text-center font-semibold`}>Experience to be uploaded soon...</h1>
      </div>
    </div>
  )
}

export default ExperienceSection