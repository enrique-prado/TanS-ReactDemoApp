import { useState } from 'react'
import {StringsView} from './StringsView'
import './App.css'

function App() {
  const [clickCount, setClickCount] = useState(0)
  return (
    
    <div className="App">
      <header className="App-header">
        This is a Header
      </header>
      <div className='App-content'>
        <button type="button" onClick={() => setClickCount(prevCount => prevCount + 1)}>Click me</button>
        <p>You clicked {clickCount} times</p>
        <StringsView />
      </div>
    </div>
  )
}

export default App
