import React from "react";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};
const Part = ({ name, exercises }) => {
  return (
    <li>
      <p>
        <em>{name}</em> cantidad de ejercicios <strong>{exercises}</strong>
      </p>
    </li>
  );
};

const Total = ({ parts }) => {
  const total = parts
    .map((item) => item.exercises)
    .reduce((counter, item) => {
      return counter + item;
    });

  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((parts) => (
        <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
      ))}
      <Total parts={parts} />
    </ul>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <Header name={courses.name} />
      <Content parts={courses.parts} />
    </div>
  );
};

export default Course;
