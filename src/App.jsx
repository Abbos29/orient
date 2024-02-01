import React from 'react'

import Header from './components/Header/Header'


import './Reset.scss'
import './App.scss'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />

    </>
  )
}

export default App