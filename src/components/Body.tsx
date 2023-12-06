import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import ExperienceSection from "./ExperienceSection"

interface BodyProps {
  renderThis: string;
}

const Body = ({ renderThis } : BodyProps) => {

  //console.log(renderThis)

  const RenderSection = (section:string) => {
    switch(section) {
      case "About":
        return <AboutSection />
      case "Skills":
        return <SkillsSection />
      case "Experience":
        return <ExperienceSection />
    }
  } 

  return (
    <div className="flex justify-center mt-5 pb-5">
      <div className="flex flex-col sm:flex-row gap-7 sm:gap-5 w-[70%]">
        {
          RenderSection(renderThis)
        }        
      </div>   
    </div>
  )
}

export default Body