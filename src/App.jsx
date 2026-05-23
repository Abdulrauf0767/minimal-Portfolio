import React from 'react'
import Header from './ui/components/Header'
import AboutMe from './ui/components/AboutMe'
import Skills from './ui/components/Skills'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <AboutMe/>
        <Skills/>
      </main>
    </>
  )
}

export default App