//import { useContext } from 'react'
//import { DarkModeContext } from '../context/themeContext'
import { useTheme } from '../context/themeContext'

import Button from './Button'
import Navbar from './Navbar'

import CoverPicture from "./CoverPhoto"
import ProfilePic1 from '../assets/profile-pic.jpg';
import ProfilePic2 from '../assets/profile_pic_fb.jpg';
import ProfilePic3 from '../assets/formal.jpg';
 
interface HeaderProps {
  renderThis: string;
  setRenderThis: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ renderThis, setRenderThis }: HeaderProps) => {

  //const { darkMode } = useContext(DarkModeContext)
  const { darkMode } = useTheme()

  const cycleProfilePic = () => {
    switch(renderThis){
      case "About":
        return (
          <img 
            className={`border-4 ${darkMode ? 'border-white' : 'border-gray-300'} rounded-full w-28 h-28 sm:w-48 sm:h-48 z-50`} 
            src={ProfilePic1} 
            alt="profile_pic" 
            loading='lazy'
          />
        )
      case "Skills":
        return (
          <img 
            className={`border-4 ${darkMode ? 'border-white' : 'border-gray-300'} rounded-full w-28 h-28 sm:w-48 sm:h-48 z-50`} 
            src={ProfilePic2} 
            alt="profile_pic" 
            loading='lazy'
          />
        )
      case "Experience":
        return (
          <img 
            className={`border-4 ${darkMode ? 'border-white' : 'border-gray-300'} rounded-full w-28 h-28 sm:w-48 sm:h-48 z-50`} 
            src={ProfilePic3} 
            alt="profile_pic" 
            loading='lazy'
          />
        )
    }
  };

  return (
    <div className={`flex flex-col items-center h-[85%] ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'}`}>
      <CoverPicture renderThis={renderThis} />
      <div className="flex flex-col sm:flex-row justify-between items-center w-[70%] h-auto px-3">
        <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-5 px-5 -mt-10 sm:-mt-14">
          {
            cycleProfilePic()
          }
          <div className='flex flex-col gap-1 text-center'>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-center text-base sm:text-3xl font-semibold sm:mt-14`}>Moses Anthony Y. Fat</h1>     
            <p title='My nicknames' className={`${darkMode ? 'text-white' : 'text-black'} italic text-xs sm:text-sm`}>(Moshe, Moi, Anton, Moses)</p>       
          </div>
        </div>
        <Button text="Download my CV" color="bg-green-500" />
      </div>
      <Navbar renderThis={renderThis} setRenderThis={setRenderThis} />
    </div>
  )
}

export default Header