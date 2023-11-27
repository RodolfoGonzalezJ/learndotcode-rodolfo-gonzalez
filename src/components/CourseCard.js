import { Image } from "next/image";

export const CourseCard = ({ course }) => {
  return (
    <div>
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
        <div>${course.price}</div>
        <div>{course.description}</div>
      </div>
    </div>
  );
};
