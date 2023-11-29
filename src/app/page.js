"use client";

import { useCourses } from "../context/CoursesContext";
import { CourseCard } from "../components/CourseCard";

function Page() {
  const { courses } = useCourses();
  return (
    <div className="flex justify-center gap-10 bg-background-body">
      <div className="w-7/12 ">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

export default Page;
