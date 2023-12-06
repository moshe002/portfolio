// import { createContext, useState } from 'react'

// interface DarkModeContextProps {
//     darkMode: boolean
//     toggleDarkMode: () => void
// }

// const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined)

// const DarkModeProvider = (props:any) => {
//     const [darkMode, setDarkMode] = useState(false)
    
//     const toggleDarkMode = () => setDarkMode(!darkMode)
//     return (
//         <div>
//             <DarkModeContext.Provider value={{darkMode, toggleDarkMode }}>
//                 {props.children}
//             </DarkModeContext.Provider>
//         </div>
//     ) 
// }

// export {DarkModeContext, DarkModeProvider}

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
