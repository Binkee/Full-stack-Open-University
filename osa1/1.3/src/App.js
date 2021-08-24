import React from "react";

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Course: {props.course}</h1>
    </div>
  );
};
const Part = (props) => {
  console.log(props.name)
  return (
    <div>
      <p>{props.name}, {props.num} exercises!</p>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <p>{props.p1} {props.e1} exercises!</p>
      <p>{props.p2} {props.e2} exercises!</p>
      <p>{props.p3} {props.e3} exercises!</p>
    </div>
  );
};

const Total = (props) => {
 
  return (
    <div>
      <p> Total number of exercises {props.nE + props.nE2 + props.nE3}</p>
    </div>
  );
};

  const App = (props) => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  console.log(part1)
  

  return (
    <div>
      <Header course={course} />
      <Content p1={part1.name} e1={part1.exercises} p2={part2.name} e2={part2.exercises} p3={part3.name} e3={part3.exercises}/>
      <Total nE={part1.exercises} nE2={part2.exercises} nE3={part3.exercises}/>
    </div>
  );
};

export default App;
