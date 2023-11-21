import { useState } from 'react'
import Landing from './Views/Landind'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Route path={'/'} element={<Landing />} />
    </>
  )
}

export default App
