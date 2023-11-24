"use client"

import { useCourses } from "../../context/CoursesContext";

function Page() {
  const {courses} = useCourses()
  console.log(courses)
  return (
    

    <div>About page</div>
  )
}

export default Page