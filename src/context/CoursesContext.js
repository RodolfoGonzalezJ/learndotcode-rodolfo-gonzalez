"use client";

import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CourseContext = createContext();

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error("useContext must used within a provider");
  return context;
};

export const CourseProvider = ({ children }) => {
  const [courses, setCourse] = useState([
    {
      id: "0",
      title: "Curso de HTML5 desde CERO",
      price: 224,
      image: "http://localhost:3000/img/HTML.webp",
      description:
        "¿Quieres hacer una página web con HTML, CSS y JavaScript? Este es el curso de HTML desde cero que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este gran tutorial de HTML5.",
    },
    {
      id: "1",
      title: "Curso de CSS desde CERO",
      price: 994,
      image: "http://localhost:3000/img/CSS.webp",
      description:
        "¿Quieres hacer una página web con HTML, CSS y JavaScript? Este es el curso de CSS desde cero a experto que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este curso de CSS 3, vas a aprender CSS facil.",
    },
    {
      id: "2",
      title: "Curso de JAVASCRIPT desde CERO",
      price: 1000,
      image: "http://localhost:3000/img/JAVASCRIPT.webp",
      description:
        "¿Quieres aprender a programar en Javascript desde cero? Este es el curso de javascript desde cero a experto que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este curso de javascript, vas a aprender javascript fácil.",
    },
    {
      id: "3",
      title: "Curso de REACT.JS desde CERO",
      price: 450,
      image: "http://localhost:3000/img/REACT.webp",
      description:
        "React es una biblioteca de Javascript para crear interfaces web de usuario, tipicamente se usa para crear aplicaciones web frontend. En este curso de React aprenderás las bases necesarias de React como componentes (Components), props, estado (useState), hooks, estilos, useContext, useEffect, ademas de usar otras herramientas como create-react-app, vitejs, tailwindcss, react-icons y otras mas bibliotecas de npm (Nodejs). Este un curso enfocado en principiantes asi que si no sabes nada de React, este es tu punto de partida.",
    },
    {
      id: "4",
      title: "Curso de NEXT.JS desde CERO",
      price: 430,
      image: "http://localhost:3000/img/NEXT.webp",
      description:
        "Aprende las bases de Nextjs, un Framework basado en React y Nodejs que te permite crear aplicaciones web que pueden ser optimizadas para cargar rápidamente y optimizar el SEO (Search Engine optimization) gracias a sus React Server componentes, o renderizado del lado del servidor en unión a una gran cantidad de paquetes que te provee el propio framework para mejorar el rendimiento y facilidad de  integración en un proyecto como sus route Handler que te permiten crear APIs y su sistema basado en archivos para poder crear múltiples rutas fácilmente.",
    },
    {
      id: "5",
      title: "Curso de Tailwind CSS",
      price: 403,
      image: "http://localhost:3000/img/TAILWINDCSS.webp",
      description:
        "TailwindCSS es uno de los Frameworks de CSS o biblioteca de utilidades de CSS más populares actualmente, usándolo puedes añadir estilos fácilmente a tus sitios web, ya sea desde sitios web sencillo usando HTML, CSS o generadores de sitios estáticos (SSG) como Astro, o usando Frameworks como React, Angular, Vue, Svelte. En la practica usar Tailwind es muy similar a escribir reglas de CSS, solo que teniendo nombres faciles de recordar, y que unido a herramientas como PostCSS y extensiones para Visual Studio Code permiten tener un entorno de desarrollo facil para estilizar aplicaciones web.",
    },
    {
      id: "6",
      title: "Curso de SQL desde CERO",
      price: 721,
      image: "http://localhost:3000/img/SQL.webp",
      description:
        "En este curso de SQL desde CERO Completo vas a aprender a manejar SQL, el lenguaje mas usado del mundo para bases de datos relacionales, un lenguaje requisito para cualquier perfil IT.",
    },
    {
      id: "7",
      title: "Curso de Node.Js",
      price: 442,
      image: "http://localhost:3000/img/NODE.webp",
      description:
        "Este es un curso de nodejs enfocado en desarrolladores web Frontend principiantes que ya conocen Javascript y HTML, y ahora quieren empezar con su primer lenguaje de backend. En este curso podras usar todo lo que ya conoces de Javascript del navegador pero ahora usado en la creacion de aplicaciones de servidor. Nodejs es un entorno de ejecución de Javascript o Javascript runtime environment el cual permite ejecutar código no bloqueante en el backend usando Javascript como lenguaje para poder crear herramientas como aplicaciones de consola (CLI), codigo de servidor, aplicaciones desktop o aplicaciones moviles. Gracias a Nodejs el ecosistema de Javascript es tan grande. Ademas al añadir Javascript en el backend (Javascript Server Side) es posible crear aplicaciones completas usando solo un lenguaje (FullStack Javascript).",
    },
  ]);

  const createCourse = (title, price, description) =>
    setCourse([
      ...courses,
      {
        title,
        price,
        description,
        image: "http://localhost:3000/imagen de prueba.jfif",
        id: uuid(),
      },
    ]);

  const deleteCourse = (id) =>
    setCourse([...courses.filter((course) => course.id !== id)]);

  const updateCourse = (id, newData) =>
    setCourse([
      ...courses.map((course) =>
        course.id === id ? { ...course, ...newData } : course
      ),
    ]);

  return (
    <CourseContext.Provider
      value={{ courses, createCourse, deleteCourse, updateCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};
