import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./ThemeContext";

// Static projects data
const STATIC_PROJECTS = [
  {
    title: "Movie Recommendation System",
    description: "A content-based movie recommendation system using TF-IDF and cosine similarity to suggest relevant movies. Deployed using Flask for real-time recommendations.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
    githubLink: "https://github.com/Niraj-patel62/Movie-Recommender-System-Using-Machine-Learning.git",
     
    image: null,
  },
  {
    title: "Culture Festival Website",
    description: "A modern and responsive web application built to showcase and manage cultural festival events. The project provides an interactive user interface for exploring festival details, multimedia content, and event information with smooth navigation and dynamic components.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    image: null,
     
    githubLink: "https://github.com/Niraj-patel62/CultureFestivalWebsite",
  
},


  {
    title: "Air Monitoring System",
    description: "A web-based air monitoring system designed to visualize and analyze air quality data. The project focuses on environmental awareness by presenting pollution-related parameters through a clean and responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Niraj-patel62/air-monitoring-system",
     
    image: null,
  },
  {
    title: "Deadlock Detection and Prevention System",
    description: "A system-level project implementing classic deadlock detection and prevention algorithms used in operating systems. The project simulates resource allocation and process execution to demonstrate safe and unsafe states.",
    tech: ["C / C++", "Operating System Concepts"],
    githubLink: "https://github.com/krohitt45/Deadlock-Detection-and-Prevention",
     
    image: null,
  },
   
];

export default function App() {
  const [projects] = useState(STATIC_PROJECTS);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { theme } = useTheme();
  const containerClass = theme === "dark"
    ? "relative bg-slate-950 text-slate-100"
    : "relative bg-white text-slate-900";

  return (
    <main className={containerClass}>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Static Data Network Visualization (performance optimized) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M 0 200 Q 200 100 400 200 T 800 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 100 400 Q 300 300 500 400 T 900 400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M 1400 300 Q 1200 200 1000 300 T 600 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-40"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      </div>
      
      {/* Static Background Layers (performance optimized) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(139,92,246,0.08),transparent_40%)]" />
      </div>

      {/* Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Certifications />
      <Contact />
      <Footer />
      
    </main>
  );
}
