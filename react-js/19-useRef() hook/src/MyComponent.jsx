import React, { useState, useEffect, useRef } from "react";

function MyComponent() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Componente!")
    });

    function handleClick() {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
    }

    return(
        <div>
            <button onClick={handleClick}>Click</button>
            <input ref={inputRef} />
        </div>
    );
}

export default MyComponent