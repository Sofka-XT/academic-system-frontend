import { useState, useEffect } from 'react';

export const useCourseState = (courses, params) => {
  const [course, setCourse] = useState(
    courses.filter((courseData) => courseData.id === params.courseId)[0]
  );

  useEffect(() => {
    setCourse(
      courses.filter((courseData) => courseData.id === params.courseId)[0]
    );
  }, [courses, params.courseId]);

  return {
    course,
  };
};
