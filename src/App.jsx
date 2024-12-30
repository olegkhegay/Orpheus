import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Preloader from './components/Preloader/Preloader'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <Preloader /> : <Header theme={theme} setTheme={setTheme} />}
    </>
  )
}

export default App