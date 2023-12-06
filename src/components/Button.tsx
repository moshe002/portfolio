import MyCV from '../assets/MosesFat_Resume.pdf'

interface ButtonProps {
    text: string,
    color: string
}

const Button = ({ text, color }: ButtonProps) => {

  return (
    <a 
      download={true}
      href={MyCV}
      className={`mt-2 sm:mt-0 ${color} p-3 text-white rounded-md font-semibold text-center`} 
    >
      {text}
    </a>
  )
}

export default Button