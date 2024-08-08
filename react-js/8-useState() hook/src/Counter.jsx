// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function Counter() {
    
    const [count, SetCount] = useState(0)

    const increment = () => {
        SetCount(count + 1)
    }

    
    const decrement = () => {
        SetCount(count - 1)
    }

    
    const reset = () => {
        SetCount(0)
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Diminuir</button>
            <button className="counter-button" onClick={reset}>Resetar</button>
            <button className="counter-button" onClick={increment}>Aumentar</button>
        </div>
    )
}

export default Counter