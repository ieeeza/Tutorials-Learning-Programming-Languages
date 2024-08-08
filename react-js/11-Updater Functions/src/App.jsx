// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state    
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import Counter from "./Counter"

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
