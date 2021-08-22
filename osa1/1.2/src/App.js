import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>Course: {props.course}</h1>
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      {props.name}, {props.num} exercises!
    </div>
  );
};
const Content = () => {
  return (
    <div>
      <Part name="Fundemantels of React" num="10" />
      <br />
      <Part name="Using props to pass data" num="7" />
      <br />
      <Part name="State of a component" num="14" />
    </div>
  );
};

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <div>
      <p> Total number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};
const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
