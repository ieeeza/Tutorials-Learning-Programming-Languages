// useState() = Re-renders the component when the state value change

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information
//            but you dont want that information to trigger new renders

// 1. accessing/interating with DOM elements
// 2. handling focus, animations, and transitions
// 3. managing timers and intervals

import MyComponent from "./MyComponent"

function App() {

  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
