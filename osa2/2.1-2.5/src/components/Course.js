import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => (
        <Part key={id} name={name} exercises={exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, value) => acc + value.exercises, 0);
  return <p>Number of exercises {sum}</p>;
};
export default Course;
