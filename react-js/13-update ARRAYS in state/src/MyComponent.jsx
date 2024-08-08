// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function MyComponent() {
    
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(<div>
        <h2>List of foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter a food"/>
        <button type="text" onClick={handleAddFood}>add food</button>
    </div>)
}

export default MyComponent;