import React, { useState } from 'react'

export default function () {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    return (
        <div>
            <span>count: {count}</span>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>传递一个函数作为参数</p>
            <span>count2: {count2}</span>
            <button onClick={() => setCount2((prevCount) => prevCount + 2)}>+2</button>
        </div>
    )
}

const Bar = `() => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    return (
        <div>
            <span>count: {count}</span>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>传递一个函数作为参数</p>
            <span>count2: {count2}</span>
            <button onClick={() => setCount2((prevCount) => prevCount + 2)}>+2</button>
        </div>
    )
}`

const BarCode = Bar

export { BarCode }

