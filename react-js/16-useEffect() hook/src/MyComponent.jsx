// useEffect() = React hook that tells React DO SOME CODE WHEN (pick one):
//              this component re-renders
//              this component mounts
//              the state of a value

// useEffect(function, [depedencies])

// 1. useEffect(() => {})           // runs after every re-render
// 2. useEffect(() => {}, [])       // runs only on amount
// 3. useEffect(() => {}, [value])  // runs on amount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component amounts

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function MyComponent() {
    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState("green")

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`
    // }, [count, color])

    // function addCount() {
    //     setCount(c => c + 1)
    // }

    // function substractCount() {
    //     setCount(c => c - 1)
    // }

    // function ChangeColor() {
    //     setColor(c => c === "green" ? "red" : "green");
    // }

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event listener added")

        return() => {
            window.removeEventListener("resize", handleResize)
            console.log("event listener removed")
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
        {/* <p style={{color: color}}>count: {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={substractCount}>substract</button>
        <button onClick={ChangeColor}>Change Color</button> */}

        <p>window width: {width}px</p>
        <p>window height: {height}px</p>
    </>)
}

export default MyComponent