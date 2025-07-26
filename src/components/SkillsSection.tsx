import { useTheme } from "../context/themeContext";
import { languages } from "../data/languages";
import { softAndTechnicalSkills } from "../data/softAndTechnicalSkills";
import { en } from "../localization/en";

function SkillsSection() {

  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-max ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className={`flex flex-col gap-3 p-3 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-md`}>
          <h1 className="font-bold text-2xl">{en.skill_section.technical_skills}</h1>
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
        <div className={`flex flex-col gap-3 p-3 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-md`}>
          <h1 className="font-bold text-2xl">{en.skill_section.soft_skills}</h1>
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
      <div className={`flex flex-col text-center py-3 gap-3 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-md`}>
        <h1 className="font-bold text-sm sm:text-2xl">{en.skill_section.technologies_prog_lang_used}</h1>
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