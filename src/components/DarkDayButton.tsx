import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from '../context/themeContext'

function DarkDayButton() {

    const { darkMode, toggleDarkMode } = useTheme()

    return (
        <>
            <div className={`flex relative h-10 sm:h-auto w-20 items-center ${darkMode ? 'bg-slate-800' : 'bg-slate-300'} rounded-full`}>
                <button 
                    type='button'
                    onClick={toggleDarkMode} 
                    className={`${darkMode ? 'left-9 bg-neutral-400' : 'left-0 bg-yellow-300' } absolute text-center p-3 border-2 rounded-full duration-150`}
                    >
                    {
                        darkMode ? <BsMoon /> : <BsSun />
                    }
                </button>
            </div>
        </>
    )
}

export default DarkDayButton