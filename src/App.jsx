import React from "react";
import Header from "./ui/components/Header";
import AboutMe from "./ui/components/AboutMe";
import Project from "./ui/components/Project";
import Skills from "./ui/components/Skills";
import Experience from "./ui/components/Experience";
import Contact from "./ui/components/Contact";
import Footer from "./ui/components/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main className="bg-[#0E0E0E] text-white">

        <AboutMe />

        <Project />

        <Skills />

        <Experience />

        <Contact />

        <Footer />

      </main>
    </>
  );
};

export default App;