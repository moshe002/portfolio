import { useTheme } from "../context/themeContext"

const languages = [
  {
    "name": "HTML",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "name": "CSS",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    "name": "JavaScript",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    "name": "TypeScript",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    "name": "Godot",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"
  },
  {
    "name": "C#",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  },
  {
    "name": "ASP.NET Core",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
  },
  {
    "name": "PHP",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    "name": "Laravel",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
  },
  {
    "name": "MySQL",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
  },
  {
    "name": "Microsoft SQL Server",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
  },
  {
    "name": "Tailwind",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    "name": "React",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    "name": "Visual Studio",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
  },
  {
    "name": "Visual Studio Code",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  },
  {
    "name": "Git",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    "name": "Github",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    "name": "Gitlab",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
  },
  {
    "name": "Trello",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
  },
  {
    "name": "Docker",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" 
  }
];

const softAndTechnicalSkills = [
  [
    'Computer Literate',
    'Internet Literate',
    'Basic Hardware Troubleshooting',
    'Basic Software Troubleshooting',
    'Basic MS Office Skills',
    '80+ wpm',
  ],
  [
    'Understanding',
    'Disciplined',
    'Fast Learner',
    'Good Time Management',
    'Hardworking',
    'Enthusiastic',
  ]
];

function SkillsSection() {

  const { darkMode } = useTheme()

  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className={`flex flex-col gap-3 p-3 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-500' : 'bg-white'} rounded-md`}>
          <h1 className="font-bold text-2xl">Technical Skills</h1>
            <ul className="list-disc list-inside">
              {
                softAndTechnicalSkills[0].map((skills, i) => {
                  return (
                    <li key={i}>{skills}</li>
                  );
                })
              }
            </ul>
        </div>
        <div className={`flex flex-col gap-3 p-3 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-500' : 'bg-white'} rounded-md`}>
          <h1 className="font-bold text-2xl">Soft Skills</h1>
            <ul className="list-disc list-inside">
              {
                softAndTechnicalSkills[1].map((skills, i) => {
                  return (
                    <li key={i}>{skills}</li>
                  )
                })
              }
            </ul>
        </div>
      </div>
      <div className={`flex flex-col text-center py-3 gap-3 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-500' : 'bg-white'} rounded-md`}>
        <h1 className="font-bold text-sm sm:text-2xl">Technologies/Programming Languages Used</h1>
        <div className="flex flex-wrap gap-5 justify-center">       
        {
          languages.map((language, index) => {
            return(
              <div className="flex flex-col items-center p-5" key={index}>
                <img className="w-20 h-20" src={language.icon} alt="icon" loading="lazy" />
                <h1 className="font-semibold text-lg">{language.name}</h1>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default SkillsSection