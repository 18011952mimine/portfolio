import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  const project1 = {
    title: "ASSURANCE DE QUALITÉ LOGICIEL: GESTION DE COMMANDE DANS UN MAGASIN",
    description: "Ce projet représente le développement d'un système avancé de gestion de commandes pour un magasin de détail. L'application logicielle est conçue pour optimiser et simplifier les processus liés aux clients, aux produits, aux commandes et à la gestion globale du magasin.",
    technologies: ["C#", "Modelisation"]
  };

  const project2 = {
    title: "Developpement d'une site web pour la gestion des projets",
    description: "Ce projet représente le développement d'un site web pour la gestion des projets. L'application logicielle est conçue pour optimiser et simplifier les processus liés aux clients, aux produits, aux commandes et à la gestion globale du magasin.",
    technologies: ["HTML", "CSS", "JavaScript"]
  };

  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project1" element={<Project {...project1} />} />
        <Route path="/project2" element={<Project {...project2} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;