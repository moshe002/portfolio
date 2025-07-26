import MyCV from '../assets/resume_moses_anthony_fat.pdf'

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
      className={`w-12 mt-2 sm:mt-0 ${color} p-3 text-white rounded-full font-semibold text-center`} 
    >
      {icon}
    </a>
  )
}

export default Button