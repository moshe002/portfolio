import { AiOutlineLike } from "react-icons/ai"
import { FaLink } from "react-icons/fa6"
import { useTheme } from "../context/themeContext"
import { RiGitRepositoryCommitsLine } from "react-icons/ri"

import BisdaKids from '../assets/bisdakids.png'
import BisdaKidsAdmin from '../assets/bisdakids_admin.png'
import Shugyopedia from '../assets/shugyopedia.png'
import AlbertosPic from '../assets/albertos1.png'
import BisayadlePic from '../assets/bisayadle2.png'
import WhatToPlay from '../assets/whatoplay2.png'
import GithubProgress from '../assets/github-progress.png'
import PrayBook from '../assets/praybooknew.png'
import Harbest from '../assets/harbest.png'
import rps from '../assets/rps.png'
import Synonym from '../assets/synonym.png'
import CebuMap from '../assets/cebu-map.png'
import Weather from '../assets/weather.png'
import PraybookMobile from '../assets/praybook_mobile.jpg'
import Hangman from '../assets/hangman.jpg'

const projects = [
    {
        "name": "BisdaKids Mobile Game",
        "image": BisdaKids,
        "description": "A capstone project aiming to solve the decline in bisaya proficiency.",    
        "techStack": [
            "Godot",
            "GDScript",
            "Supabase",
            "PHP"
        ],
        "repository": "https://github.com/white-dough/Bisdakids",
        "url": "https://drive.google.com/drive/folders/12iayquowvc2UiWVJbCvW26pQnY9XfNr9?usp=drive_link",
    },
    {
        "name": "BisdaKids Admin Site",
        "image": BisdaKidsAdmin,
        "description": "The admin site for BisdaKids mobile game.",    
        "techStack": [
            "React.js",
            "Tailwind",
            "Supabase",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/BisdaKids-Admin-WebApp",
        "url": "",
    },
    {
        "name": "Shugyopedia",
        "image": Shugyopedia,
        "description": "A knowledge site webapp.",    
        "techStack": [
            "C#",
            "ASP.NET Core",
            "Bootstrap",
            "CSS"
        ],
        "repository": "https://github.com/Chloiemarcoq/ShugyoPedia",
        "url": "",
    },
    {
        "name": "Albertos",
        "image": AlbertosPic,
        "description": "A website for Filipino Pizza franchise.",    
        "techStack": [
            "HTML",
            "CSS",
            "JavaScript",
            "Mapbox"
        ],
        "repository": "https://github.com/moshe002/albertos",
        "url": "https://albertosph.netlify.app/",
    },
    {
        "name": "Bisayadle",
        "image": BisayadlePic,
        "description": "Wordle clone but Bisaya/Cebuano.",    
        "techStack": [
            "TypeScript",
            "Tailwind",
            "React.js",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/bisayadle",
        "url": "https://bisayadle.netlify.app/",
    },
    {
        "name": "Github-Progress",
        "image": GithubProgress,
        "description": "Tracks your github progress for the year (like spotify wrapped).",    
        "techStack": [
            "TypeScript",
            "Tailwind",
            "React.js",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/github-progress",
        "url": "https://github-progress.netlify.app/",
    },
    {
        "name": "PrayBook",
        "image": PrayBook,
        "description": "Church booking app for easy mass and event bookings.",    
        "techStack": [
            "React.js",
            "JavaScript",
            "Tailwind",
            "Firebase",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/churchbookingapp",
        "url": "https://praybook-4b0a1.web.app/",
    },
    {
        "name": "HarBest",
        "image": Harbest,
        "description": "A webapp for selling produce (veggies and fruits).",    
        "techStack": [
            "TypeScript",
            "React.js",
            "Tailwind",
            "Supabase",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/HarBest",
        "url": "https://harbest.netlify.app/",
    },
    {
        "name": "What-to-play",
        "image": WhatToPlay,
        "description": "Web application to help you choose what to play.",    
        "techStack": [
            "React.js",
            "JavaScript",
            "CSS"
        ],
        "repository": "https://github.com/moshe002/what-to-play",
        "url": "https://moshe002.github.io/what-to-play/",
    },
    {
        "name": "Synonym-Webapp",
        "image": Synonym,
        "description": "Let's you search the following synonyms of a word.",    
        "techStack": [
            "CSS",
            "Vite",
            "React.js",
            "JavaScript"
        ],
        "repository": "https://github.com/moshe002/synonym-webapp",
        "url": "https://findthesynonym.netlify.app/",
    },
    {
        "name": "Rock, Paper, Scissor",
        "image": rps,
        "description": "A rock, paper, scissor game.",    
        "techStack": [
            "TypeScript",
            "React.js",
            "Tailwind",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/rock-paper-scissor",
        "url": "https://rps-moi.netlify.app/",
    },
    {
        "name": "Weather-Webapp",
        "image": Weather,
        "description": "Let's you find the weather conditions of a city.",    
        "techStack": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "repository": "https://github.com/moshe002/weather-webapp",
        "url": "https://moshe002.github.io/weather-webapp/",
    },
    {
        "name": "PrayBook Mobile App",
        "image": PraybookMobile,
        "description": "A mobile version of the PrayBook Webapp",    
        "techStack": [
            "React Native",
            "Tailwind",
            "JavaScript",
            "Firebase"
        ],
        "repository": "https://github.com/moshe002/PrayBook-app-react-native",
        "url": "",
    },
    {
        "name": "HangMan",
        "image": Hangman,
        "description": "A hangman game.",    
        "techStack": [
            "Godot",
            "GDScript"
        ],
        "repository": "https://github.com/moshe002/HangMan_GodotPractice",
        "url": "",
    },
    {
        "name": "Cebu-Map",
        "image": CebuMap,
        "description": "A Cebu map province destination scorer.",    
        "techStack": [
            "JavaScript",
            "React.js",
            "Tailwind",
            "Vite"
        ],
        "repository": "https://github.com/moshe002/cebu-map",
        "url": "https://cebu-map.netlify.app/",
    }
]

//console.log(projects)

function Projects() {

    const { darkMode } = useTheme()

  return (
    <div className={`flex flex-col h-screen relative gap-3 w-full sm:w-[65%] px-3 pb-3 rounded-md ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'}  overflow-y-auto`}>
        <div className={`${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} sticky top-0 pt-3 pb-1`}>
            <h1 className={`font-bold ${darkMode ? 'text-white' : 'text-black'} text-xl`}>Projects I Made</h1>
        </div>
        {
            projects.map((project, index) => {
                return (
                    <div className={`flex flex-col gap-3 p-3 ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-500' : 'bg-white'}  rounded-md`} key={index}>
                        <h1 className="font-bold text-3xl">{project.name}</h1>
                        <p>{project.description}</p>
                        <img className='h-auto w-auto rounded-md border-2' src={project.image} alt="project_img" />
                        <p className="text-lg font-mono"><span className="font-bold font-sans">Techstack:</span> {project.techStack.join(', ')}</p>
                        {
                            project.url === "" ? 
                            <></> 
                            : 
                            <div className="flex items-center gap-2 hover:text-blue-400 duration-150">
                                <div className="pt-1">
                                    <FaLink />
                                </div>
                                <a className="underline" href={project.url} target="_blank" rel="noopener">Project link</a>
                            </div>
                        }
                        <div className="flex items-center gap-2 hover:text-blue-400 duration-150">
                            <div className="pt-1">
                                <RiGitRepositoryCommitsLine />    
                            </div>
                            <a className="underline" href={project.repository} target="_blank" rel="noopener">Project Repository</a>
                        </div>
                        <div className="flex justify-center">
                            <button 
                                title="This doesn't work yet..."
                                className="flex items-center justify-center w-28 gap-1 p-1 rounded-md bg-green-300 hover:bg-green-400 duration-150" 
                                type="button">
                                <h1><AiOutlineLike /></h1>
                                <h1>Like</h1>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Projects