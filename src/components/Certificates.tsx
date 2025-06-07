import { useTheme } from "../context/themeContext";
import { certificates } from "../data/certificates";

function ExperienceSection() {
  
  const { darkMode } = useTheme()
    
  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-full ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-evenly gap-4 mt-3">
          {
            [...certificates].reverse().map((certificate, index) => {
              return (
                <div className={`${darkMode ? 'bg-gray-500' : 'bg-white'} p-3 rounded-md`} key={index}>
                  <img 
                    className={`hover:scale-125 duration-150 ${darkMode ? '' : 'border-2 border-gray-300'} sm:w-[85] sm:h-60 rounded-md`} 
                    src={certificate} 
                    alt={certificate} 
                    loading="lazy"
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default ExperienceSection;