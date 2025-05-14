import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Contributions from "./components/Contributions";

const App = () => {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Contributions />
        <Experience />
        <Certifications />
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
};

export default App;
