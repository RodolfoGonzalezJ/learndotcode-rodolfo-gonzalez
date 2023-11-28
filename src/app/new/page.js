"use client";

import { useState } from "react";
import { useCourses } from "../../context/CoursesContext";
import { useRouter } from "next/navigation";

function Page() {
  const [course, setCourse] = useState();
  const {createCourse} = useCourses()
  const router = useRouter()

  const handleChange = (e) =>
    setCourse({ ...course, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse(course.title, course.price, course.description, course.image)
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        name="title"
        placeholder="Escriba el titulo"
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Escriba el precio"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Escriba la descripcion"
        onChange={handleChange}
      />
      <input name="image" type="file" onChange={handleChange} />
      <button>Guardar</button>
    </form>
  );
}

export default Page;
