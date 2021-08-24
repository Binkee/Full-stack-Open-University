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
      {props.p1.map(elem => (
        <p>{elem.name} {elem.exercises} </p>
      ))}
      
    </div>
  );
};

const Total = (props) => {
  const total = props.p1.reduce(
    (a, b) => a + b.exercises,
    0
  );
  return (
    <div>
      <p>Total Exercises: {total}</p>
      
    </div>
  );
};

  
    const App = () => {
      const course = 'Half Stack application development'
    
      const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {

          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]

  return (
    <div>
      
    
      <Header course={course} />
      <Content p1={parts} />
      <Total p1={parts}/>
    </div>
  );
};

export default App;
