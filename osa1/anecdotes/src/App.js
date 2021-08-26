import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const clickHandler = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };
  const voteHandler = () => {
    let newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
    console.log("this are new votes" + newVotes);
  };
  const maxVotes = () => {
    let maxNum = 0;
    let index = 0;
    votes.forEach((e, i) => {
      if (e > maxNum) {
        maxNum = e;
        index = i;
      }
    });
    return index;
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <button onClick={voteHandler}>Vote</button>
      <button onClick={clickHandler}>Random Anecdote</button>
      <h3>anecdotes with most votes</h3>
      <p>
        {anecdotes[maxVotes()]} {votes[maxVotes()]} votes
      </p>
    </div>
  );
};

export default App;
