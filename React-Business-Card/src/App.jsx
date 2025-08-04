import { useState } from 'react'
import Footer from './Components/Footer'
import Main from './Components/Main'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
