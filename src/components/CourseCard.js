import Image from "next/image";
import { useRouter } from "next/navigation";

export const CourseCard = ({ course }) => {
  const router = useRouter();

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
        <button>Borrar</button>
        <div>${course.price}</div>
        <div>{course.description}</div>
      </div>
    </div>
  );
};
