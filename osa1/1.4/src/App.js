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
      {props.p1}
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
      <Total/>
    </div>
  );
};

export default App;
