import { useState } from 'react'
import './style.css'


function App() {
  const [name, setName] = useState("Shuvo")

  return(
    <input type="text" className='input' value={name} onChange={e => setName(e.target.value)}/>
  )
}

export default App
