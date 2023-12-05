import DarkDayButton from "./DarkDayButton";

interface NavbarProps {
  setRenderThis: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ setRenderThis }:NavbarProps) => {

  const renderThisSection = (section: string) => setRenderThis(section)

  return (
    <div className="flex justify-between p-5 w-[70%] border-t-2 mt-5">
        <div className="flex gap-5">
            <button 
              onClick={() => renderThisSection('About')} 
              className="p-3 font-semibold hover:bg-gray-300 rounded-md duration-150" 
              type="button"
            >
              About
            </button>
            <button 
              onClick={() => renderThisSection('Skills')} 
              className="p-3 font-semibold hover:bg-gray-300 rounded-md duration-150" 
              type="button"
            >
              Skills
            </button>
            <button 
              onClick={() => renderThisSection('Experience')} 
              className="p-3 font-semibold hover:bg-gray-300 rounded-md duration-150" 
              type="button"
            >
              Experience
            </button>
        </div>
        <DarkDayButton />
    </div>
  )
}

export default Navbar