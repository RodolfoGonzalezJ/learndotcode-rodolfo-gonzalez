import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCourses } from "../context/CoursesContext";
import { toast } from "react-hot-toast";

export const CourseCard = ({ course }) => {
  const router = useRouter();
  const { deleteCourse } = useCourses();
  return (
    <div
      className="bg-white px-5 py-5 cursor-pointer m-2 "
      onClick={() => router.push(`/edit/${course.id}`)}
    >
      <div className="flex justify-between h-5/6 px-28 py-10 gap-2">
        <div>
          <Image
            src={course.image}
            alt="Picture of the author"
            width={400}
            height={227}
          />
        </div>
        <div>
          <h2 className="text-2xl">{course.title}</h2>
          <div className="text-base">${course.price}</div>
        </div>
        <button
          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center h-10 rounded-sm"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm(
              "¿Estás seguro que quieres eliminar este curso?"
            );
            if (accept) {
              deleteCourse(course.id);
              toast.success("Curso eliminado exitosamente");
            }
          }}
        >
          Borrar
        </button>
      </div>
      <div className="h-5/6 px-28 py-2">{course.description}</div>
    </div>
  );
};
