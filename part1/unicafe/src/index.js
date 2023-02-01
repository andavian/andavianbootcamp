import React, { useState } from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Name = (props) => <h2>Statistics</h2>;
const Statistic = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};
const Statistics = ({ g, n, b }) => {
  const all = g + n + b;
  const average = (g - b) / all;
  const positive = (g / all) * 100;
  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <Statistic text="good" value={g} />
        <Statistic text="neutral" value={n} />
        <Statistic text="bad" value={b} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </div>
    );
  }
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Name />
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  );
};

ReactDOM.render(<App tab="home" />, rootElement);
