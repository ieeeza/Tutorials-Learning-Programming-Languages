// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function MyComponent() {
    
    const [name, setName] = useState("Convidado")
    const [age, setAge] = useState(0)
    const [isEmployed, setisEmployed] = useState(false)

    const updateName = () => {
        setName("César")
    }
    
    const updateAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed)
    } 

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Colocar nome</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Colocar idade</button>

            <p>Is Employed: {isEmployed ? "Sim" : "Não"}</p>
            <button onClick={toggleEmployedStatus}>Mudar status</button>
        </div>
    )
}

export default MyComponent