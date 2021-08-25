import React, { useState } from "react";

const Header = ({title}) => <h3>{title}</h3>

const Button = ({handleClick, text}) => { 
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = (props) => {
  if(props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>Total {props.total}</p>
      <p>Average {props.avg}</p>
      <p>Positive {props.positive}</p>
    </div>
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
  let avg = (neutral * 0 + bad * -1 + good * 1) / total.toFixed(1);
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
