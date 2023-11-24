// import { useState } from 'react'
import Landing from './Views/Landind'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
         <Route path={'/'} element={<Landing />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
