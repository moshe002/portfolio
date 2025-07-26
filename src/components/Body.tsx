import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import CertificatesSection from "./Certificates"
// import Blog from "./Blog";

type BodyProps = {
  renderThis: string;
}

const Body = ({ renderThis } : BodyProps) => {

  const RenderSection = (section:string) => {
    switch(section) {
      case "About":
        return <AboutSection />
      case "Skills":
        return <SkillsSection />
      case "Experience":
        return <CertificatesSection />
      // case "Blog":
      //   return <Blog />
      default:
        console.error(`Unknown section: ${section}`);
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