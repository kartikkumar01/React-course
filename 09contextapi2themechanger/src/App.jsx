import { useEffect, useState } from "react"
import {Card} from "./components/Card"
import {ThemeBtn} from "./components/ThemeBtn"
import { ThemeContextProvider } from "./contexts/themeContext"

function App() {
  let [themeMode, setThemeMode] = useState('dark')
  useEffect(()=>{
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode, setThemeMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn /> 
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </ThemeContextProvider>
  )
}

export default App