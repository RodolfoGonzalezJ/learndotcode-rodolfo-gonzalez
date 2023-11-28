"use client";

import { createContext, useContext } from "react";

export const CourseContext = createContext();

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error("useContext must used within a provider");
  return context;
};

export const CourseProvider = ({ children }) => {
  const courses = [
    {
      id: 0,
      title: "Curso de HTML5 desde CERO",
      price: 224,
      image: "",
      description:
        "¿Quieres hacer una página web con HTML, CSS y JavaScript? Este es el curso de HTML desde cero que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este gran tutorial de HTML5.",
    },
    {
      id: 1,
      title: "Curso de CSS desde CERO",
      price: 994,
      image: "",
      description:
        "¿Quieres hacer una página web con HTML, CSS y JavaScript? Este es el curso de CSS desde cero a experto que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este curso de CSS 3, vas a aprender CSS facil.",
    },
    {
      id: 2,
      title: "Curso de JAVASCRIPT desde CERO",
      price: 1000,
      image: "",
      description:
        "¿Quieres aprender a programar en Javascript desde cero? Este es el curso de Javascript desde cero a experto que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este curso de javascript, vas a aprender javascript fácil.",
    },
  ];

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
};
