import MyCV from '../assets/MosesFat_Resume.pdf'

interface ButtonProps {
    icon: React.ReactNode,
    color: string
}

const Button = ({ icon, color }: ButtonProps) => {

  return (
    <a 
      download={true}
      href={MyCV}
      className={`w-12 mt-2 sm:mt-0 ${color} p-3 text-white rounded-full font-semibold text-center`} 
    >
      {icon}
    </a>
  )
}

export default Button