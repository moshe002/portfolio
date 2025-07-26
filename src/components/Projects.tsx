import { FaLink } from "react-icons/fa6";
import { useTheme } from "../context/themeContext";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { projects } from "../data/projects";
import { en } from "../localization/en";

function Projects() {

    const { darkMode } = useTheme()

  return (
    <div className={`flex flex-col h-screen relative gap-3 w-full sm:w-[65%] px-3 pb-3 rounded-md ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'}  overflow-y-auto`}>
        <div className={`${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'} sticky top-0 pt-3 pb-1`}>
            <h1 className={`font-bold ${darkMode ? 'text-white' : 'text-black'} text-xl`}>{en.projects.projects_i_made}</h1>
        </div>
        {
            projects.map((project, index) => {
                return (
                    <div className={`flex flex-col gap-3 p-3 ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-600' : 'bg-white'}  rounded-md`} key={index}>
                        <h1 className="font-bold text-3xl">{project.name}</h1>
                        <p>{project.description}</p>
                        <img className='h-auto w-auto rounded-md border-2' src={project.image} alt="project_img" loading="lazy" />
                        <p className="text-lg font-mono"><span className="font-bold font-sans">{en.projects.techstack}</span> {project.techStack.join(', ')}</p>
                        {
                            project.url === "" ? 
                            <></> 
                            : 
                            <div className="flex items-center gap-2 hover:text-blue-400 duration-150">
                                <div className="pt-1">
                                    <FaLink />
                                </div>
                                <a className="underline" href={project.url} target="_blank" rel="noopener">{en.projects.project_link}</a>
                            </div>
                        }
                        <div className="flex items-center gap-2 hover:text-blue-400 duration-150">
                            <div className="pt-1">
                                <RiGitRepositoryCommitsLine />    
                            </div>
                            <a className="underline" href={project.repository} target="_blank" rel="noopener">{en.projects.project_repository}</a>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Projects