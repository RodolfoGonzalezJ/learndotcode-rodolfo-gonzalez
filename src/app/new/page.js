"use client";

import { useState, useEffect } from "react";
import { useCourses } from "../../context/CoursesContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Page({ params }) {
  const { courses, createCourse, updateCourse } = useCourses();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateCourse(params.id, data);
    } else {
      createCourse(
        data.title,
        data.price,
        data.description,
        data.image
      );
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const courseFound = courses.find((course) => course.id === params.id);
      if (courseFound){
        setValue('title', courseFound.title)
        setValue('price', courseFound.price)
        setValue('description', courseFound.description)
        setValue('image', courseFound.image)
      }
    }
  }, []);

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <input
        placeholder="Escriba el título"
        {...register("title", { required: true })}
      />
      {errors.title && <span>Este campo es requerido</span>}

      <input
        placeholder="Escriba el precio"
        {...register("price", { required: true })}
      />
      {errors.price && <span>Este campo es requerido</span>}

      <textarea
        placeholder="Escriba la descripción"
        {...register("description", { required: true })}
      />
      {errors.description && <span>Este campo es requerido</span>}

      <input
        name="image"
        type="file"
      />
      <button>Guardar</button>
    </form>
  );
}

export default Page;
