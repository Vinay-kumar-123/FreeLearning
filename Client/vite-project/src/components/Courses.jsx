import React from "react";
import CardCourses from "./CardCourses";
import CoursesJson from "../components/CoursesJson.json"


const Courses = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center my-5 courses">
      {CoursesJson.map((course) => (
        <CardCourses key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
