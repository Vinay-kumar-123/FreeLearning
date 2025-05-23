import React from "react";
import Heroes from "./Heroes";
import CoursesJson from "../components/CoursesJson.json";
import Courses from "./Courses";
import CardCourses from "./CardCourses";
const Home = () => {
  return (
    <>
      <Heroes />
      <div className="course-heading">
      <div className="coursestext">
        <h1 style={{fontWeight: "bold"}}>Our Courses</h1>
        <p>Explore our curated courses to boost your <span style={{color: "blue"}}>skills and career</span>.Whether you're a beginner or an expert, we hava something for everyone</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        {CoursesJson.slice(0, 6).map((course) => (
          <CardCourses key={course.id} course={course} />
        ))}
      </div>
      </div>
     
    </>
  );
};

export default Home;
