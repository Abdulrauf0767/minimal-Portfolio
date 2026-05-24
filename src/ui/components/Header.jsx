import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skill", href: "#skill" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden font-sans"
    >
      {/* ───────── BORDER FRAME ───────── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none p-3 md:p-5 lg:p-6">
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
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* ───────── FIXED HEADER ───────── */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scroll
              ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          
          {/* NAV CONTAINER */}
          <div className="relative h-[95px] flex items-center justify-between">
            
            {/* ───────── LEFT LOGO ───────── */}
            <div className="z-50">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.18em] uppercase">
                Abdul Rauf
              </h1>
            </div>

            {/* ───────── DESKTOP NAV ───────── */}
            <nav
              className="
                hidden lg:flex
                absolute
                top-[18px]
                right-[40px]
                items-center
                gap-2
                xl:gap-3
              "
            >
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`
                    relative
                    text-[10px] xl:text-[11px]
                    uppercase
                    tracking-[0.22em]
                    px-4 xl:px-5
                    py-2.5
                    rounded-full
                    transition-all
                    duration-300
                    whitespace-nowrap
                    ${
                      item.name === "Home"
                        ? "bg-white text-black font-semibold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* ───────── MOBILE MENU BUTTON ───────── */}
            <button
              onClick={() => setOpen(!open)}
              className="
                lg:hidden
                z-50
                w-11
                h-11
                flex
                items-center
                justify-center
                border
                border-white/10
                rounded-full
                backdrop-blur-md
              "
            >
              {open ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ───────── MOBILE MENU ───────── */}
      <div
        className={`
          fixed top-0 right-0 w-full sm:w-[380px] h-screen
          bg-black/95 backdrop-blur-2xl
          border-l border-white/10
          z-40
          transition-all duration-500
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
      >
        <div className="flex flex-col pt-28 px-8 gap-3">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`
                w-full
                text-sm
                uppercase
                tracking-[0.25em]
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                ${
                  item.name === "Home"
                    ? "bg-white text-black font-semibold"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* ───────── HERO SECTION ───────── */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16">
        <Hero />
      </main>
    </section>
  );
};

export default Header;