import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
        <div className='mastergrid'>
          <div className = "sidebar">

          </div>
          <div className = "main">
              <div className = "dash-title">
                <h1 className='dash-text'>Dashboard</h1>
              </div>
            <div className='course-card-section'>
              <div className='course-card'>
              </div>
            </div>
          </div>
          <div className = "list-right">
          </div>
        </div>
    </>
  )
}

export default App
