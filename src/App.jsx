import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaksManager from './components/Taks/TaksManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaksManager />
    </>
  )
}

export default App
