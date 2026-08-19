import { useState } from "react";
import { useTheme } from "../context/themeContext";
import { skills } from "../data/skills";

type Skills = {
  name: string,
  icon: string
}

function SkillsSection() {

  const [skill, setSkill] = useState<Skills[]>(skills.Languages);
  const [selectedSkill, setSelectedSkill] = useState<string>('Languages');
  const { darkMode } = useTheme();

  const onSelectSkills = (skill: string) => {
    setSelectedSkill(skill);
    setSkill(skills[skill as keyof typeof skills]);
  };

  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'} rounded-md`}>
      <div className={`flex flex-col gap-5 ${darkMode ? 'text-gray-400' : 'text-black'} sm:flex-row gap-5`}>
        {
          Object.keys(skills).map((key, i) => {
            return (
              <button onClick={() => onSelectSkills(key)} 
                key={i} 
                className={`${selectedSkill == key ? "bg-gray-300 text-black" : "" } p-3 font-semibold hover:bg-gray-300 rounded-md duration-150`}
              >
                {key}
              </button>
            )
          })
        }
      </div>
      <div className={`flex flex-wrap gap-5 justify-center ${darkMode ? 'text-gray-400 bg-zinc-900' : 'text-black bg-white'} rounded-md`}>
        {
          skill.map((val, i) => {
            return (
              <div key={i} className="flex flex-col items-center p-5">
                <img src={val.icon} className="w-20 h-20" alt={val.name} loading="lazy" />
                <h1 className="font-semibold text-lg text-center">{val.name}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SkillsSection