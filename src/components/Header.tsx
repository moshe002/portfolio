import Button from './Button'
import Navbar from './Navbar'

import CoverPicture from "./CoverPhoto"
import ProfilePic from '../assets/profile-pic.jpg'

interface HeaderProps {
  setRenderThis: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setRenderThis }: HeaderProps) => {
  return (
    <div className='flex flex-col items-center h-[85%] bg-zinc-100'>
      <CoverPicture />
      <div className="flex justify-between items-center w-[70%] h-auto px-3">
        <div className="flex items-center gap-5 px-5 -mt-14">
          <img 
            className="border-4 border-white rounded-full w-48 h-48 z-50" 
            src={ProfilePic} 
            alt="profile_pic" 
          />
          <h1 className="text-3xl font-semibold mt-14">Moses Anthony Y. Fat</h1>
        </div>
        <Button text="Download my CV" color="bg-green-500" />
      </div>
      <Navbar setRenderThis={setRenderThis} />
    </div>
  )
}

export default Header