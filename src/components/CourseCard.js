import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCourses } from "../context/CoursesContext";

export const CourseCard = ({ course }) => {
  const router = useRouter();
  const { deleteCourse } = useCourses();
  return (
    <div
      style={{ background: "white", color: "black" }}
      onClick={() => router.push(`/edit/${course.id}`)}
    >
      <div>
        <Image
          src={course.image}
          alt="Picture of the author"
          width={400}
          height={227}
        />
      </div>
      <div>
        <div>
          <h2>{course.title}</h2>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm(
              "¿Estás seguro que quieres eliminar este curso?"
            );
            if (accept) deleteCourse(course.id);
          }}
        >
          Borrar
        </button>
        <div>${course.price}</div>
        <div>{course.description}</div>
      </div>
    </div>
  );
};
