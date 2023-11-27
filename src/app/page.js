"use client"

import { useCourses } from "../context/CoursesContext";
import { CourseCard } from "../components/CourseCard";

function Page() {
  const {courses} = useCourses();
  return (
    <div>
      {courses.map((course) => (
        <CourseCard course={course} key={course.id}/>
      ))}
    </div>
  );
}

export default Page
