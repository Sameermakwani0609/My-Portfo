import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg flex flex-col">
        <Navbar />
        <ScrollToTop />

        {/* Updated padding here for responsive spacing */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero">
                    <Hero />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="experience">
                    <Experience />
                  </section>
                  <section id="education">
                    <Education />
                  </section>
                  <section id="skills">
                    <Skills />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  <section id="achievements">
                    <Achievements />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
