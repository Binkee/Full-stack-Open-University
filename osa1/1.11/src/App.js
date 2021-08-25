import React, { useState } from "react";

const Header = ({ title }) => <h3>{title}</h3>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Scores = ({ text, scores }) => (
  <tr>
    <th>{text}</th>
    <td>{scores}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total, avg, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <br />
        <Scores text="Good" scores={good} />
        <Scores text="Neutral" scores={neutral} />
        <Scores text="Bad" scores={bad} />
        <Scores text="Total" scores={total} />
        <Scores text="Average" scores={avg} />
        <Scores text="Positive" scores={positive} />
      </tbody>
    </table>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => setGood(good + 1);
  const incNeutral = () => setNeutral(neutral + 1);
  const incBad = () => setBad(bad + 1);

  let total = good + neutral + bad;
  let avg = (neutral * 0 + bad * -1 + good * 1) / total;
  let positive = (good / total) * 100;

  return (
    <div>
      <Header title="Give Feedback" />
      <Button handleClick={incGood} text="Good" />
      <Button handleClick={incNeutral} text="Neutral" />
      <Button handleClick={incBad} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        positive={positive}
      />
    </div>
  );
};

export default App;
