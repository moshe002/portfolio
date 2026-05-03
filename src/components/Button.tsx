import MyCV from '../assets/mosesfat_resume.pdf'

interface ButtonProps {
    icon: React.ReactNode,
    color: string
}

const Button = ({ icon, color }: ButtonProps) => {

  return (
    <a 
      title="Download CV/Resume"
      download={true}
      href={MyCV}
      className={`flex justify-around items-center w-40 mt-2 sm:mt-0 ${color} p-3 text-white rounded-full font-semibold text-center`} 
    >
      <span>{icon}</span> Download CV
    </a>
  )
}

export default Button