// props = read-only properties that are shared between components. 
//         A parent component can send data to a child component.
//         <component key=value>

// propTypes = a mechanism that ensures that the passed value is of the correct datatypes.
//             age: propTypes.number

// defaultProps = default values for props in case the are not passed from parent ocmponent.
//               name: "Guest"



import Student from "./Student"

function App() {

  return (
    <>
      <Student name = "César" age = {20} isStudent = {true}/>
      <Student/>
    </>
  )
}

export default App
