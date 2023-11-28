"use client";

import { useState, useEffect } from "react";
import { useCourses } from "../../context/CoursesContext";
import { useRouter } from "next/navigation";

function Page({params}) {
  const [course, setCourse] = useState({
    title: "",
    price: "",
    description: "",
    image: ""
  });
  const { courses, createCourse } = useCourses();
  const router = useRouter();

  const handleChange = (e) =>
    setCourse({ ...course, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id){
      console.log("editando")
    } else {
      createCourse(course.title, course.price, course.description, course.image);
    }
    
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const courseFound = courses.find((course) => course.id === params.id);
      if (courseFound)
        setCourse({
          title: courseFound.title,
          price: courseFound.price,
          description: courseFound.description,
        });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        name="title"
        placeholder="Escriba el titulo"
        onChange={handleChange}
        value={course.title}
      />
      <input
        name="price"
        placeholder="Escriba el precio"
        onChange={handleChange}
        value={course.price}
      />
      <textarea
        name="description"
        placeholder="Escriba la descripcion"
        onChange={handleChange}
        value={course.description}
      />
      <input
        name="image"
        type="file"
        onChange={handleChange}
        value={course.image}
      />
      <button>Guardar</button>
    </form>
  );
}

export default Page;
