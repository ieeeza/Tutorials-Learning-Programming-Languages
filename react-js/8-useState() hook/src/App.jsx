// React hook = special function that allows functional components to use React
//             features without writing class components (React v16.4)
//             (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() = A react hook that allows the creation of a stateful variable
//             AND a setter function to update its value in the virtual DOM.
//             [name, set]

// eslint-disable-next-line no-unused-vars
import MyComponent from "./MyComponent"
import Counter from "./Counter"

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
