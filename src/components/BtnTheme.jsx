import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

function BtnTheme() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("lightmode", theme)
  }, [theme])

  function handleMode() {
    setTheme((prevTheme) => !prevTheme)
  }
  return (
    <button
      type="button"
      onClick={handleMode}
      aria-pressed={theme ? "false" : "true"}
      aria-label="Toggle theme"
    >
      {theme ? (
        <MdLightMode aria-hidden="true" />
      ) : (
        <MdDarkMode aria-hidden="true" />
      )}
      <span>Darkmode: {theme ? "off" : "on"}</span>
    </button>
  )
}

export default BtnTheme
