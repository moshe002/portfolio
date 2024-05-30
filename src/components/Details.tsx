import { useTheme } from "../context/themeContext";

import { IoMdSchool } from "react-icons/io";
import { MdOutlineDateRange, MdOutlineMailOutline  } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
//import { GiBodyHeight } from "react-icons/gi";

function Details() {

    const { darkMode } = useTheme()

  return (
    <div className={`flex flex-col gap-3 w-full sm:w-[35%] h-max p-3 rounded-md ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} overflow-hidden`}>
        <div className={`p-3 rounded-md ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-500' : 'bg-white'}`}>
            <h1 className="font-bold text-xl">Personal Details</h1>
            <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-center gap-2 text-base">
                    <h1><IoMdSchool /></h1>
                    <h1>University of Cebu</h1>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <h1><MdOutlineDateRange /></h1>
                    <h1>February, 18 2002</h1>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <h1><IoLocationSharp /></h1>
                    <h1>Township, Poog, Toledo City, Cebu, Philippines</h1>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <h1><MdLocalPhone /></h1>
                    <h1 title="Globe">0906 268 9710</h1>
                </li>
                {
                    /* 
                    <li className="flex items-center gap-2 text-base">
                        <h1><GiBodyHeight /></h1>
                        <h1>5'8</h1>
                    </li>
                    */
                }
                
            </ul>
        </div>
        <div className={`p-3 rounded-md ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-500' : 'bg-white'}`}>
            <h1 className="font-bold text-xl">Socials</h1>
            <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-center gap-2 text-base">
                    <h1><MdOutlineMailOutline /></h1>
                    <p>mosesfat@gmail.com</p>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="icon" loading="lazy" />
                    <a className="hover:text-blue-500" href="https://web.facebook.com/mosesanthony873" target="_blank" rel="noopener">Facebook</a>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="icon" loading="lazy" />
                    <a className="hover:text-blue-300" href="https://twitter.com/_mosheee" target="_blank" rel="noopener">Twitter</a>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="icon" loading="lazy" />
                    <a className={`${darkMode ? 'hover:text-black' : 'hover:text-gray-500'}`} href="https://github.com/moshe002" target="_blank" rel="noopener">Github</a>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="icon" loading="lazy" />
                    <a className="hover:text-blue-400" href="https://www.linkedin.com/in/moses-anthony-fat-36962b261/" target="_blank" rel="noopener">Linkedin</a>
                </li>
            </ul>
        </div>
        <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-center font-semibold`}>All rights reserved</h1>
    </div>
  )
}

export default Details