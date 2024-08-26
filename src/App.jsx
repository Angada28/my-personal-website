import { useState, useEffect } from 'react'
import './App.css'
import {Contact, Projects, Experience, Hero} from "./components"

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <div className="card">
        <button onClick={toggleTheme}>
          Toggle to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
      </div>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App