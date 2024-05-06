import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

function BtnTheme() {
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("darkmode", theme)
  }, [theme])

  function handleMode() {
    setTheme((prevTheme) => !prevTheme)
  }
  return (
    <button
      type="button"
      onClick={handleMode}
      aria-pressed={theme ? "true" : "false"}
      aria-label="Toggle dark theme"
    >
      {theme ? (
        <MdDarkMode aria-hidden="true" />
      ) : (
        <MdLightMode aria-hidden="true" />
      )}
      <span>Darkmode: {theme ? "on" : "off"}</span>
    </button>
  )
}

export default BtnTheme
