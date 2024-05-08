
const Header = ({course}) => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
        <div>
          <p>{part.name} {part.exercises}</p>
          </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
          {parts.map(part => 
            <Part key={part.id} part={part} />
          )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
  
  const totalExercises = parts.reduce(
    (sum, part) => sum + part.exercises,
    0,
  );
  
    return (
      <div>
        <b>total of {totalExercises} exercises</b>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
          <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            </div>
    )
  }

  export default Course