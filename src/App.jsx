import React from 'react'

import Header from './components/Header/Header'


import './Reset.scss'
import './App.scss'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Video from './components/Video/Video'
import Benefits from './components/Benefits/Benefits'
import Form from './components/Form/Form'
import Blank from './components/Blank/Blank'
import Contacts from './components/Contacts/Contacts'
import Maps from './components/Maps/Maps'
import Footer from './components/Footer/Footer'
// import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Services />
      {/* <Projects /> */}
      <Video />
      <Benefits />
      <Form />
      <Blank />
      <Contacts />
      <Maps />
      <Footer />
    </>
  )
}

export default App