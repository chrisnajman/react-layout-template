import { useState, useEffect } from "react"

function BtnTheme() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  )

  useEffect(() => {
    document.documentElement.classList.toggle("lightmode", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  function handleMode() {
    setTheme((prevTheme) => !prevTheme)
  }
  return (
    <div className="theme-toggler">
      <p className="light">
        Light
        <span className="visually-hidden">
          {theme ? " theme active" : " theme inactive"}
        </span>
      </p>
      <button
        type="button"
        onClick={handleMode}
        aria-pressed={theme ? "false" : "true"}
        aria-label="Toggle theme"
      >
        <span></span>
      </button>
      <p className="dark">
        Dark
        <span className="visually-hidden">
          {theme ? " theme inactive" : " theme active"}
        </span>
      </p>
    </div>
  )
}

export default BtnTheme
