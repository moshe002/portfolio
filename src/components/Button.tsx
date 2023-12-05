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
      className={`${color} p-3 text-white rounded-md font-semibold`} 
    >
      {text}
    </a>
  )
}

export default Button