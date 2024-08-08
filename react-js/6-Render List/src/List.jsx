import PropTypes from "prop-types"

function List(props) {

    const category = props.category
    const itemList = props.items

    // const fruits = [{id: 1, name: "Apple", calorias: 95}, {id: 2, name: "Orange", calorias: 45}, {id: 3, name: "Banana", calorias: 105}, {id: 4, name: "Coconut", calorias: 159}, {id: 5, name: "Pineapple", calorias: 37}]

    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a, b) => a.calorias - b.calorias)

    // const lowCalFruits = fruits.filter(fruit => fruit.calorias < 100)

    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calorias}</li>)
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; {lowCalFruit.calorias}</li>)

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calorias}</li>)

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>)
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calorias: PropTypes.number}))
}

List.defaultProps = {
    category: "Categoria",
    items: []
}

export default List