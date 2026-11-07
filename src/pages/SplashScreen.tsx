import { useTheme } from "../context/themeContext";
import { PropagateLoader } from "react-spinners";

interface SplashScreenProps {
    showSplashScreen: boolean;
}

export default function SplashScreen({ showSplashScreen }: SplashScreenProps) {
    const { darkMode } = useTheme();

    return (
        <div className={`flex justify-center items-center h-screen w-screen transition-opacity duration-300 ease-out ${showSplashScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className='flex flex-col text-center justify-center items-center px-5 gap-1'>
                <img
                    className={`w-40 h-40 rounded-full border-4 ${darkMode ? 'border-gray-500' : 'border-gray-300'} sm:w-48 sm:h-48 z-50`} 
                    src={'../../profile_photos/ako2.webp'}
                    alt="profile_pic"
                    loading='lazy'
                />
                <h1 className={`${darkMode ? 'text-gray-400' : 'text-black'} text-4xl font-semibold`}>Welcome!</h1>
                <p className={`${darkMode ? 'text-gray-400' : 'text-black'} text-lg`}>To my personal portfolio site.</p>
                <PropagateLoader color={darkMode ? 'gray' : 'lightgray'} className="pt-10" />
            </div>
        </div>
    )
}
