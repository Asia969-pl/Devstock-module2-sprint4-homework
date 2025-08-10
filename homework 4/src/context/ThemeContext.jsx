import { createContext, useState } from 'react'
import { colorThemes } from '../assets/colorThemes'

export const ThemeContext = createContext(null)//obiekt


export const ThemeProvider = ({ children }) => {//komponent wykorzystujący obiekt 
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };
  
  const themeMode = darkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeMode}}>
      {children} 
    </ThemeContext.Provider>
  )
}
