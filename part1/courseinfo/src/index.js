import React from "react";
import ReactDOM from "react-dom";

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};
const Header = ({ course }) => <h1>{course.name}</h1>;
const Part = (props) => {
  return (
    <p>
      <em>{props.name}</em> cantidad de ejercicios{" "}
      <strong>{props.exercises}</strong>
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  );
};
const Total = (props) => {
  const sum =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return <p>Total de ejercicios {sum}</p>;
};

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
