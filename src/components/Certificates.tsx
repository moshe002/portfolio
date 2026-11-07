import { useState, useEffect } from "react";
import { useTheme } from "../context/themeContext";
import { certificates } from "../data/certificates";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { SquareLoader } from "react-spinners";

function ExperienceSection() {
  
  const { darkMode } = useTheme()

  const [loading, setLoading] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<{ width: number }>({ width: typeof window !== 'undefined' ? window.innerWidth : 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setScreenWidth({
        width: window.innerWidth
      });
    }
    
    window.addEventListener('resize', handleResize);
     
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
    
  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col items-center">
        <PhotoProvider maskOpacity={0.5}>
          <div className="flex flex-wrap justify-evenly gap-4 mt-3">
            {
              [...certificates].reverse().map((certificate, index) => {
                return (
                  <div className={`relative ${darkMode ? 'bg-zinc-900' : 'bg-white'} p-3 rounded-md`} key={index}>
                    {loading && (
                      <div className={`absolute inset-0 z-10 flex items-center justify-center`}>
                        <SquareLoader color={darkMode ? 'gray' : 'lightgray'} size={screenWidth.width < 650 ? 100 : 180} />
                      </div>
                    )}

                    <PhotoView src={certificate}>
                      <img 
                        className={`hover:scale-125 hover:cursor-pointer duration-150 ${loading ? 'opacity-0' : 'opacity-100'} ${darkMode ? '' : 'border-2 border-gray-300'} sm:w-[85] sm:h-60 rounded-md`} 
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