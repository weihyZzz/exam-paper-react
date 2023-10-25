import React from 'react'
import type { MouseEvent } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>, name: string) => {
    event.preventDefault()
    console.log('click.', name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            handleClick(e, 'weihy')
          }}
        >
          Click
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
