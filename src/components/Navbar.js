"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCourses } from "../context/CoursesContext";

export function Navbar() {
  const router = useRouter();
  const {courses} = useCourses()

  return (
    <header className="flex justify-between items-center bg-white px-28 py-3">
      <Link href="/">
        <h1 className="font-bold text-3xl text-black">LearnDotCOde | Administrador 
        <span className="text-sm ml-5 text-black">{courses.length} cursos</span>
        </h1>
      </Link>

      <div>
        <button onClick={() => router.push("/new")}
          className="bg-verde-proyecto hover:bg-verde-proyecto-sub px-5 py-2 text-black font-bold rounded-sm inline-flex items-center"
        >Añadir curso</button>
      </div>
    </header>
  );
}

export default Navbar;
