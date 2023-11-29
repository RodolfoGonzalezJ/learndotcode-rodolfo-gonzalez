"use client";

import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../Hook/useLocalStorage";

export const CourseContext = createContext();

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error("useContext must used within a provider");
  return context;
};

export const CourseProvider = ({ children }) => {
  const [courses, setCourse] = useLocalStorage("courses", []);

  const createCourse = (title, price, description) =>
    setCourse([
      ...courses,
      {
        title,
        price,
        description,
        image: "http://localhost:3000/imagen de prueba.jpg",
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
