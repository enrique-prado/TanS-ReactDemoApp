import { useState } from 'react'
import './App.css'

function App() {
  const [clickCount, setClickCount] = useState(0)
  return (
    
    <div className="App">
      <div className='App-content'>
        <button type="button" onClick={() => setClickCount(prevCount => prevCount + 1)}>Click me</button>
        <p>You clicked {clickCount} times</p>
      </div>
    </div>
  )
}

export default App
