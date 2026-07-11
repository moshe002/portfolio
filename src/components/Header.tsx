import { useTheme } from '../context/themeContext';
import Button from './Button';
import Navbar from './Navbar';
import CoverPicture from "./CoverPhoto";
import { MdDownload } from "react-icons/md";
import { en } from '../localization/en';
 
type HeaderProps = {
  renderThis: string;
  setRenderThis: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ renderThis, setRenderThis }: HeaderProps) => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-col items-center h-[85%] ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
      <CoverPicture />
      <div className="flex flex-col md:flex-row justify-between items-center w-[70%] h-auto px-3">
        <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-5 px-5 -mt-10 sm:-mt-14">
          <img 
            className={`border-4 ${darkMode ? 'border-white' : 'border-gray-300'} rounded-full w-28 h-28 sm:w-48 sm:h-48 z-50`} 
            src={'../../profile_photos/grad-pic.webp'} 
            alt="profile_pic" 
            loading='lazy'
          />
          <div className='flex flex-col gap-1 text-center'>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-center text-base sm:text-3xl font-semibold sm:mt-14`}>{en.header.fullname}</h1>     
            <p title='My nicknames' className={`${darkMode ? 'text-white' : 'text-black'} italic text-xs sm:text-sm`}>{en.header.nicknames}</p>       
          </div>
        </div>
        <div className='flex flex-row sm:flex-col items-end gap-2 p-3'>
          <Button icon={<MdDownload size={20} />} color="bg-green-500" />
        </div>
      </div>
      <Navbar renderThis={renderThis} setRenderThis={setRenderThis} />
    </div>
  )
}

export default Header