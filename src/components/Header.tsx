import { useTheme } from '../context/themeContext';
import Button from './Button';
import Navbar from './Navbar';
import CoverPicture from "./CoverPhoto";
import { LuFileJson } from "react-icons/lu";
import { GrDocumentUser } from "react-icons/gr";
import { en } from '../localization/en';
import JSONDATA from '../data/portfolio.json';
 
type HeaderProps = {
  renderThis: string;
  setRenderThis: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ renderThis, setRenderThis }: HeaderProps) => {
  const { darkMode } = useTheme();

  const handleDisplayJson = () => {
    const jsonString = JSON.stringify(JSONDATA, null, 2);
  
    const newTab = window.open();
    if (newTab) {
      newTab.document.write('<pre>' + jsonString + '</pre>');
      newTab.document.close();
    } else {
      alert("Popup blocked! Please allow popups for this site.");
    }
  };

  return (
    <div className={`flex flex-col items-center h-[85%] ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'}`}>
      <CoverPicture renderThis={renderThis} />
      <div className="flex flex-col sm:flex-row justify-between items-center w-[70%] h-auto px-3">
        <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-5 px-5 -mt-10 sm:-mt-14">
          <img 
            className={`border-4 ${darkMode ? 'border-white' : 'border-gray-300'} rounded-full w-28 h-28 sm:w-48 sm:h-48 z-50`} 
            src={
              renderThis == 'About' ? '../../profile_photos/formal.webp'
              : renderThis == 'Skills' ? '../../profile_photos/profile_pic_fb.webp' :
              renderThis == 'Blog' ? '../../profile_photos/current_pp.webp' : '../../profile_photos/profile-pic.webp'
            } 
            alt="profile_pic" 
            loading='lazy'
          />
          <div className='flex flex-col gap-1 text-center'>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-center text-base sm:text-3xl font-semibold sm:mt-14`}>{en.header.fullname}</h1>     
            <p title='My nicknames' className={`${darkMode ? 'text-white' : 'text-black'} italic text-xs sm:text-sm`}>{en.header.nicknames}</p>       
          </div>
        </div>
        <div className='flex flex-row sm:flex-col items-end gap-2 p-3'>
          <Button icon={<GrDocumentUser size={20} />} color="bg-green-500" />
          <button
            title="Display data in JSON format"
            onClick={handleDisplayJson} 
            id='display-json-btn' 
            className="w-12 mt-2 sm:mt-0 bg-blue-400 p-3 text-white rounded-full font-semibold text-center">
              <LuFileJson size={20} />
          </button>
        </div>
      </div>
      <Navbar renderThis={renderThis} setRenderThis={setRenderThis} />
    </div>
  )
}

export default Header