import React from "react";
import ReactDOM from "react-dom";
import courses from "./Component/Courses";
import Course from "./Component/Course";

const App = () => {
  return (
    <ul>
      {courses.map((courses) => {
        return <Course key={courses.id} courses={courses} />;
      })}
    </ul>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
