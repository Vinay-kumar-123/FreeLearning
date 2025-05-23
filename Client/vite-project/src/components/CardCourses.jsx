import React from "react";

const CardCourses = ({ course }) => {
  if (!course) return null;

  return (
    <div className="card m-3 shadow-sm" style={{ width: "22rem" }}>
      
      <div className="ratio ratio-16x9">
        <iframe
          src={`https://www.youtube.com/embed/${course.videoId}`}
          title={course.title}
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>

      
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">
          By <strong>{course.instructor}</strong><br />
          Language: {course.language}
        </p>

        
        <div className="mb-2">
          {course.tags &&
            course.tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-1">{tag}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardCourses;
