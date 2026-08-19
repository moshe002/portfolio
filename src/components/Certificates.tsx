import { useTheme } from "../context/themeContext";
import { certificates } from "../data/certificates";
import { PhotoProvider, PhotoView } from 'react-photo-view';

function ExperienceSection() {
  
  const { darkMode } = useTheme()
    
  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-full ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col items-center">
        <PhotoProvider maskOpacity={0.5}>
          <div className="flex flex-wrap justify-evenly gap-4 mt-3">
            {
              [...certificates].reverse().map((certificate, index) => {
                return (
                  <div className={`${darkMode ? 'bg-zinc-900' : 'bg-white'} p-3 rounded-md`} key={index}>
                    <PhotoView src={certificate}>
                      <img 
                        className={`hover:scale-125 duration-150 ${darkMode ? '' : 'border-2 border-gray-300'} sm:w-[85] sm:h-60 rounded-md`} 
                        src={certificate} 
                        alt={certificate} 
                        loading="lazy"
                      />
                    </PhotoView>
                  </div>
                )
              })
            }
          </div>
        </PhotoProvider>
      </div>
    </div>
  )
};

export default ExperienceSection;