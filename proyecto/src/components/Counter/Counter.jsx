import React from "react";
import { useState } from "react";
import "../Counter/Counter.css"

let stock = 5

const Counter = () => {
    const [count, setCount] = useState (0)

    const increment = () => {
        if (count < stock) {
            setCount (count +1)
        }
    }

    const decrement = () => {
        if (count >0) {
            setCount (count -1)
        }
    }

    return (
        <div className="contador">
            <button className="elements" onClick={decrement}> - </button>
            <h2 className="elements">{count}</h2>
            <button className="elements" onClick={increment}> + </button>
        </div>
    )
}

export default Counter