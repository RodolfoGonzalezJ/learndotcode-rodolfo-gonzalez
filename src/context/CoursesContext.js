"use client"

import { createContext, useContext } from "react";

export const CourseContext = createContext()

export const useCourses = () => {
    const context = useContext(CourseContext)
    if(!context) throw new Error("useContext must used within a provider")
    return context
} 

export const CourseProvider = ({children}) => {
    const courses = [] 

    return <CourseContext.Provider value = {{courses,}}>
        {children}
    </CourseContext.Provider>
}