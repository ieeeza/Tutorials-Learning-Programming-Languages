import List from "./List"

function App() {

  const fruits = [{id: 1, name: "Apple", calorias: 95}, {id: 2, name: "Orange", calorias: 45}, {id: 3, name: "Banana", calorias: 105}, {id: 4, name: "Coconut", calorias: 159}, {id: 5, name: "Pineapple", calorias: 37}]

  const vegetables = [{id: 6, name: "potatoes", calorias: 110}, {id: 7, name: "celery", calorias: 15}, {id: 8, name: "carrots", calorias: 25}, {id: 9, name: "corn", calorias: 63}, {id: 10, name: "broccoli", calorias: 50}]

  return (
    <>
      {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
      {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>}
    </>
  )
}

export default App
