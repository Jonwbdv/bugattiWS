import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home'

import HomeContextProvider from './app/HomeContextProvider'

function App() {

  return (
    <div className='app'>
      <HomeContextProvider>
        <Home/>
      </HomeContextProvider>
    </div>
  )
}

export default App
