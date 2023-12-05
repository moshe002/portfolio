interface ButtonProps {
    text: string,
    color: string
}


const Button = ({ text, color }: ButtonProps) => {
  return (
    <button 
        className={`${color} p-3 h-16 text-white rounded-md font-semibold`} 
        type='button'>
            {text}
    </button>
  )
}

export default Button