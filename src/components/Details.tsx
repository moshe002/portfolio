import { useTheme } from "../context/themeContext";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineMailOutline  } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
//import { MdLocalPhone } from "react-icons/md";
import { en } from '../localization/en';
// import { useNavigate } from 'react-router-dom';

function Details() {

    const { darkMode } = useTheme();

    // const navigate = useNavigate();

    return (
        <div className={`flex flex-col gap-3 w-full sm:w-[35%] h-max p-3 rounded-md ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'} overflow-hidden`}>
            <div className={`p-3 rounded-md ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                <h1 className="font-bold text-xl">{en.details.personal_details}</h1>
                <ul className="flex flex-col gap-3 mt-5">
                    <li className="flex items-center gap-2 text-base">
                        <h1><IoMdSchool /></h1>
                        <h1>{en.details.school}</h1>
                    </li>
                    <li className="flex items-center gap-2 text-base">
                        <h1><FaBirthdayCake /></h1>
                        <h1>{en.details.birthday}</h1>
                    </li>
                    <li className="flex items-center gap-2 text-base">
                        <h1><IoLocationSharp /></h1>
                        <h1>{en.details.address}</h1>
                    </li>
                    {/* <li className="flex items-center gap-2 text-base">
                        <h1><MdLocalPhone /></h1>
                        <h1 title="Globe">{en.details.cp_number}</h1>
                    </li>        */}
                </ul>
            </div>
            <div className={`p-3 rounded-md ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                <h1 className="font-bold text-xl">{en.details.socials}</h1>
                <ul className="flex flex-col gap-3 mt-5">
                    <li className="flex items-center gap-2 text-base">
                        <h1><MdOutlineMailOutline /></h1>
                        <p>{en.details.email}</p>
                    </li>
                    <li className="flex items-center gap-2 text-base">
                        <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="icon" loading="lazy" />
                        <a className={`${darkMode ? 'hover:text-black' : 'hover:text-gray-500'}`} href="https://github.com/moshe002" target="_blank" rel="noopener">{en.details.github}</a>
                    </li>
                    <li className="flex items-center gap-2 text-base">
                        <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="icon" loading="lazy" />
                        <a className="hover:text-blue-400" href="https://www.linkedin.com/in/moses-anthony-fat-36962b261/" target="_blank" rel="noopener">{en.details.linkedIn}</a>
                    </li>
                </ul>
            </div>
            {/* <button onClick={() => navigate('/blog-login')} className={`${darkMode ? 'text-white' : 'text-black'} text-center font-semibold cursor-default`}>{en.details.rights}</button> */}
        </div>
    )
}

export default Details