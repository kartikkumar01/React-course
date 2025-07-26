import { useContext } from "react";
import { createContext } from "react";

const themeContext = createContext({
    themeMode : 'light',
    setThemeMode : () => {}
})

export const ThemeContextProvider = themeContext.Provider

export const useThemeContext = () => useContext(themeContext)