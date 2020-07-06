import React, { useState } from 'react'

export default function() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <span>count: {count}</span><button onClick={() => setCount(count+1)}>+1</button>
        </div>
    )
}

const Bar = `() => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <span>count: {count}</span><button onClick={() => setCount(count+1)}>+1</button>
        </div>
    )
}`

const BarCode = Bar

export { BarCode }

