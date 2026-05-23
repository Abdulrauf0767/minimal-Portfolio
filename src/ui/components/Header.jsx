import React from 'react'
import Hero from './Hero'

const Header = () => {
  return (
    <div className="relative w-full min-h-screen  text-white overflow-hidden select-none font-sans">
      
      {/* ─── FIXED ROUNDED TECH BORDER FRAME ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none p-4 md:p-6">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 40 120 
              L 1240 120 
              Q 1260 120, 1275 100
              L 1315 50 
              Q 1330 30, 1350 30
              L 1880 30
              L 1880 1040
              L 180 1040
              Q 155 1040, 140 1025
              L 55 940
              Q 40 925, 40 900
              Z
            "
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* ─── CONTENT LAYOUT STRUCTURE ─── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto min-h-screen flex flex-col justify-between p-12 md:p-16">
        
        {/* Header Navigation Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pt-4">
          {/* Main Title Group */}
          <div className="pl-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase">
              Abdul Rauf
            </h1>
          </div>

          {/* Navigation Controls */}
          <nav className="flex items-center gap-4 mt-2 md:mt-0 pr-12">
            <a 
              href="#home" 
              className="bg-white text-black font-semibold px-6 py-2 rounded-full text-xs uppercase tracking-wider transition hover:bg-neutral-200"
            >
              Home
            </a>
            <a 
              href="#work" 
              className="text-neutral-400 font-medium px-4 py-2 text-xs uppercase tracking-wider transition hover:text-white"
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-neutral-400 font-medium px-4 py-2 text-xs uppercase tracking-wider transition hover:text-white"
            >
              About
            </a>
          </nav>
        </header>

        {/* Hero Central Layout */}
        <main className="flex-1 flex flex-col items-center justify-center relative">
        <Hero/>
        </main>

      </div>
    </div>
  )
}

export default Header
