import React from "react";
import ReactDOM from "react-dom";

const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Header = ({ course }) => <h1>{course}</h1>;
const Part = (props) => {
  return (
    <p>
      <em>{props.part}</em> cantidad de ejercicios{" "}
      <strong>{props.exercises}</strong>
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};
const Total = (props) => {
  return <p>Total de ejercicios {props.total}</p>;
};

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
