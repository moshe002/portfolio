import { useTheme } from "../context/themeContext"

import ProblemSolving from '../assets/certifImages/Basic Problem Solving Certificate.png'
import SQL from '../assets/certifImages/Intro SQL Certificate.jpg'
import CSharpIntroCertif from '../assets/certifImages/introcsharp.jpg'
import CsharpIntermediate from '../assets/certifImages/csharpintermediate.jpg'
import JavaScriptIntro from '../assets/certifImages/introjavascript.png'
import JavaScriptIntermediate from '../assets/certifImages/javascriptintermediate.jpg'
import JQueryCertif from '../assets/certifImages/jquery.jpg'
import PythonIntro from '../assets/certifImages/python.png'
import ReactRedux from '../assets/certifImages/reactredux.jpg'
import ResponsiveWebCertif from '../assets/certifImages/responsiveweb.jpg'
import TechCertif from '../assets/certifImages/tech.jpg'

function ExperienceSection() {
  
  const { darkMode } = useTheme()

  const certificates = [
    ProblemSolving,
    SQL,
    CSharpIntroCertif,
    CsharpIntermediate,
    JavaScriptIntro,
    JavaScriptIntermediate,
    JQueryCertif,
    PythonIntro,
    ReactRedux,
    ResponsiveWebCertif,
    TechCertif
  ]  
  
  return (
    <div className={`flex flex-col gap-5 p-5 w-full h-full ${darkMode ? 'bg-zinc-600' : 'bg-zinc-100'} rounded-md`}>
      <div className="flex flex-col items-center">
        <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-2xl text-center font-bold`}>Certificates</h1>
        <div className="flex flex-wrap justify-evenly gap-4 mt-3">
          {
            certificates.map((certificate, index) => {
              return (
                <div className={`${darkMode ? 'bg-gray-500' : 'bg-white'} p-3 rounded-md`} key={index}>
                  <img 
                    className={`hover:scale-125 duration-150 ${darkMode ? '' : 'border-2 border-gray-300'} sm:w-[85] sm:h-60 rounded-md`} 
                    src={certificate} 
                    alt={certificate} 
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection