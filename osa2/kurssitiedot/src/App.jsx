// Osa 2.5

import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <h1>Web development curriculum</h1>
       {courses.map(course => 
          <Course key={course.id} course={course} />
        )}
    </div>
  )
}

export default App

// Osa 2.4

// const Header = ({course}) => {
//   return (
//     <div>
//       <h2>{course.name}</h2>
//     </div>
//   )
// }

// const Part = ({part}) => {
//   return (
//       <div>
//         <p>{part.name} {part.exercises}</p>
//         </div>
//   )
// }

// const Content = ({parts}) => {
//   return (
//     <div>
//       {/* <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} /> */}
//         {/* <ul> */}
//         {parts.map(part => 
//           <Part key={part.id} part={part} />
//         )}
//         {/* </ul> */}
//     </div>
//   )
// }

// const Total = ({parts}) => {

// const totalExercises = parts.reduce(
//   (sum, part) => sum + part.exercises,
//   0,
// );

//   return (
//     <div>
//       <p>total of {totalExercises} exercises</p>
//     </div>
//   )
// }

// const Course = ({course}) => {
//   return (
//         <div>
//           <Header course={course} />
//           <Content parts={course.parts} />
//           <Total parts={course.parts} />
//           </div>
//   )
// }

// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]


//   return (
//     <div>
//       <h1>Web development curriculum</h1>
//        {courses.map(course => 
//           <Course key={course.id} course={course} />
//         )}
//       {/* <Course courses={courses} /> */}
//     </div>
//   )
// }

// export default App


// Osat 2.1 -2.3

// const Header = ({course}) => {
//   return (
//     <div>
//       <h1>{course.name}</h1>
//     </div>
//   )
// }

// const Part = ({part}) => {
//   return (
//       <div>
//         <p>{part.name} {part.exercises}</p>
//         </div>
//   )
// }

// const Content = ({parts}) => {
//   return (
//     <div>
//       {/* <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} /> */}
//         {/* <ul> */}
//         {parts.map(part => 
//           <Part key={part.id} part={part} />
//         )}
//         {/* </ul> */}
//     </div>
//   )
// }

// const Total = ({parts}) => {

// const totalExercises = parts.reduce(
//   (sum, part) => sum + part.exercises,
//   0,
// );

//   return (
//     <div>
//       <p>total of {totalExercises} exercises</p>
//     </div>
//   )
// }

// const Course = ({course}) => {
//   return (
//         <div>
//           <Header course={course} />
//           <Content parts={course.parts} />
//           <Total parts={course.parts} />
//           </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     id: 1,
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       },
//       {
//         name: 'State of a python',
//         exercises: 15,
//         id: 4
//       }
//     ]
//   }

//   return (
//     <div>
//       <Course course={course} />
//     </div>
//   )
// }

// export default App


// // Osa 1.5

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course.name}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.name} {props.exercises}</p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }


// Osa 1.4

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.name} {props.exercises}</p>
//     </div>
//   )
// }

// const Content = (props) => {
//   console.log(props.parts)
//   return (
//     <div>
//       <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//   <div>
//     <Header course={course} />
//     <Content parts={parts} />
//     <Total parts={parts} />
//   </div>
//   )
// }



// Osa 1.3
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.name} {props.exercises}</p>
//     </div>
//   )
// }

// const Content = (props) => {
//   console.log(props.part)
//   return (
//     <div>
//       <Part name={props.part.name} exercises={props.part.exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.allexercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }


//   return (
//     <div>
//       <Header course={course} />
//       <Content part= {part1}/>
//       <Content part={part2}/>
//       <Content part={part3}/>
//       <Total allexercises = {part1.exercises + part2.exercises + part3.exercises} />
//     </div>
//   )
// }


