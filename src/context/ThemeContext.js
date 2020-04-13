import React, { useState } from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider({children}) {
  const localTheme = window.localStorage.getItem('theme')

  let defaultPreference

  if (!localTheme) {
    defaultPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
  } else {
    defaultPreference = localTheme
  }

  const [theme, setTheme] = useState(defaultPreference)

  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light")
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContextProvider, ThemeContext}
