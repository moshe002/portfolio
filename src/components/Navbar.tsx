import DarkDayButton from "./DarkDayButton";
import { useTheme } from "../context/themeContext";

type NavbarProps = {
  renderThis: string;
  setRenderThis: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ renderThis, setRenderThis }:NavbarProps) => {

  const { darkMode } = useTheme()

  const renderThisSection = (section: string) => setRenderThis(section)

  return (
    <div className="flex flex-row justify-between p-5 w-[70%] border-t-2 mt-5">
        <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-black'} sm:flex-row gap-5`}>
            <button 
              onClick={() => renderThisSection('About')} 
              className={`${renderThis == 'About' ? 'text-black' : ''} ${renderThis == 'About' ? 'bg-gray-300' : ''} p-3 font-semibold hover:bg-gray-300 rounded-md duration-150`} 
              type="button"
            >
              About
            </button>
            <button 
              onClick={() => renderThisSection('Skills')} 
              className={`${renderThis == 'Skills' ? 'text-black' : ''} ${renderThis == 'Skills' ? 'bg-gray-300' : ''} p-3 font-semibold hover:bg-gray-300 rounded-md duration-150`}
              type="button"
            >
              Skills
            </button>
            <button 
              onClick={() => renderThisSection('Experience')} 
              className={`${renderThis == 'Experience' ? 'text-black' : ''} ${renderThis == 'Experience' ? 'bg-gray-300' : ''} p-3 font-semibold hover:bg-gray-300 rounded-md duration-150`}
              type="button"
            >
              Certificates
            </button>
        </div>
        <DarkDayButton />
    </div>
  )
}

export default Navbar