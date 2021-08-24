import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Course: {props.course}</h1>
    </div>
  );
};
const Part = (props) => {
  console.log(props.name);
  return (
    <div>
      <p>
        {props.name}, {props.num} exercises!
      </p>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part name={props.p1[0].name} num={props.p1[0].exercises} />
      <Part name={props.p1[1].name} num={props.p1[1].exercises} />
      <Part name={props.p1[2].name} num={props.p1[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total exercises
        {props.p1[0].exercises + props.p1[1].exercises + props.p1[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
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

  return (
    <div>
      <Header course={course.name} />
      <Content p1={course.parts} />
      <Total p1={course.parts} />
    </div>
  );
};

export default App;
