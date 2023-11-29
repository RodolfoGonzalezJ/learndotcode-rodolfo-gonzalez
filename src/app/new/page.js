"use client";

import { useEffect } from "react";
import { useCourses } from "../../context/CoursesContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

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
      toast.success("Curso actualizado exitosamente");
    } else {
      createCourse(data.title, data.price, data.description, data.image);
      toast.success("Curso creado exitosamente");
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const courseFound = courses.find((course) => course.id === params.id);
      if (courseFound) {
        setValue("title", courseFound.title);
        setValue("price", courseFound.price);
        setValue("description", courseFound.description);
        setValue("image", courseFound.image);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="bg-background-body p-10"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <h2 className="mb-2">Nuevo Curso</h2>
        <input
          className="bg-white py-3 px-4 mb-2 block focus:outline-none w-full "
          placeholder="Escriba el título"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="block text-red-400 mb-2">
            Este campo es requerido
          </span>
        )}

        <input
          className="bg-white py-3 px-4 mb-2 block focus:outline-none w-full "
          placeholder="Escriba el precio"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <span className="block text-red-400 mb-2">
            Este campo es requerido
          </span>
        )}

        <textarea
          className="bg-white py-3 px-4 mb-2 block focus:outline-none w-full "
          placeholder="Escriba la descripción"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="block text-red-400 mb-2">
            Este campo es requerido
          </span>
        )}

        <input name="image" type="file" />
        <button className="bg-verde-proyecto hover:bg-verde-proyecto-sub px-4 py-2 rounded-sm disabled:opacity-30">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Page;
