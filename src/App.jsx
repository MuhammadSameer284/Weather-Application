import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import Nav from './Components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Index />}/>
      </Routes>

    </>
  )
}

export default App
