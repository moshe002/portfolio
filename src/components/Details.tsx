import { IoMdSchool } from "react-icons/io";
import { MdOutlineDateRange, MdOutlineMailOutline  } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { GiBodyHeight } from "react-icons/gi";

function Details() {
  return (
    <div className="flex flex-col gap-3 w-full sm:w-[35%] h-max p-3 rounded-md bg-zinc-100 overflow-hidden">
        <div className="p-3 rounded-md bg-white">
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
                    <h1><GiBodyHeight /></h1>
                    <h1>5'8</h1>
                </li>
            </ul>
        </div>
        <div className="p-3 rounded-md bg-white">
            <h1 className="font-bold text-xl">Socials</h1>
            <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-center gap-2 text-base">
                    <h1><MdOutlineMailOutline /></h1>
                    <p>mosesfat@gmail.com</p>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="icon" />
                    <a className="hover:text-blue-500" href="https://web.facebook.com/mosesanthony873" target="_blank" rel="noopener">Facebook</a>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="icon" />
                    <a className="hover:text-blue-300" href="https://twitter.com/_mosheee" target="_blank" rel="noopener">Twitter</a>
                </li>
                <li className="flex items-center gap-2 text-base">
                    <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="icon" />
                    <a className="hover:text-gray-500" href="https://github.com/moshe002" target="_blank" rel="noopener">Github</a>
                </li>
            </ul>
        </div>
        <h1 className="text-center font-semibold">All rights reserved</h1>
    </div>
  )
}

export default Details